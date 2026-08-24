/**
 * Photo booth lineup. Products, photography and feature lists come from the
 * Magic Mirror Brooklyn catalogue via scripts/import-booths.mjs — edit that,
 * not this file.
 *
 * No prices and no per-booth booking URLs: the CTA points at the general
 * enquiry form until real booking links are supplied.
 */
export interface Booth {
  slug: string;
  name: string;
  nav: string;
  meta: { title: string; description: string };
  h1: string;
  lede: string;
  image: { src: string; alt: string } | null;
  included: string[];
  includedLabel: string;
  bestFor: string[];
  gallery: { src: string; alt: string }[];
  sections: { h: string; p: string[] }[];
}

export const BOOTHS: Booth[] = [
  {
    "slug": "360-photo-booth",
    "name": "Infinity 360 Booth",
    "nav": "360 Booth",
    "meta": {
      "title": "Infinity 360 Booth Rental New Jersey",
      "description": "Rent a 360 photo booth in New Jersey for weddings, parties and brand activations. Slow-motion orbiting video, instant sharing, attendant included."
    },
    "h1": "360 Photo Booth Rental in New Jersey",
    "lede": "A slow-motion camera orbits your guests on a lit platform. It draws a crowd from the moment it switches on.",
    "image": {
      "src": "/img/booths/360-photo-booth/hero.jpg",
      "alt": "360 Photo Booth Rental in New Jersey — set up at a New Jersey event venue"
    },
    "included": [
      "Branded platform guests step onto",
      "HD slow-motion orbiting camera",
      "Video, GIFs and boomerangs",
      "Instant share by text, email or QR",
      "Custom video overlays and music",
      "Attendant running it all night"
    ],
    "includedLabel": "Included with every 360 photo booth rental",
    "bestFor": [
      "Sweet Sixteens",
      "Brand activations",
      "Galas",
      "Weddings"
    ],
    "gallery": [
      {
        "src": "/img/booths/360-photo-booth/photo-1.jpg",
        "alt": "360 Photo Booth rental at a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/360-photo-booth/photo-2.jpg",
        "alt": "360 Photo Booth rental at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/360-photo-booth/photo-3.jpg",
        "alt": "360 Photo Booth rental at a New Jersey event — photo 3"
      }
    ],
    sections: [
              {
                h: "How it works",
                p: [
                  "Guests step onto the platform, the arm sweeps around them, and fifteen seconds later they have a slow-motion video ready to share. An attendant runs the booth all night, keeps the line moving and helps guests nail the moment.",
                  "Videos deliver instantly by text or QR code, so your event's hashtag starts filling up while the party is still going.",
                ],
              },
              {
                h: "Space and setup",
                p: [
                  "The 360 needs roughly a 10ft x 10ft footprint with clearance on all sides, plus a standard outlet. We confirm the space against your venue before booking — some ballroom corners work, some dance-floor edges don't, and we'd rather know first.",
                ],
              },
              {
                h: "Pair it with a flower wall",
                p: [
                  "A flower wall behind the 360 platform turns every rotation into a styled shot instead of a room full of chairs. It is our most-booked combination — see the packages page.",
                ],
              },
            ],
  },
  {
    "slug": "mirror-photo-booth",
    "name": "Magic Mirror Booth",
    "nav": "Mirror Booth",
    "meta": {
      "title": "Magic Mirror Booth Rental New Jersey",
      "description": "Rent the full-length magic mirror photo booth in New Jersey. Touchscreen animations, studio-quality DSLR photos, unlimited prints and an attendant included."
    },
    "h1": "Magic Mirror Photo Booth Rental in New Jersey",
    "lede": "The full-length interactive mirror that started it all — animated touchscreen, studio lighting, and prints in your hands in seconds.",
    "image": {
      "src": "/img/booths/mirror-photo-booth/hero.jpg",
      "alt": "Magic Mirror Booth — full-length gold-framed mirror photo booth at a New Jersey event venue"
    },
    "included": [
      "Full-length interactive touchscreen mirror",
      "Pro-grade Canon DSLR + studio ring light",
      "Unlimited 4x6 prints all night",
      "Animated overlays and voice guidance",
      "Beauty filter and skin-smoothing",
      "Custom-designed print template"
    ],
    "includedLabel": "Included with every magic mirror booth rental",
    "bestFor": [
      "Weddings",
      "Sweet Sixteens",
      "Bar & bat mitzvahs",
      "Corporate parties"
    ],
    "gallery": [
      {
        "src": "/img/booths/mirror-photo-booth/photo-1.jpg",
        "alt": "Mirror Photo Booth rental at a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/mirror-photo-booth/photo-2.jpg",
        "alt": "Mirror Photo Booth rental at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/mirror-photo-booth/photo-3.jpg",
        "alt": "Mirror Photo Booth rental at a New Jersey event — photo 3"
      }
    ],
    sections: [
              {
                h: "Why guests love it",
                p: [
                  "The mirror greets guests, walks them through poses with animations, and lets them sign or doodle on their photo before it prints. It photographs people at full length, which flatters gowns and suits in a way a cropped booth cannot.",
                  "It is the booth people queue for twice — once to take photos and once to watch other people take them.",
                ],
              },
              {
                h: "What is included",
                p: [
                  "Delivery and setup, an attendant for the full rental, unlimited sessions, instant prints, props, a custom print template matched to your event, and a digital gallery afterwards.",
                ],
              },
            ],
  },
  {
    "slug": "glam-photo-booth",
    "name": "Glam Booth",
    "nav": "Glam Booth",
    "meta": {
      "title": "Glam Booth Rental New Jersey",
      "description": "Rent the glam photo booth in New Jersey — signature black-and-white edit with skin-smoothing, studio lighting and unlimited prints. Free quote in 30 seconds."
    },
    "h1": "Glam Photo Booth Rental in New Jersey",
    "lede": "The black-and-white, skin-smoothing look made famous on the red carpet. Every guest leaves looking like the shot was retouched.",
    "image": {
      "src": "/img/booths/glam-photo-booth/hero.jpg",
      "alt": "Couple posing for a black-and-white glam booth portrait at a New Jersey event"
    },
    "included": [
      "Signature black-and-white glam edit",
      "Skin-smoothing retouch on every frame",
      "Studio lighting for flawless skin tones",
      "Unlimited prints and digital copies",
      "Premium backdrop of your choice",
      "On-site attendant"
    ],
    "includedLabel": "Included with every glam booth rental",
    "bestFor": [
      "Weddings",
      "Galas",
      "Fashion events",
      "Milestone birthdays"
    ],
    "gallery": [
      {
        "src": "/img/booths/glam-photo-booth/photo-1.jpg",
        "alt": "Two friends back to back in a high-key black-and-white glam booth portrait"
      },
      {
        "src": "/img/booths/glam-photo-booth/photo-2.jpg",
        "alt": "Group of friends laughing during a glam booth session at an New Jersey event"
      },
      {
        "src": "/img/booths/glam-photo-booth/photo-3.jpg",
        "alt": "Three guests striking poses for the glam booth at a New Jersey party"
      }
    ],
    sections: [
              {
                h: "The look",
                p: [
                  "One light, one backdrop, black and white, and a glam filter that smooths without blurring. The result reads like a magazine portrait rather than a party snap, which is why this style took over weddings and galas.",
                  "Prints come out as classic strips or full portraits, and the digital copies arrive by text before guests leave the booth.",
                ],
              },
              {
                h: "Where it fits",
                p: [
                  "Weddings, milestone birthdays, galas and any event with a dress code. It pairs especially well with our Ebony or Purity walls when you want the backdrop in colour and the prints in black and white.",
                ],
              },
            ],
  },
  {
    "slug": "branded-photo-booth",
    "name": "Branded Booth",
    "nav": "Branded Booth",
    "meta": {
      "title": "Branded Booth Rental New Jersey",
      "description": "Branded photo booth rental for New Jersey brand activations. Full booth wrap, custom overlays, branded galleries and compliant lead capture. Get a free quote."
    },
    "h1": "Branded Photo Booth Rental for Brand Activations in New Jersey",
    "lede": "Full booth wrap, custom start screen, branded overlays and a microsite — plus opt-in data capture your marketing team can actually use.",
    "image": {
      "src": "/img/booths/branded-photo-booth/hero.jpg",
      "alt": "Sculpted by Aimee brand activation — pink branded backdrop with custom-wrapped selfie mirror"
    },
    "included": [
      "Full booth wrap in your brand colors",
      "Custom start screen and photo overlays",
      "Branded online gallery or microsite",
      "Printed custom backdrops",
      "Surveys and questionnaires in-flow",
      "Opt-in contact capture and reporting"
    ],
    "includedLabel": "Included with every branded booth rental",
    "bestFor": [
      "Product launches",
      "Trade shows",
      "Sponsorship activations",
      "Retail events"
    ],
    "gallery": [
      {
        "src": "/img/booths/branded-photo-booth/photo-1.jpg",
        "alt": "Branded Booth rental at a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/branded-photo-booth/photo-2.jpg",
        "alt": "Branded Booth rental at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/branded-photo-booth/photo-3.jpg",
        "alt": "Branded Booth rental at a New Jersey event — photo 3"
      }
    ],
    sections: [
              {
                h: "Built around your campaign",
                p: [
                  "We wrap the booth hardware to your spec, put your mark on every photo and GIF, and skin the sharing gallery in your identity. Guests do the distribution for you — every share carries the brand.",
                  "For teams that need numbers, the platform reports sessions, shares and opt-ins, so the activation ends with data instead of guesses.",
                ],
              },
              {
                h: "Add a branded flower wall",
                p: [
                  "A floral wall with your logo set into it out-queues a vinyl step-and-repeat every time. One team delivers and installs both — see corporate events and packages.",
                ],
              },
            ],
  },
  {
    "slug": "digital-photo-booth",
    "name": "Digital Booth",
    "nav": "Digital Booth",
    "meta": {
      "title": "Digital Booth Rental New Jersey",
      "description": "Rent an enclosed photo booth in New Jersey — the vintage-style curtained booth with unlimited photo strips, instant digital sharing and an attendant included."
    },
    "h1": "Enclosed Photo Booth Rental in New Jersey",
    "lede": "The classic curtained booth — private, nostalgic, and responsible for the most unguarded photos of the night. The curtain closes, and the real personalities come out.",
    "image": {
      "src": "/img/booths/digital-photo-booth/hero.jpg",
      "alt": "Enclosed photo booth with curtain and bench in a custom FIFA World Cup 2026 wrap"
    },
    "included": [
      "Fully enclosed booth with curtain privacy",
      "Pro-grade DSLR and studio lighting inside",
      "Unlimited classic photo strips all night",
      "Instant sharing by text, email or QR code",
      "Custom-designed strip template",
      "Trained attendant for the full rental"
    ],
    "includedLabel": "Included with every enclosed photo booth rental",
    "bestFor": [
      "Weddings",
      "Birthdays",
      "Corporate parties",
      "Bar & bat mitzvahs"
    ],
    "gallery": [
      {
        "src": "/img/booths/digital-photo-booth/photo-1.jpg",
        "alt": "Enclosed photo booth with custom Nike wrap"
      },
      {
        "src": "/img/booths/digital-photo-booth/photo-2.jpg",
        "alt": "Enclosed photo booth with full custom Coca-Cola style wrap"
      },
      {
        "src": "/img/booths/digital-photo-booth/photo-3.jpg",
        "alt": "Enclosed photo booth with World Cup themed custom wrap"
      }
    ],
    sections: [
              {
                h: "Built for sharing",
                p: [
                  "Everything the booth captures uploads in real time to a gallery you can brand — your names, your logo, your hashtag. Guests grab their shots by text or QR and post them while the event is still trending.",
                  "Because there is no printer, the booth sets up almost anywhere, needs only an outlet, and keeps a smaller footprint than any other option — handy for tighter venues.",
                ],
              },
              {
                h: "Good to know",
                p: [
                  "If your crowd loves physical prints, pair the digital booth with the mirror or glam booth instead — or add prints through a package. We will tell you honestly which fits your event.",
                ],
              },
            ],
  },
  {
    "slug": "video-booth",
    "name": "Video Booth",
    "nav": "Video Booth",
    "meta": {
      "title": "Video Booth Rental New Jersey",
      "description": "Rent the Vogue video booth in New Jersey — a 3D LED-lit backdrop with boomerangs, clips and animated GIFs rendered in about 10 seconds. Get a free quote."
    },
    "h1": "Vogue Video Booth Rental in New Jersey",
    "lede": "A 3D backdrop guests step inside, lined with programmable LED lighting. Ten seconds in, they have a video worth posting.",
    "image": {
      "src": "/img/booths/video-booth/hero.jpg",
      "alt": "Vogue Video Booth Rental in New Jersey — set up at a New Jersey event venue"
    },
    "included": [
      "3D backdrop with LED interior lighting",
      "Renders in roughly 10 seconds",
      "Boomerangs, short clips, animated GIFs",
      "Color and black-and-white options",
      "Online gallery for easy sharing",
      "Animated overlays and custom designs"
    ],
    "includedLabel": "Included with every vogue booth rental",
    "bestFor": [
      "Sweet Sixteens",
      "Brand launches",
      "Corporate events",
      "Proms"
    ],
    "gallery": [
      {
        "src": "/img/booths/video-booth/photo-1.jpg",
        "alt": "Vogue Booth rental at a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/video-booth/photo-2.jpg",
        "alt": "Vogue Booth rental at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/video-booth/photo-3.jpg",
        "alt": "Vogue Booth rental at a New Jersey event — photo 3"
      }
    ],
    sections: [
              {
                h: "What it does",
                p: [
                  "Guests step in and record — a toast, a message to the couple, a birthday wish — and the booth processes it on the spot with the filter set you choose. By the end of the night you have a full reel of everyone who matters saying something you will keep.",
                  "It runs alongside a photo booth without competing with it: photos for the wall, videos for the memory.",
                ],
              },
            ],
  },
  {
    "slug": "mirror-x-photo-booth",
    "name": "Mirror X Booth",
    "nav": "Mirror X",
    "meta": {
      "title": "Mirror X Booth Rental New Jersey",
      "description": "Rent the Mirror X in New Jersey — six feet of sleek, frameless mirror with every feature of the magic mirror booth, built for corporate events and brand."
    },
    "h1": "Mirror X Photo Booth Rental in New Jersey",
    "lede": "The upgraded mirror — six feet of frameless glass with every feature of our magic mirror booth, in a sleeker profile built for corporate floors.",
    "image": {
      "src": "/img/booths/mirror-x-photo-booth/hero.jpg",
      "alt": "Mirror X photo booth set up with red carpet and stanchions at a New Jersey venue"
    },
    "included": [
      "Frameless 6ft interactive touchscreen mirror",
      "Pro-grade DSLR + studio lighting",
      "Unlimited 4x6 prints all night",
      "Animated overlays and voice guidance",
      "Text, email and QR code instant sharing",
      "Custom-designed print template"
    ],
    "includedLabel": "Included with every Mirror X rental",
    "bestFor": [
      "Corporate events",
      "Trade shows",
      "Product launches",
      "Brand activations"
    ],
    "gallery": [
      {
        "src": "/img/booths/mirror-x-photo-booth/photo-1.jpg",
        "alt": "Mirror X photo booth — sleek frameless mirror with animated welcome screen"
      },
      {
        "src": "/img/booths/mirror-x-photo-booth/photo-2.jpg",
        "alt": "Guest texting herself a photo from the Mirror X touchscreen"
      },
      {
        "src": "/img/booths/mirror-x-photo-booth/photo-3.jpg",
        "alt": "Mirror X booth mid-countdown with its instant printer on an LED plinth"
      }
    ],
    sections: [
          {
                "h": "What is the Mirror X booth?",
                "p": [
                      "The Mirror X is the upgraded version of our magic mirror booth. Same interactive touchscreen experience — animated prompts, on-screen signing, instant prints — but the hardware is a clean sheet of edge-to-edge glass, six feet tall, with no wooden frame around it. Where the original mirror reads ornate and gold, the Mirror X reads modern and minimal.",
                      "Behind the glass it runs the same pro-grade DSLR and studio lighting as the original, so the photos hold up the same way. The difference is entirely in how it looks in the room."
                ]
          },
          {
                "h": "Built for corporate floors",
                "p": [
                      "We built our Mirror X inventory around corporate work: product launches, conferences, holiday parties and brand activations where the booth has to match a designed space rather than decorate it. The slim, frameless profile disappears into a modern venue, takes a branded start screen and overlays cleanly, and photographs well when your event team shoots the room.",
                      "Everything our corporate clients ask for is available on it — custom templates with a logo lockup, branded animations, opt-in data capture, and a certificate of insurance for your venue on request."
                ]
          },
          {
                "h": "Mirror X or the magic mirror?",
                "p": [
                      "Feature for feature they are the same booth — touchscreen, prints, sharing, attendant. The choice is aesthetic. The gold-framed magic mirror suits weddings, galas and any room that leans classic. The Mirror X suits contemporary spaces, corporate branding and show floors.",
                      "Footprint and power are identical too: 10ft x 10ft is optimal, 8ft x 8ft is the minimum, and we need a standard 110V outlet within 15 feet. Setup takes about 20 minutes and we arrive an hour before start time."
                ]
          }
    ],
  },
  {
    "slug": "roaming-photo-booth",
    "name": "Roaming Booth",
    "nav": "Roaming Booth",
    "meta": {
      "title": "Roaming Booth Rental New Jersey",
      "description": "Rent a roaming photo booth in New Jersey. A handheld iPad capture system works the room — no line, no floor space needed. Stills, GIFs and boomerangs. Free qu"
    },
    "h1": "Roaming Photo Booth Rental in New Jersey",
    "lede": "No booth, no line. An attendant works the room with a handheld capture system and brings the camera to your guests.",
    "image": {
      "src": "/img/booths/roaming-photo-booth/hero.jpg",
      "alt": "Guest sharing her photo from the ring-light roaming booth at a New Jersey party"
    },
    "included": [
      "Handheld iPad-based capture system",
      "Attendant works the room for you",
      "Sessions take under a minute",
      "Stills, GIFs or boomerangs",
      "Instant delivery by text or email",
      "Needs no floor space at all"
    ],
    "includedLabel": "Included with every roaming photo booth rental",
    "bestFor": [
      "Cocktail hours",
      "Trade shows",
      "Galas",
      "Venues with no floor space"
    ],
    "gallery": [
      {
        "src": "/img/booths/roaming-photo-booth/photo-1.jpg",
        "alt": "Roaming Photo Booth rental at a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/roaming-photo-booth/photo-2.jpg",
        "alt": "Roaming Photo Booth rental at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/roaming-photo-booth/photo-3.jpg",
        "alt": "Roaming Photo Booth rental at a New Jersey event — photo 3"
      }
    ],
    sections: [
          {
                "h": "What is a roaming photo booth?",
                "p": [
                      "A roaming photo booth has no booth at all. An attendant carries a handheld capture system — an iPad in a lit housing — and works the room, inviting guests to take a photo wherever they happen to be standing.",
                      "It solves two problems at once: venues where there is genuinely nowhere to put a booth, and events where guests are seated or circulating and will not get up to join a queue."
                ]
          },
          {
                "h": "How the roamer works",
                "p": [
                      "Sessions take under a minute. The attendant approaches a group, they choose their capture style — stills, GIFs or boomerangs, depending on what you have selected — and the photo is taken on the spot. Guests enter a phone number or email and receive their images immediately.",
                      "Because the attendant goes to the guests rather than waiting for them, coverage across a room is far higher than a static booth achieves in the same window."
                ]
          },
          {
                "h": "When to pair the roamer with another booth",
                "p": [
                      "At large events, the roamer works best alongside a static booth. The mirror or 360 booth anchors one part of the room and draws a crowd; the roamer covers the seated dinner tables, the cocktail area and the smokers outside who would never have queued.",
                      "It is a common pairing for weddings over about 150 guests, and standard for trade show stands where footfall is spread across a day rather than concentrated in an evening."
                ]
          }
    ],
  },
  {
    "slug": "green-screen-photo-booth",
    "name": "Green Screen Booth",
    "nav": "Green Screen",
    "meta": {
      "title": "Green Screen Booth Rental New Jersey",
      "description": "Rent a green screen photo booth in New Jersey. Custom digital backgrounds designed for your brand or theme, plus stills, GIFs and boomerangs. Get a free quote"
    },
    "h1": "Green Screen Photo Booth Rental in New Jersey",
    "lede": "Drop your guests anywhere — a skyline, a brand world, a set built for your theme. Backgrounds designed with you in advance.",
    "image": {
      "src": "/img/booths/green-screen-photo-booth/hero.webp",
      "alt": "Friends composited onto a neon rainbow tunnel background by the green screen booth"
    },
    "included": [
      "Custom digital backgrounds built for your event",
      "Design team works with you in advance",
      "Stills, GIFs, boomerangs or all three",
      "Custom props to match your theme",
      "Unlimited prints and instant sharing",
      "On-site attendant"
    ],
    "includedLabel": "Included with every green screen booth rental",
    "bestFor": [
      "Brand activations",
      "Themed parties",
      "Trade shows",
      "School events"
    ],
    "gallery": [
      {
        "src": "/img/booths/green-screen-photo-booth/photo-1.jpg",
        "alt": "Green Screen Booth rental at a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/green-screen-photo-booth/photo-2.jpg",
        "alt": "Green Screen Booth rental at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/green-screen-photo-booth/photo-3.jpg",
        "alt": "Green Screen Booth rental at a New Jersey event — photo 3"
      }
    ],
    sections: [
          {
                "h": "What is a green screen photo booth?",
                "p": [
                      "A green screen photo booth replaces the background behind your guests with any image you choose — a city skyline, a branded environment, a themed set that would be impossible to build in the room. The swap happens live, so guests see the finished composite immediately.",
                      "It is the most flexible booth we rent, because the backdrop is software rather than fabric. One booth can deliver five different worlds over the course of an evening."
                ]
          },
          {
                "h": "Custom backgrounds designed for your event",
                "p": [
                      "Our design team builds the backgrounds with you in advance rather than pulling from a stock library. For a brand activation that means environments matching your campaign; for a themed party it means a set built around your concept; for a school event it might be the destination the year group has been talking about all term.",
                      "We can also produce custom props to match, so the whole composite feels intentional rather than improvised."
                ]
          },
          {
                "h": "Capture styles and output",
                "p": [
                      "Choose still images, animated GIFs, boomerangs, or all three. Stills give you the cleanest composite and the most timeless result; GIFs and boomerangs add movement and tend to travel further on social.",
                      "Guests get unlimited prints and instant sharing to phone, plus the online gallery afterwards."
                ]
          }
    ],
  },
  {
    "slug": "mosaic-wall",
    "name": "Mosaic Wall",
    "nav": "Mosaic Wall",
    "meta": {
      "title": "Mosaic Wall Rental New Jersey",
      "description": "Rent a photo mosaic wall in New Jersey. Guest photos print as stickers that build into one giant image — a logo, a portrait, anything. Get a free quote."
    },
    "h1": "Photo Mosaic Wall Rental in New Jersey",
    "lede": "Every guest photo prints as a sticker they place themselves. By the end of the night the wall is one enormous image.",
    "image": {
      "src": "/img/booths/mosaic-wall/hero.jpg",
      "alt": "Photo Mosaic Wall Rental in New Jersey — set up at a New Jersey event venue"
    },
    "included": [
      "Choose the master image — logo or portrait",
      "Guest photos print as peel-and-place stickers",
      "Builds live across the whole event",
      "Event hashtag and social integration",
      "Guests take the finished wall home",
      "Attendant manages the wall all night"
    ],
    "includedLabel": "Included with every mosaic wall rental",
    "bestFor": [
      "Corporate events",
      "Conferences",
      "Weddings",
      "Fundraisers"
    ],
    "gallery": [
      {
        "src": "/img/booths/mosaic-wall/photo-1.jpg",
        "alt": "Mosaic Wall rental at a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/mosaic-wall/photo-2.jpg",
        "alt": "Mosaic Wall rental at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/mosaic-wall/photo-3.jpg",
        "alt": "Mosaic Wall rental at a New Jersey event — photo 3"
      }
    ],
    sections: [
          {
                "h": "What is a photo mosaic wall?",
                "p": [
                      "A photo mosaic wall is a large board that fills in over the course of your event. Every guest photo prints as a small sticker, guests place their own sticker on the wall, and as the evening goes on those hundreds of individual photos resolve into one enormous master image — a logo, a portrait, a couple's photograph.",
                      "Up close you see individual faces. From across the room you see the big picture. It is one of the few event installations that is genuinely different at the end of the night than it was at the start."
                ]
          },
          {
                "h": "Why it works so well for engagement",
                "p": [
                      "The participation is the point. Guests are not just having their photo taken — they are physically walking to the wall and adding themselves to something collective. Other guests watch that happen and want to join in, which is why mosaic walls tend to build momentum rather than tail off.",
                      "For corporate clients, a mosaic of every attendee resolving into the company logo makes a statement that no printed banner does. For weddings, the master image is usually a photograph of the couple."
                ]
          },
          {
                "h": "What happens to the wall afterwards",
                "p": [
                      "You keep it. The finished mosaic goes home with you — offices frame them, couples keep them. Every image captured is also collated digitally, integrated with your event hashtag and social sharing, so the wall exists in both physical and digital form.",
                      "An attendant manages the wall for the full event, keeping the sticker printing running and helping guests find a spot."
                ]
          }
    ],
  },
  {
    "slug": "ai-photo-booth",
    "name": "AI Photo Booth",
    "nav": "AI Booth",
    "meta": {
      "title": "AI Photo Booth Rental New Jersey",
      "description": "Rent an AI photo booth in New Jersey. Real-time AI filters, virtual backgrounds and branded overlays with instant sharing and an attendant included."
    },
    "h1": "AI Photo Booth Rental in New Jersey",
    "lede": "Guests step in front of the camera and AI restyles the shot in seconds — new outfits, new backgrounds, a version of themselves they have never seen. It is the booth people talk about on the way home.",
    "image": {
      "src": "/img/booths/ai-photo-booth/hero.jpg",
      "alt": "AI photo booth before and after — guest transformed into a branded fitness character"
    },
    "included": [
      "AI-powered capture with real-time transformations",
      "Virtual backgrounds and style presets built for your event",
      "Branded overlays on every photo and video",
      "Instant sharing by text, email or QR code",
      "Opt-in lead and data capture for brand events",
      "Trained attendant for the full rental"
    ],
    "includedLabel": "Included with every ai photo booth rental",
    "bestFor": [
      "Brand activations",
      "Corporate parties",
      "Weddings",
      "Trade shows"
    ],
    "gallery": [
      {
        "src": "/img/booths/ai-photo-booth/photo-1.jpg",
        "alt": "AI photo booth output styled for a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/ai-photo-booth/photo-2.jpg",
        "alt": "Guests posing for the AI photo booth at an New Jersey celebration — photo 2"
      },
      {
        "src": "/img/booths/ai-photo-booth/photo-3.jpg",
        "alt": "AI-generated group photo from a New Jersey event — photo 3"
      }
    ],
    sections: [
          {
                "h": "What is an AI photo booth?",
                "p": [
                      "An AI photo booth captures your guests the way any good booth does — and then the software goes to work. In seconds, guests see themselves restyled: dropped into a different decade, dressed for a magazine editorial, or standing somewhere they have never been. No green screen, no waiting, no app to download.",
                      "It is the newest booth in our range and the one that generates the strongest reaction, because the output is genuinely surprising. People run their session, see the result, and immediately queue again to try a different style."
                ]
          },
          {
                "h": "What is included with an AI photo booth rental",
                "p": [
                      "Every AI booth rental includes a trained attendant for the full booking, unlimited sessions, and instant delivery to your guests' phones by text, email or QR code. You also get an online gallery of everything created at the event.",
                      "The AI styles are chosen with you in advance to fit your event — elegant for a wedding, on-brand for a product launch, playful for a birthday. Branded overlays and opt-in data capture are available for corporate events, which is why this booth has become a favorite for activations."
                ]
          },
          {
                "h": "How much space does an AI photo booth need?",
                "p": [
                      "The AI booth runs in a compact open-air setup: a 10ft x 10ft space is ideal, and we can compress to 8ft x 8ft when a venue is tight. We need a standard 110V outlet within 15 feet, ideally not shared with the DJ or catering.",
                      "Setup takes about 20 minutes and we arrive a full hour before your start time, so the booth is tested and quietly ready before your first guest sees it."
                ]
          }
    ],
  },
  {
    "slug": "glambot",
    "name": "Glambot",
    "nav": "Glambot",
    "meta": {
      "title": "Glambot Rental New Jersey",
      "description": "Rent the Glambot in New Jersey — a robotic camera arm that captures red-carpet slow-motion video. Branded overlays, instant sharing, operator included."
    },
    "h1": "Glambot Rental in New Jersey",
    "lede": "A robotic camera arm sweeps past your guests in cinematic slow motion — the shot you have seen at award shows, running all night at your event.",
    "image": {
      "src": "/img/booths/glambot/hero.jpg",
      "alt": "Glambot robotic camera arm filming a guest on the red carpet"
    },
    "included": [
      "Robotic camera arm with a trained operator",
      "Cinematic slow-motion video capture",
      "Studio lighting calibrated on site",
      "Logo watermark on every clip",
      "Instant delivery by email or QR code",
      "Red-carpet setup with stanchions available"
    ],
    "includedLabel": "Included with every glambot rental",
    "bestFor": [
      "Galas",
      "Brand activations",
      "Corporate events",
      "Weddings"
    ],
    "gallery": [
      {
        "src": "/img/booths/glambot/photo-1.jpg",
        "alt": "Glambot robotic arm set up on a red carpet at an New Jersey venue — photo 1"
      },
      {
        "src": "/img/booths/glambot/photo-2.jpg",
        "alt": "Guest posing for a slow-motion Glambot clip at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/glambot/photo-3.jpg",
        "alt": "Glambot capturing a cinematic sweep at a New Jersey event — photo 3"
      }
    ],
    sections: [
          {
                "h": "What is a Glambot?",
                "p": [
                      "The Glambot is a robotic camera arm that executes a fast, precise sweep past your guests while recording in high frame rate — the same rig behind the slow-motion glamour clips you see from award-show red carpets. Guests strike a pose, the arm flies past, and seconds later they have a cinematic clip that looks professionally directed.",
                      "Because the movement is visible from across the room, the Glambot draws a line from the moment it switches on. It is the single most theatrical thing we can put in a venue."
                ]
          },
          {
                "h": "What is included with a Glambot rental",
                "p": [
                      "Every Glambot booking includes a trained operator who runs the arm all night, directs guests into the shot, and keeps the line moving. Our technicians install and calibrate the rig and lighting before your event begins, so it is tested and ready before the first guest arrives.",
                      "Clips are delivered to guests by email or QR code moments after capture, and your logo can be watermarked onto every video — which is why brands use the Glambot to generate social content that travels far beyond the room."
                ]
          },
          {
                "h": "How much space does a Glambot need?",
                "p": [
                      "The arm needs room to move: plan for a footprint larger than a standard booth, ideally 12ft x 12ft with clear ceiling height, plus a standard 110V outlet nearby. Tell us your venue on the quote form and we will confirm the exact fit before you book.",
                      "Because installation involves a robotic system, we arrive earlier than for our other booths and handle the full setup and calibration ourselves. You do not need to provide anything beyond the space and the outlet."
                ]
          }
    ],
  },
  {
    "slug": "magazine-booth",
    "name": "Magazine Booth",
    "nav": "Magazine Booth",
    "meta": {
      "title": "Magazine Booth Rental New Jersey",
      "description": "Rent the magazine photo booth in New Jersey. DSLR portraits dropped into a custom magazine cover designed for your event, with instant sharing. Get a free quo"
    },
    "h1": "Magazine Photo Booth Rental in New Jersey",
    "lede": "Guests pose, and seconds later they are on the cover of a magazine — masthead, headlines and all, designed for your event.",
    "image": {
      "src": "/img/booths/magazine-booth/hero.jpg",
      "alt": "Custom Vogue-style magazine cover backdrop for a wedding — magazine booth rental in New Jersey"
    },
    "included": [
      "Custom magazine cover designed for your event",
      "Pro-grade DSLR camera and LED lighting",
      "Trained attendant for the full rental",
      "Unlimited sessions all night",
      "Instant delivery by text, email or QR code",
      "Branding and logo placement available"
    ],
    "includedLabel": "Included with every magazine booth rental",
    "bestFor": [
      "Galas",
      "Sweet Sixteens",
      "Corporate parties",
      "Weddings"
    ],
    "gallery": [
      {
        "src": "/img/booths/magazine-booth/photo-1.webp",
        "alt": "Guests posing at the magazine photo booth at a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/magazine-booth/photo-2.webp",
        "alt": "Magazine cover photo booth session at an New Jersey celebration — photo 2"
      },
      {
        "src": "/img/booths/magazine-booth/photo-3.jpg",
        "alt": "Finished magazine cover print from a New Jersey event — photo 3"
      }
    ],
    sections: [
          {
                "h": "What is a magazine photo booth?",
                "p": [
                      "The magazine booth photographs your guests with a pro-grade DSLR under studio LED lighting, then drops the shot into a magazine-style cover — masthead, cover lines, date and all. The design is built for your event in advance, so the 'issue' your guests star in carries your names, your theme or your brand.",
                      "It photographs beautifully from the outside too: the oversized cover frame is a set piece guests pose with, which keeps the corner busy even between sessions."
                ]
          },
          {
                "h": "What is included with a magazine booth rental",
                "p": [
                      "Every magazine booth rental includes a trained attendant for the full booking, unlimited sessions, and instant delivery of the finished covers by text, email or QR code, plus an online gallery after the event.",
                      "The cover itself is custom-designed rather than picked from a menu — a wedding edition with your names and date, a Sweet Sixteen cover for the guest of honor, or a fully branded issue with your logo and campaign lines for corporate events."
                ]
          },
          {
                "h": "How much space does a magazine booth need?",
                "p": [
                      "Optimal setup is 10ft x 10ft, which leaves room for the cover frame, lighting and a queue that does not block anything. We can compress to 8ft x 8ft when a venue is tight, and we need a standard 110V outlet within 15 feet.",
                      "Setup takes about 20 minutes, and we arrive a full hour before your start time so everything is tested before your first guest sees it."
                ]
          }
    ],
  },
  {
    "slug": "gif-booth",
    "name": "GIF Booth",
    "nav": "GIF Booth",
    "meta": {
      "title": "GIF Booth Rental New Jersey",
      "description": "Rent a GIF photo booth in New Jersey. Quick bursts become looping, shareable GIFs with branded overlays and instant sharing. Attendant included. Get a free qu"
    },
    "h1": "GIF Photo Booth Rental in New Jersey",
    "lede": "A quick burst of shots becomes a looping GIF your guests can post before they have left the booth. Simple, fast, and endlessly shareable.",
    "image": {
      "src": "/img/booths/gif-booth/hero.gif",
      "alt": "Animated GIF booth session — three friends posing at the hedge wall"
    },
    "included": [
      "High-resolution burst capture",
      "Smooth looping GIFs rendered in seconds",
      "Branded overlay on every GIF",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full rental",
      "Boomerangs and stills included"
    ],
    "includedLabel": "Included with every gif booth rental",
    "bestFor": [
      "Birthdays",
      "Brand activations",
      "Corporate parties",
      "Weddings"
    ],
    "gallery": [
      {
        "src": "/img/booths/gif-booth/photo-1.webp",
        "alt": "Guests posing in a burst session at the GIF booth at an New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/gif-booth/photo-2.webp",
        "alt": "GIF photo booth setup at a New Jersey celebration — photo 2"
      },
      {
        "src": "/img/booths/gif-booth/photo-3.webp",
        "alt": "Friends laughing during a GIF booth session in New Jersey — photo 3"
      }
    ],
    sections: [
          {
                "h": "What is a GIF photo booth?",
                "p": [
                      "A GIF booth captures a rapid burst of high-resolution frames and stitches them into a smooth looping GIF in seconds. Guests strike a sequence of poses rather than one, which makes the sessions faster, sillier and more repeatable than a standard photo.",
                      "Because the output is a loop rather than a still, it performs disproportionately well on social media — which is why brands and party hosts alike keep booking it."
                ]
          },
          {
                "h": "What is included with a GIF booth rental",
                "p": [
                      "Every GIF booth rental includes a trained attendant for the full booking, unlimited sessions, and instant delivery to your guests' phones by text, email or QR code. Boomerangs and standard stills are included alongside the GIFs, and your event gets an online gallery of everything.",
                      "Every GIF can carry a branded overlay — names and date for a wedding, a logo and campaign frame for a brand event — so each share carries your event with it."
                ]
          },
          {
                "h": "How much space does a GIF booth need?",
                "p": [
                      "The GIF booth runs as a compact open-air setup: 10ft x 10ft is ideal and 8ft x 8ft is workable, with a standard 110V outlet within 15 feet. It is one of the easiest booths in our range to fit into a tight venue.",
                      "Setup takes about 20 minutes, and we arrive a full hour before your start time so it is tested and ready before your first guest sees it."
                ]
          }
    ],
  },
  {
    "slug": "3d-slider-booth",
    "name": "3D Slider Booth",
    "nav": "3D Slider",
    "meta": {
      "title": "3D Slider Booth Rental New Jersey",
      "description": "Rent a 3D slider photo booth in New Jersey. A sliding camera captures multiple angles in one take for a shot with genuine depth. Instant sharing."
    },
    "h1": "3D Slider Photo Booth Rental in New Jersey",
    "lede": "A camera glides across a track while your guests hold the pose, capturing multiple angles in a single take — the result is a shot with genuine depth that a fixed booth cannot produce.",
    "image": {
      "src": "/img/booths/3d-slider-booth/hero.jpg",
      "alt": "Guests using the 3D slider photo booth at a New Jersey event"
    },
    "included": [
      "Sliding multi-angle camera capture",
      "Motion effects and customizable backdrops",
      "Branded overlays on every capture",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full rental",
      "Online gallery after the event"
    ],
    "includedLabel": "Included with every 3d slider booth rental",
    "bestFor": [
      "Brand activations",
      "Corporate events",
      "Weddings",
      "Proms"
    ],
    "gallery": [
      {
        "src": "/img/booths/3d-slider-booth/photo-1.jpg",
        "alt": "3D slider booth capture from a New Jersey event — photo 1"
      },
      {
        "src": "/img/booths/3d-slider-booth/photo-2.jpg",
        "alt": "Guests posing for the 3D slider camera at an New Jersey party — photo 2"
      },
      {
        "src": "/img/booths/3d-slider-booth/photo-3.jpg",
        "alt": "Multi-angle 3D slider session at a New Jersey event — photo 3"
      }
    ],
    sections: [
          {
                "h": "What is a 3D slider photo booth?",
                "p": [
                      "The 3D slider mounts a camera on a motorized track that glides past your guests mid-pose, capturing the moment from multiple angles in one take. Stitched together, the frames create a parallax effect — the photo appears to have real depth, as if the camera is moving around a frozen moment.",
                      "It is the booth for crowds who think they have seen everything: the format is immediately different from a standard still, and guests replay their clips on the spot to see the effect again."
                ]
          },
          {
                "h": "What is included with a 3D slider booth rental",
                "p": [
                      "Every 3D slider rental includes a trained attendant for the full booking, unlimited sessions, motion effects, and a backdrop chosen with you in advance. Guests receive their clips instantly by text, email or QR code, and your event gets an online gallery of everything captured.",
                      "Branded overlays are available on every capture, which makes the slider a strong pick for activations — the unusual format earns the post, and your brand rides along with it."
                ]
          },
          {
                "h": "How much space does a 3D slider booth need?",
                "p": [
                      "The sliding track needs a little more width than a standard booth: plan for roughly 12ft across with normal ceiling height, plus a standard 110V outlet within 15 feet. Send us your venue on the quote form and we will confirm the fit before you book.",
                      "We arrive a full hour before your start time, and the track, camera and lighting are set up and tested before your first guest sees them."
                ]
          }
    ],
  },
  {
    "slug": "studio-booth",
    "name": "Studio Booth",
    "nav": "Studio Booth",
    "meta": {
      "title": "Studio Booth Rental New Jersey",
      "description": "Rent the studio photo booth in New Jersey — pro DSLR portraits with creative studio lighting, plus GIFs and videos. Instant sharing, attendant included."
    },
    "h1": "Studio Photo Booth Rental in New Jersey",
    "lede": "Studio lighting and a pro DSLR, set up in your venue. Guests walk away with portraits that look shot in a Newark studio, not at a party.",
    "image": {
      "src": "/img/booths/studio-booth/hero.jpg",
      "alt": "Guests posing for the studio booth in front of a gold sequin wall at a New Jersey gala"
    },
    "included": [
      "Pro-grade DSLR camera system",
      "Creative studio lighting set up on site",
      "Portraits, GIFs and short videos",
      "Custom overlays with your logo or names",
      "Instant sharing by text, email or QR code",
      "Trained attendant for the full rental"
    ],
    "includedLabel": "Included with every studio booth rental",
    "bestFor": [
      "Corporate events",
      "Galas",
      "Weddings",
      "Networking events"
    ],
    "gallery": [
      {
        "src": "/img/booths/studio-booth/photo-1.jpg",
        "alt": "Guest portrait from the studio booth at a New Jersey event — photo 2"
      },
      {
        "src": "/img/booths/studio-booth/photo-2.jpg",
        "alt": "Studio booth portrait session at a New Jersey celebration — photo 3"
      },
      {
        "src": "/img/booths/studio-booth/photo-3.jpg",
        "alt": "Studio booth portrait of two guests against a curtain backdrop"
      }
    ],
    sections: [
          {
                "h": "What is a studio photo booth?",
                "p": [
                      "The studio booth brings a proper portrait setup into your venue: a pro-grade DSLR, creative studio lighting, and an attendant who knows how to direct a shot. The result is the kind of clean, flattering portrait people actually keep — closer to a photographer's studio session than a party snapshot.",
                      "Guests can shoot stills, GIFs or short videos in the same session, so the booth works as hard for a corporate headshot corner as it does for a dance-floor crowd."
                ]
          },
          {
                "h": "What is included with a studio booth rental",
                "p": [
                      "Every studio booth rental includes the camera system and lighting set up and tested before your event begins, a trained attendant for the full booking, unlimited sessions, and instant delivery by text, email or QR code, plus an online gallery afterwards.",
                      "Overlays are designed for your event — your names and date, or your logo and colors — so everything guests share carries the occasion with it."
                ]
          },
          {
                "h": "How much space does a studio booth need?",
                "p": [
                      "Optimal setup is 10ft x 10ft, which gives room for the camera, lighting and backdrop. We can compress to 8ft x 8ft when a venue is tight, and we need a standard 110V outlet within 15 feet, ideally not shared with the DJ or catering.",
                      "Our crew arrives a full hour before your start time and sets up in about 20 minutes, so the lighting is dialed in before your first guest arrives."
                ]
          }
    ],
  },
];

export const getBooth = (slug: string) => BOOTHS.find((b) => b.slug === slug);
