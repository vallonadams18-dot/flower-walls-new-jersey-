# Domain cutover runbook

**Prepared:** August 24, 2026
**Target production domain:** `https://www.flowerwallsnewjersey.com`
**Hosting:** GitHub Pages, deployed from `main` by `.github/workflows/deploy.yml`

Every DNS value below was **resolved live**, not recalled. No DNS was changed
in preparing this document.

---

## ⚠ Read this before you touch DNS: the email hazard

The domain's mail is routed like this today:

```
MX   flowerwallsnewjersey.com  →  flowerwallsnewjersey.com   (preference 0)
A    flowerwallsnewjersey.com  →  192.169.176.191
```

The MX record points at the **domain itself**, so mail is delivered to
whatever the apex `A` record resolves to. GitHub Pages does not run a mail
server. **If you repoint the apex `A` record to GitHub without changing the MX
first, inbound email to anything@flowerwallsnewjersey.com stops immediately.**

Two things reduce the risk but do not remove it: the site's published contact
address is `flowerwallsnewjersey@gmail.com`, and `mail.flowerwallsnewjersey.com`
has no A record of its own. If nobody actually receives mail at this domain,
this is moot — but confirm that before assuming it.

There is also an SPF record that will become wrong:

```
TXT  v=spf1 +a +mx +ip4:192.169.176.191 ~all
```

`+a` authorises the apex A record to send mail. After the change that means
GitHub's IPs, which is not what anyone intends.

---

## Current DNS (resolved 2026-08-24 via 8.8.8.8)

| Record | Name | Value | Note |
|---|---|---|---|
| NS | flowerwallsnewjersey.com | `ns1.cprapid.com`, `ns2.cprapid.com` | cPanel-hosted DNS — edit in your host's **Zone Editor**, not at the registrar |
| A | flowerwallsnewjersey.com | `192.169.176.191` | the WordPress server |
| CNAME | www | `flowerwallsnewjersey.com` | www currently follows the apex |
| MX | flowerwallsnewjersey.com | `flowerwallsnewjersey.com` (pref 0) | **see hazard above** |
| TXT | flowerwallsnewjersey.com | `v=spf1 +a +mx +ip4:192.169.176.191 ~all` | SPF |
| CAA | — | none | good; nothing blocks certificate issuance |

## Target DNS for GitHub Pages

GitHub Pages' four IPv4 addresses, resolved live from
`vallonadams18-dot.github.io`:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## Option A — full cutover (apex + www on the new site)

Both `flowerwallsnewjersey.com` and `www.` serve the new site; GitHub
redirects the apex to www automatically. **Do the mail steps first.**

**Step 1 — protect email (do this, then wait for TTL to expire)**

1. Add an `A` record: `mail` → `192.169.176.191`
2. Change the `MX` record to `mail.flowerwallsnewjersey.com`, preference `0`
3. Change the SPF `TXT` to `v=spf1 +mx +ip4:192.169.176.191 ~all` (drop `+a`)
4. Wait for the old TTL to expire, then send a test message to an address on
   this domain and confirm it arrives. Do not continue until it does.

**Step 2 — set the site up in GitHub, before DNS moves**

5. Repo → **Settings → Secrets and variables → Actions → Variables → New
   repository variable**
   Name `PRODUCTION_DOMAIN`, value `www.flowerwallsnewjersey.com`
6. Re-run the deploy: **Actions → Deploy to GitHub Pages → Run workflow**.
   This builds without the `/flower-walls-new-jersey-` path prefix, writes the
   `CNAME` file, and runs the cutover audit as a gate — if anything is wrong
   the deploy fails instead of publishing a broken site.
7. Repo → **Settings → Pages → Custom domain** → enter
   `www.flowerwallsnewjersey.com` → Save.

   Expect a DNS check failure at this point. That is correct — DNS has not
   moved yet.

**Step 3 — move DNS**

8. `CNAME` for `www` → `vallonadams18-dot.github.io`
   (replace the existing `www → flowerwallsnewjersey.com`)
9. Replace the apex `A` record `192.169.176.191` with the four GitHub IPs above
   — four separate `A` records on `@`.
10. Leave MX, the new `mail` A record and the SPF TXT exactly as set in step 1.

**Step 4 — finish**

11. Wait for propagation, then GitHub **Settings → Pages** → tick
    **Enforce HTTPS**. The certificate can take up to ~24h to issue; the
    checkbox stays greyed out until it does.

## Option B — lower risk, www only

If you would rather not touch the apex or the mail records at all:

- Change only the `www` CNAME → `vallonadams18-dot.github.io`
- Leave the apex `A`, MX and SPF untouched

New site serves `www.`, email is untouched, nothing can break. The cost: the
apex `flowerwallsnewjersey.com` keeps serving the old WordPress site, so the
old content stays live and competes with the new. Mitigate by adding a
redirect from apex → `https://www.flowerwallsnewjersey.com` on the old cPanel
host, and keep that hosting paid until you are ready for Option A.

**Recommendation:** Option A, done in the stated order. Option B only if you
cannot confirm who uses domain email.

---

## Post-cutover tests

Run in this order. Stop and fix if any fails.

```bash
# 1. www serves the new site over HTTPS, HTTP 200
curl -sI https://www.flowerwallsnewjersey.com/ | head -1

# 2. apex redirects to www (Option A only)
curl -sI https://flowerwallsnewjersey.com/ | grep -i "^location"

# 3. the new site, not WordPress — this string only exists on the new build
curl -s https://www.flowerwallsnewjersey.com/ | grep -c "events-track"

# 4. assets load from the root, not /flower-walls-new-jersey-/
curl -s https://www.flowerwallsnewjersey.com/ | grep -o '/_next/static/[^"]*\.css' | head -1

# 5. canonical is correct and self-referencing
curl -s https://www.flowerwallsnewjersey.com/flower-wall-rental-newark-nj/ | grep -o '<link rel="canonical" href="[^"]*"'

# 6. sitemap and robots
curl -s https://www.flowerwallsnewjersey.com/sitemap.xml | grep -c "<loc>"      # expect 104
curl -s https://www.flowerwallsnewjersey.com/robots.txt

# 7. redirects from the old site actually land
curl -s https://www.flowerwallsnewjersey.com/products/ | grep -o 'url=[^"]*'
curl -s https://www.flowerwallsnewjersey.com/custom-signs-san-francisco/ | grep -o 'url=[^"]*'

# 8. the OG image resolves (it did not before this pass)
curl -sI https://www.flowerwallsnewjersey.com/img/og.jpg | head -1

# 9. no page still points at the preview host
curl -s https://www.flowerwallsnewjersey.com/ | grep -c "github.io"             # expect 0

# 10. email still flows (Option A only) — send a real message and confirm
```

Then, by hand: load the homepage on a phone, confirm the slideshow moves,
click into a wall, and click a CheckCherry booking link to confirm it opens
the right package.

---

## Google Search Console, after the domain is live and verified

Do none of this before the tests above pass.

1. **Add the property.** Prefer a Domain property (`flowerwallsnewjersey.com`)
   — it covers apex, www, http and https in one. It verifies by DNS TXT, in
   the same cPanel Zone Editor. A URL-prefix property for
   `https://www.flowerwallsnewjersey.com/` also works if DNS verification is
   awkward.
2. **Do not file a Change of Address.** That tool is for moving between
   *different domains*. This is the same domain changing servers, so it does
   not apply and would be the wrong signal.
3. **Submit the sitemap:** `https://www.flowerwallsnewjersey.com/sitemap.xml`
4. **Use URL Inspection → Request indexing** on the handful that matter most
   rather than everything: the homepage, `/flower-walls/`, `/photo-booths/`,
   and two or three grid pages such as
   `/flower-wall-rental-newark-nj/`. Crawling follows internal links from
   there.
5. **Watch Coverage/Pages for two weeks.** The old WordPress URLs will report
   as redirects — that is expected and correct. What matters is that the
   redirect stubs are being followed and the new URLs move to Indexed.
6. **Check the old indexed URLs specifically:** `/products/`, `/shop/`,
   `/resources/`, `/corporate-flower-wall-rentals/`,
   `/custom-signs-san-francisco/`. If any still show the old content after a
   few weeks, the redirect is not being seen.
7. **Bing Webmaster Tools** takes an import from Search Console in two clicks
   and is worth the two minutes.

---

## The one limitation to know about

GitHub Pages cannot return a `301`. Every redirect in `src/data/redirects.ts`
ships as an HTML stub with a meta refresh, a JS replace and a canonical
pointing at the destination. Google follows these and they do pass signals,
but a real `301` consolidates faster and more completely.

If preserving the old site's authority matters, hosting this same export on
**Cloudflare Pages** — same repo, same build command, no code change — makes
the already-generated `out/_redirects` file produce genuine `301`s. That is
the only reason to consider moving host, and it is a decision, not a defect.
