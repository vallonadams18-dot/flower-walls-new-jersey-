/**
 * The blog — playbook Phase 6.
 *
 * Round 1's gap analysis found this was the strongest competitor's entire
 * local-search strategy: twelve posts, six naming North Jersey in the title,
 * and no location pages at all. This answers it directly.
 *
 * The rule for what belongs here: a question someone actually types, that we
 * can answer better than a generic wedding blog because we deliver in this
 * state every weekend. No listicles, no filler.
 *
 * ONE DELIBERATE DEPARTURE FROM THE PLAYBOOK. Phase 6 says a cost post should
 * "publish the real number". This site's hard rule is no prices anywhere, and
 * the client's rule wins — inventing an anchor figure to satisfy a playbook is
 * exactly the failure the playbook itself warns about elsewhere. The cost post
 * below explains honestly what moves a quote up and down instead, which is the
 * part people actually need in order to plan.
 */

export interface Post {
  slug: string;
  title: string;
  /** Shown on the index and as the article standfirst. */
  dek: string;
  meta: { title: string; description: string };
  /** ISO date — used for `datePublished` and the index ordering. */
  date: string;
  /** Rough read time, minutes. */
  minutes: number;
  sections: { h: string; p: string[] }[];
  /** Internal links out, so no post is a cul-de-sac. */
  related: { label: string; href: string }[];
}

export const POSTS: Post[] = [
  {
    slug: "what-size-flower-wall-do-i-need",
    title: "What size flower wall do you actually need?",
    dek: "The honest answer depends on three things, and none of them is the size of your guest list.",
    meta: {
      title: "What Size Flower Wall Do You Need?",
      description:
        "How to choose a flower wall size for a New Jersey venue — ceiling height, how far back the photographer stands, and how many people need to fit in frame.",
    },
    date: "2026-08-24",
    minutes: 5,
    sections: [
      {
        h: "Start with how many people are in the photograph",
        p: [
          "Not how many people are at the party — how many are in the picture at once. A wall that only ever has two people in front of it can be narrower than one couples, bridal parties and grandparents all crowd into. Our standard 8ft x 8ft comfortably holds four or five adults with room at the edges. Push to eight people and you want closer to twelve feet, built as linked sections.",
          "The mistake we see most often is ordering to the room rather than to the group. A large room does not need a large wall if the photographs are all going to be pairs.",
        ],
      },
      {
        h: "Then check the ceiling, not the floor",
        p: [
          "Height is the constraint people forget. A standard wall stands around eight feet with the frame, and plenty of New Jersey venues — brownstone parlour floors in Hoboken, older function rooms around Morristown Green, basement event spaces almost everywhere — have ceilings low enough that eight feet crowds a light fitting or a sprinkler head.",
          "We can drop the frame height, and it usually improves the photograph rather than hurting it: a wall that stops well below the ceiling reads as deliberate, while one brushing a pipe reads as a mistake. Measure before you order, or send us a photograph of the room and we will tell you.",
        ],
      },
      {
        h: "Then ask how far back the camera can stand",
        p: [
          "This is the one nobody thinks about and it decides more than the other two. A twelve-foot wall in a room where the photographer can only back up six feet cannot be photographed in one frame. They will end up shooting it at an angle or cropping it, and you have paid for four feet nobody sees.",
          "If the wall is going in a corridor, a narrow bar area or against the long side of a packed room, go narrower and denser. If it is at the end of a ballroom with thirty feet of clear floor, go wide.",
        ],
      },
      {
        h: "A practical rule",
        p: [
          "Eight by eight handles the large majority of what we deliver in New Jersey. Go wider when the wall is a stage backdrop or the room is genuinely large — the banquet halls around Edison are the clearest case, where a standard wall can simply disappear. Go narrower when the ceiling is low, the room is tight, or the camera cannot retreat.",
          "When you enquire, tell us the venue and the room rather than a size. We would rather propose the size than sell you the one you guessed.",
        ],
      },
    ],
    related: [
      { label: "Browse the flower wall collection", href: "/flower-walls/" },
      { label: "Flower wall rental in Edison", href: "/flower-wall-rental-edison-nj/" },
      { label: "Flower wall rental in Hoboken", href: "/flower-wall-rental-hoboken-nj/" },
    ],
  },

  {
    slug: "certificate-of-insurance-nj-venues",
    title: "Your New Jersey venue asked for a COI. What now?",
    dek: "A certificate of insurance sounds like a hurdle. It is usually a five-minute email — as long as you ask early.",
    meta: {
      title: "COI Requirements at New Jersey Venues",
      description:
        "What a certificate of insurance is, why New Jersey venues ask vendors for one, what has to be on it, and how to avoid the week-of scramble.",
    },
    date: "2026-08-22",
    minutes: 6,
    sections: [
      {
        h: "What a COI actually is",
        p: [
          "A certificate of insurance is a one-page document from a vendor's insurer confirming they carry liability cover, how much, and for what dates. Venues ask for it because anyone bringing equipment into their building is a risk they are being asked to accept, and the certificate is the proof that risk is insured.",
          "It is paperwork, not an obstacle. Any vendor who works venues regularly produces these constantly and will not be surprised by the request.",
        ],
      },
      {
        h: "Why the venue often wants to be named on it",
        p: [
          "Most venues do not just want to see that cover exists — they want to be listed on the certificate as an additional insured, sometimes with specific wording and their legal entity name rather than their trading name. That detail matters, because a certificate made out to 'The Grand Ballroom' when the entity is something else entirely can be rejected on the day.",
          "This is why the request needs to reach your vendors as a document, not as a sentence. Forward the venue's actual requirements. Guessing at them produces a certificate that has to be reissued.",
        ],
      },
      {
        h: "The timing mistake",
        p: [
          "The scramble almost always happens the same way: the venue asks for COIs from all vendors two weeks out, the couple forwards it to the florist and the band and forgets the backdrop and booth supplier, and someone is chasing an insurer on a Friday afternoon.",
          "Ask every vendor for a COI at the point of booking, not when the venue prompts you. Nothing about it expires awkwardly and having it early costs nothing.",
        ],
      },
      {
        h: "Which New Jersey venues ask",
        p: [
          "In our experience the pattern is by venue type rather than by town. Hotels and conference floors almost always ask. University and institutional venues almost always ask, and are usually the most specific about wording. Casino and large-resort venues in Atlantic City run vendor packs that go well beyond a COI, with credentialling and scheduled load-in windows. Country clubs and private homes vary enormously.",
          "Restaurants and small private rooms often do not ask at all — which is not a reason to skip having one.",
        ],
      },
      {
        h: "What we do",
        p: [
          "Send us what your venue requires and we turn a certificate around the same day, with the venue named exactly as they have asked. If you would rather we dealt with the venue's events team directly, give us the contact and we will — it is one fewer thing in a week that already has too much in it.",
        ],
      },
    ],
    related: [
      { label: "Frequently asked questions", href: "/faq/" },
      { label: "Flower wall rental in Atlantic City", href: "/flower-wall-rental-atlantic-city-nj/" },
      { label: "Wedding flower wall in Princeton", href: "/wedding-flower-wall-princeton-nj/" },
    ],
  },

  {
    slug: "north-jersey-wedding-venues-access-guide",
    title: "North Jersey wedding venues, judged on something nobody lists",
    dek: "Every venue guide ranks the view and the food. This one ranks the loading door — because it decides what your vendors can actually deliver.",
    meta: {
      title: "North Jersey Wedding Venues: An Access Guide",
      description:
        "A vendor's-eye guide to North Jersey wedding venue types — loading access, ceiling heights and setup windows, and what each means for your decor.",
    },
    date: "2026-08-20",
    minutes: 7,
    sections: [
      {
        h: "Why access is worth caring about",
        p: [
          "Couples choose a venue on the room, the food and the view, which is correct — those are what the day feels like. But the loading door quietly decides how much decor is realistic, how early everything has to arrive, and whether a piece you have set your heart on can physically enter the building.",
          "None of this appears in a venue brochure. It is the kind of thing vendors know and nobody writes down, so here it is by venue type rather than by name, because the pattern holds far better than any individual listing.",
        ],
      },
      {
        h: "Waterfront hotels and towers",
        p: [
          "The Hudson-facing hotels in Jersey City and the larger Newark and Morristown hotel ballrooms are the easiest buildings in North Jersey to deliver into. Service entrances, freight lifts, banquet teams who have a load-in plan before you arrive. Almost anything is deliverable here.",
          "The trade is precision. Your room is being turned around between events on a schedule, so setup windows are real and tight. Vendors who drift half an hour collide with someone else's wedding. Give every supplier the venue's access window in writing.",
        ],
      },
      {
        h: "Brownstones, lofts and converted buildings",
        p: [
          "Hoboken parlour floors, Grove Street lofts, Powerhouse-district conversions and the older buildings around Montclair are where the character is — and where everything is a hand-carry. Narrow stairs, half-landings, no loading zone, and in Hoboken specifically nowhere legal to leave a van while you work.",
          "This does not rule anything out. It means every vendor needs to know in advance so they send the right number of people at the right hour. What it does rule out is the late arrival — nobody is carrying a backdrop up a brownstone staircase forty minutes before the ceremony.",
        ],
      },
      {
        h: "Historic and institutional venues",
        p: [
          "Around Princeton and New Brunswick a good share of the best rooms are old, protected or institutional. Expect narrow original doorways, rules about what may be fixed to a wall or floor, and the most specific insurance requirements you will encounter anywhere in the state.",
          "Free-standing decor is what gets a yes here. Anything that has to attach to the building is a conversation, and often a no. Ask the venue what may touch their surfaces before you commit to a design.",
        ],
      },
      {
        h: "Country clubs and garden venues",
        p: [
          "Generally straightforward — a service entrance, staff used to outside vendors, and space to work. The variable is outdoors. A lawn ceremony means anything free-standing needs a level bearing and weighting, and after a wet week it needs boards under it.",
          "The other outdoor variable is wind, which is a genuine safety limit rather than a preference. Any vendor who tells you a tall free-standing piece is fine in any conditions is not being straight with you.",
        ],
      },
      {
        h: "The question to ask on your venue tour",
        p: [
          "One question covers most of it: 'What is the vendor load-in — where do they come in, when can they start, and what do you require from them?' Ask it on the tour, write the answer down, and forward it to every supplier at booking.",
          "It is unglamorous and it prevents most of the things that go wrong on a wedding morning.",
        ],
      },
    ],
    related: [
      { label: "Areas we serve across New Jersey", href: "/locations/" },
      { label: "Wedding flower wall in Jersey City", href: "/wedding-flower-wall-jersey-city-nj/" },
      { label: "Wedding flower wall in Morristown", href: "/wedding-flower-wall-morristown-nj/" },
    ],
  },

  {
    slug: "bridal-shower-north-jersey-planning",
    title: "Planning a bridal shower in North Jersey",
    dek: "Showers are smaller than weddings and get planned in a fraction of the time, which changes what is worth spending on.",
    meta: {
      title: "Bridal Shower Planning in North Jersey",
      description:
        "How to plan a bridal shower in North Jersey — choosing between a restaurant, a home and a private room, and where decor actually earns its place.",
    },
    date: "2026-08-18",
    minutes: 6,
    sections: [
      {
        h: "Three venue options, and what each costs you in effort",
        p: [
          "A restaurant private room is the least work: they handle food, service and clearing, and you arrive with decor. A private home gives you complete freedom and hands you every logistical job the restaurant would have absorbed. A dedicated event space sits between the two and usually asks for the most notice.",
          "Around Montclair and the surrounding towns the at-home shower is the most common of the three, and the one people underestimate. Someone has to receive the caterer, park four cars, and clear up. Decide who that is before the day, and make sure it is not the person hosting.",
        ],
      },
      {
        h: "Where decor actually earns its place",
        p: [
          "A shower has one photograph everyone takes: the guest of honour with each cluster of guests, one after another, in the same spot. That spot is worth doing properly, and almost nothing else is.",
          "This is why a backdrop does more for a shower than for a wedding, proportionally. At a wedding the photographs are spread across a whole day and venue. At a shower they are concentrated in one corner over about two hours. Put the effort there rather than spreading it across every table.",
        ],
      },
      {
        h: "Timing the two hours that matter",
        p: [
          "Showers run shorter than people plan for. Guests arrive across half an hour, eat, watch gifts opened, and photographs happen in the first hour and around the gifts. If a backdrop is going up, it needs to be finished before the first guest arrives, not during arrivals.",
          "For an at-home shower that means agreeing a delivery window that does not collide with the caterer. Two vans and a florist in one driveway at the same time is how a calm morning stops being calm.",
        ],
      },
      {
        h: "How far ahead to book",
        p: [
          "Spring and early summer Saturdays are the pressure point in North Jersey — the same weekends that fill with weddings. If your date is between April and June, book decor when you book the venue. Autumn and midweek dates are far more relaxed and can often be arranged in a couple of weeks.",
        ],
      },
    ],
    related: [
      { label: "Bridal shower backdrops", href: "/events/bridal-showers/" },
      { label: "Flower wall rental in Montclair", href: "/flower-wall-rental-montclair-nj/" },
      { label: "Wall and booth packages", href: "/packages/" },
    ],
  },

  {
    slug: "flower-wall-vs-balloon-backdrop",
    title: "Flower wall or balloon backdrop?",
    dek: "They photograph differently, they age differently over an evening, and one of them is much harder to get right.",
    meta: {
      title: "Flower Wall vs Balloon Backdrop",
      description:
        "An honest comparison of flower walls and balloon backdrops for New Jersey events — how each photographs, how each holds up, and when to choose which.",
    },
    date: "2026-08-16",
    minutes: 5,
    sections: [
      {
        h: "How they photograph",
        p: [
          "A flower wall is a dense, even field of texture, which is exactly what a camera wants behind a person: it separates the subject without competing. It also holds up under almost any lighting, because the texture reads even when the colour shifts.",
          "A balloon backdrop is shape and gloss rather than texture. It photographs boldly and it reflects whatever light is in the room, which can be wonderful and can also mean a row of bright highlights and a flash bouncing back at the camera. Under coloured uplighting balloons can go somewhere you did not plan.",
        ],
      },
      {
        h: "How they hold up across an evening",
        p: [
          "This is the real difference. A flower wall looks the same at midnight as it did at six. Balloons do not — they soften, they drift, and in a warm room or direct sun they are on a clock. Outdoors on a July afternoon in New Jersey that clock runs fast.",
          "Neither is fragile exactly. But if your photographs happen late in the evening, one of these two is a safer choice.",
        ],
      },
      {
        h: "Where balloons win",
        p: [
          "Colour range and shape. If you want a specific bold palette, an arch over a doorway, or something sculptural and playful, balloons do things a wall cannot. For a first birthday or a themed party where the look is the point, they are often the better answer.",
          "They also suit spaces where a free-standing wall will not fit, because an organic garland can follow a shape a rigid frame cannot.",
        ],
      },
      {
        h: "Where a wall wins",
        p: [
          "Anywhere the backdrop has to work for hours and be photographed constantly — weddings, showers, corporate activations, anything with a queue of people taking turns in front of it. It is also the better choice where signage or a logo sits on top, because a dense even field is the ideal background for lettering.",
          "And if the event is outdoors, a weighted free-standing wall handles sun and warmth in a way inflated latex simply does not.",
        ],
      },
      {
        h: "The unglamorous answer",
        p: [
          "Plenty of the best setups use both — a wall as the photograph backdrop, balloons adding shape and colour at the entrance or over the cake table. They are not really competitors. They are doing different jobs.",
        ],
      },
    ],
    related: [
      { label: "Browse the flower wall collection", href: "/flower-walls/" },
      { label: "Birthday backdrops", href: "/events/birthdays/" },
      { label: "Custom signs and neon", href: "/custom-signs/" },
    ],
  },

  {
    slug: "what-decides-flower-wall-cost",
    title: "What actually decides the cost of a flower wall rental",
    dek: "We quote to the event rather than from a price list. Here is exactly what moves the number, so you can plan around it.",
    meta: {
      title: "What Decides Flower Wall Rental Cost",
      description:
        "The real factors behind a flower wall rental quote in New Jersey — size, access, timing, travel and how long the wall stands. No price list, no guesswork.",
    },
    date: "2026-08-14",
    minutes: 6,
    sections: [
      {
        h: "Why there is no price list",
        p: [
          "The same wall, in the same week, can be two genuinely different jobs. One goes into a hotel ballroom with a loading dock at ten in the morning. The other goes up a Hoboken staircase at six in the evening with nowhere to park. The flowers are identical; almost nothing else is.",
          "A published price would either be the high one — in which case the easy jobs are overcharged — or the low one, with the difference reappearing as surcharges later. We would rather quote the actual event. What follows is everything that goes into that, so nothing on your quote is a surprise.",
        ],
      },
      {
        h: "Size, and how it is built",
        p: [
          "The standard is 8ft x 8ft. Wider spans are built as linked sections, which is more frame, more flowers and more time on site. Height changes things less than width. A pair of walls flanking an entrance costs more than one wall of the same total width, because it is two installations.",
        ],
      },
      {
        h: "Access",
        p: [
          "The single biggest swing factor. A dock and a freight lift is a two-person job. A walk-up with no loading zone is a larger crew and a longer window. This is why we ask about the door before anything else — not to find a reason to charge more, but because a job quoted without knowing it is a job quoted wrong.",
        ],
      },
      {
        h: "Timing",
        p: [
          "An install that has to happen inside a narrow window between two events costs more than one with a relaxed morning. Overnight collection, very early access, and same-day turnarounds all sit in the same category. Flexibility on your side genuinely reduces the number.",
        ],
      },
      {
        h: "Travel and how long it stands",
        p: [
          "We work from two hubs, Newark and Barnegat. Towns close to either are a normal run; the far edges of the radius are a longer one, and travel is quoted before you book rather than added afterwards. A wall standing across several days — common for multi-day celebrations around Edison — is priced differently from a single evening, because the wall and the crew are committed for that period.",
        ],
      },
      {
        h: "What does not change the price",
        p: [
          "Which wall you pick from the collection, in most cases — a rose wall and a greenery wall of the same size are the same job. Whether you also book a booth usually makes the combination cheaper rather than dearer, because it is one delivery and one setup.",
          "The fastest way to a real number: tell us the date, the venue and the room. Not a budget, not a guess at a size. We will come back with a figure that accounts for everything above.",
        ],
      },
    ],
    related: [
      { label: "Ask for a quote", href: "/contact/" },
      { label: "Wall and booth packages", href: "/packages/" },
      { label: "Areas we serve", href: "/locations/" },
    ],
  },

  {
    slug: "jersey-shore-outdoor-backdrops",
    title: "What the shore does to an outdoor backdrop",
    dek: "Sand, wind and salt air are not decorative problems. They are structural ones, and they are why some shore setups move indoors.",
    meta: {
      title: "Jersey Shore Outdoor Backdrops: What to Expect",
      description:
        "Beach and oceanfront events on the Jersey Shore — how sand, wind and salt air affect a flower wall, and how to plan an outdoor backdrop that holds.",
    },
    date: "2026-08-12",
    minutes: 5,
    sections: [
      {
        h: "Sand is not a floor",
        p: [
          "A weighted free-standing frame relies on its feet staying where they are put. Sand does not offer that — it gives, unevenly, and it keeps giving as people walk around. A wall on a beach needs boards under the frame to spread the load and considerably more ballast than the same wall on a ballroom floor.",
          "None of that is exotic. It is just equipment that has to be brought deliberately, which is why a beach install is a different booking from an indoor one and needs to be described as such when you enquire.",
        ],
      },
      {
        h: "Wind is the limit, and it is a real one",
        p: [
          "A flower wall is a solid vertical panel. In engineering terms it is a sail, and on open coast the wind is stronger and less predictable than anywhere inland. There is a wind speed above which we will not put one up, and we would far rather tell you the day before than have a conversation about it afterwards.",
          "This is worth planning for rather than hoping through. If a ceremony is on the sand, the most reliable answer is usually to put the backdrop where the reception is, and let the ocean be the ceremony's backdrop — it is a better one anyway.",
        ],
      },
      {
        h: "Salt air, over hours rather than minutes",
        p: [
          "Over the length of an event, salt air does nothing visible to silk florals. Over a night left outside it is not something we choose to do. Where the schedule allows we collect the same evening on the coast rather than leaving a wall standing until morning.",
        ],
      },
      {
        h: "What works reliably on the shore",
        p: [
          "The oceanfront hotels and the Asbury Park venues are, honestly, some of our favourite rooms anywhere — conventional load-in, staff used to vendors, and late-afternoon light off the water that flatters a flower wall more than any uplighting we could add.",
          "If you want the shore in your photographs without betting the day on the forecast, that is the combination: the water in the view, the wall somewhere with a roof.",
        ],
      },
    ],
    related: [
      { label: "Flower wall rental on the Jersey Shore", href: "/flower-wall-rental-jersey-shore/" },
      { label: "Areas we serve", href: "/locations/" },
      { label: "Wedding backdrops", href: "/events/weddings/" },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

/** Newest first, for the index. */
export const postsByDate = () =>
  [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
