/**
 * The coverage grid — service × location, per docs/seo-playbook.md Phase 2.
 *
 * URLs are flat: `/flower-wall-rental-jersey-city-nj`. That is the shape the
 * one competitor building location pages in this market already uses, and it
 * disambiguates towns that exist in other states (Princeton, Morristown).
 *
 * Tiering, from the playbook — full service set in the core markets, fewer
 * further out:
 *
 *   Full three   Jersey City, Newark, Hoboken, Princeton, Red Bank
 *                (the first three are the Newark hub's doorstep; the last two
 *                are where the only competitor with location pages has built)
 *   Two          Montclair, Morristown, Edison, New Brunswick
 *   Flower wall  Cherry Hill, Atlantic City, Jersey Shore
 *
 * The content rule that keeps this out of doorway-page territory: reusable
 * STRUCTURE is fine, reusable PROSE is not. Every entry below names something
 * physically true of that place — the loading access, the venue stock, the
 * calendar. Nothing here is a template with the town swapped in.
 *
 * Facts that are genuinely constant — an 8ft x 8ft wall on a weighted
 * free-standing frame, a standard outlet for a booth — may repeat, because
 * they are specifications rather than local colour.
 */

export type ComboServiceKey =
  | "flower-wall-rental"
  | "photo-booth-rental"
  | "wedding-flower-wall";

export interface ComboService {
  /** Human label for the service, used in breadcrumbs and Service schema. */
  label: string;
  /** The hub page this combo belongs under. */
  parent: { name: string; path: string };
}

export const COMBO_SERVICES: Record<ComboServiceKey, ComboService> = {
  "flower-wall-rental": {
    label: "Flower wall rental",
    parent: { name: "Flower Walls", path: "/flower-walls/" },
  },
  "photo-booth-rental": {
    label: "Photo booth rental",
    parent: { name: "Photo Booths", path: "/photo-booths/" },
  },
  "wedding-flower-wall": {
    label: "Wedding flower wall",
    parent: { name: "Weddings", path: "/events/weddings/" },
  },
};

export interface ComboPage {
  /** Full URL slug — the page lives at `/{slug}/`. */
  slug: string;
  service: ComboServiceKey;
  /** Display name of the town or region. */
  town: string;
  /** Matching page in `locations.ts`, for the link back up. */
  locationSlug: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  body: string[];
  faqs: { q: string; a: string }[];
}

export const COMBOS: ComboPage[] = [
  /* ---------------------------------------------------------------- CORE */

  {
    slug: "flower-wall-rental-jersey-city-nj",
    service: "flower-wall-rental",
    town: "Jersey City",
    locationSlug: "jersey-city",
    title: "Flower Wall Rental Jersey City NJ",
    description:
      "Flower wall rental in Jersey City — delivered, installed and collected. Waterfront hotels, Grove Street lofts and rooftop terraces, from our Newark hub.",
    h1: "Flower wall rental in Jersey City",
    lede: "Fifteen minutes from the Newark hub, which makes Jersey City the easiest date in the state for us to say yes to.",
    body: [
      "The split in Jersey City is between the waterfront and everything behind it. Exchange Place and Newport towers have service entrances, freight lifts and a dock a van can back into, so a wall goes up in under an hour. Behind Grove Street the building stock changes completely — Hamilton Park brownstones and converted Powerhouse Arts lofts where the panels come up a staircase by hand. Both are fine. They are just different crews and different arrival times, which is why the first question we ask is about the door, not the date.",
      "Rooftop bookings need one extra conversation. A flower wall is a sail, and the Hudson does not care that your event is at six. Outdoors and above the fourth floor we add ballast and make a wind call the day before, and we will move the wall inside rather than watch it go over. The skyline behind it is worth that much planning.",
    ],
    faqs: [
      {
        q: "How much notice do you need for a Jersey City booking?",
        a: "Less than anywhere else we serve. Being fifteen minutes from the hub means Jersey City can sometimes take a booking inside two weeks. Ask even if the date feels close — the answer is yes here more often than it is elsewhere.",
      },
      {
        q: "My building has no elevator. Is that a problem?",
        a: "No, but tell us before you book. Panels come up on foot, which means a larger crew and an earlier start. It changes our schedule, not what you pay for the wall.",
      },
      {
        q: "Can you install on a rooftop?",
        a: "Yes, with ballast and a weather call the day before. If the forecast turns we would rather relocate the wall indoors than risk it, and we will tell you that in advance rather than on the day.",
      },
    ],
  },
  {
    slug: "photo-booth-rental-jersey-city-nj",
    service: "photo-booth-rental",
    town: "Jersey City",
    locationSlug: "jersey-city",
    title: "Photo Booth Rental Jersey City NJ",
    description:
      "Photo booth rental in Jersey City with an attendant, props and instant sharing. Mirror, 360 and glam booths delivered to waterfront venues and lofts.",
    h1: "Photo booth rental in Jersey City",
    lede: "Every booth arrives with an attendant who stays the whole night, because a booth nobody is running is a booth with a queue.",
    body: [
      "Booths need two things a wall does not: a standard outlet within reach, and somewhere for a queue to form that is not the bar. In the waterfront towers that is straightforward — the pre-function space outside the ballroom was built for exactly this. In the smaller Grove Street and Newport venues we will ask for a floor plan first, because a 360 platform wants a ten-foot square with clearance all round and there is no point discovering on the night that the only spot is the fire exit.",
      "The other Jersey City particular is the commute. A good share of guests come through the PATH, which means arrivals bunch rather than trickle. Booths get their heaviest use in the first hour here, and an attendant who keeps that line moving is the difference between two hundred prints and eighty.",
    ],
    faqs: [
      {
        q: "How much space does the booth need?",
        a: "An open-air booth works in about 8ft x 8ft. A 360 platform needs roughly 10ft x 10ft with clearance on every side so the arm can sweep. Both need a standard outlet within extension-lead reach.",
      },
      {
        q: "Can we pair the booth with a flower wall?",
        a: "That is the most common Jersey City booking. One team, one delivery, one setup — the booth points at the wall and the backdrop is handled. See the packages page.",
      },
      {
        q: "Do guests get their photos straight away?",
        a: "Yes. Prints come out on the night, and digital copies go by text, email or QR code while the party is still going.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-jersey-city-nj",
    service: "wedding-flower-wall",
    town: "Jersey City",
    locationSlug: "jersey-city",
    title: "Wedding Flower Wall Jersey City NJ",
    description:
      "Wedding flower wall rental in Jersey City — ceremony backdrops, sweetheart tables and reception walls, installed and collected around your timeline.",
    h1: "Wedding flower wall in Jersey City",
    lede: "Ceremony backdrop, sweetheart table, or the wall everyone photographs on the way in — usually it is one wall doing two of those jobs.",
    body: [
      "Jersey City weddings tend to run in one room with a flip, and that shapes what we do. If the wall stands behind your ceremony and then needs to be the reception backdrop, we build it where it can stay and let the room change around it, rather than moving florals while a hundred guests are at cocktail hour. Where the venue turns the room over completely, we will quote the move properly instead of pretending it is free.",
      "The waterfront venues carry their own drama, and a wall competes with a skyline if you put it in the wrong place. Our advice on the Hudson-facing rooms is usually to keep the wall off the window wall entirely and let it hold the side of the room the camera turns to — you paid for the view, and a flower wall in front of it is an expensive way to block it.",
    ],
    faqs: [
      {
        q: "When do you install for a wedding?",
        a: "Whenever the venue's access window allows, which for most Jersey City rooms means the morning of. We work to the venue's schedule and confirm it with your planner or coordinator directly if that is easier.",
      },
      {
        q: "Can the wall move from the ceremony to the reception?",
        a: "Sometimes, and we will tell you honestly whether it is worth it. If the two spaces are in the same room, usually yes. Across floors during cocktail hour, usually not — a second wall often costs less disruption than a move.",
      },
      {
        q: "Do you provide a certificate of insurance?",
        a: "Yes, and most Jersey City venues will ask for one. Send us the venue's requirements and we turn a COI around the same day.",
      },
    ],
  },

  {
    slug: "flower-wall-rental-newark-nj",
    service: "flower-wall-rental",
    town: "Newark",
    locationSlug: "newark",
    title: "Flower Wall Rental Newark NJ",
    description:
      "Flower wall rental in Newark — NJPAC, Ironbound restaurants, hotel ballrooms and Branch Brook Park, delivered from our hub in the city itself.",
    h1: "Flower wall rental in Newark",
    lede: "Our hub is here, so Newark gets the first install slot of the day and the latest collection.",
    body: [
      "Newark's venues sit at two extremes and we treat them differently. The performing arts and arena spaces downtown, and the hotel ballrooms around them, are built for load-in — proper docks, wide corridors, staff who have seen a hundred backdrops go up. The Ironbound is the opposite: restaurant function rooms on Ferry Street and around it, wonderful for a party and tight for a van, with a kitchen corridor as the only route in. We size the wall to the door in that half of the city rather than turning up and finding out.",
      "Branch Brook Park is its own season. The cherry blossom weeks bring a run of outdoor bookings, and outdoors means ballast, a wind call and a hard rule about what we will not set up in. We are ten minutes away, so a morning weather change is something we can actually respond to instead of shrugging at.",
    ],
    faqs: [
      {
        q: "Do you charge extra for Newark delivery?",
        a: "No. The hub is in the city, so Newark is as close as we get. Travel is quoted before you book everywhere we serve, and here there is nothing to add.",
      },
      {
        q: "Will the wall fit an Ironbound function room?",
        a: "Usually, once we know the door. Standard is 8ft x 8ft on a free-standing frame, and we can build narrower where the room or the route in demands it. Send a photo of the entrance and we will tell you before you commit.",
      },
      {
        q: "Can you set up outdoors at Branch Brook Park?",
        a: "Yes, with ballast and a weather call the day before. Sustained wind is the one thing that stops us, and we would rather say so in advance than leave a wall on its face in a public park.",
      },
    ],
  },
  {
    slug: "photo-booth-rental-newark-nj",
    service: "photo-booth-rental",
    town: "Newark",
    locationSlug: "newark",
    title: "Photo Booth Rental Newark NJ",
    description:
      "Photo booth rental in Newark — mirror, 360, glam and branded booths with an attendant, for galas, corporate events and Ironbound celebrations.",
    h1: "Photo booth rental in Newark",
    lede: "Galas downtown, corporate nights at the hotels, family parties in the Ironbound — the booth changes, the attendant does not.",
    body: [
      "Newark's corporate and civic calendar is what makes this a booth city rather than only a wall city. Award nights and fundraisers want a branded booth — your logo on the print, on the screen, on the share — and that needs artwork a few days ahead rather than on the night. We would rather chase you for a logo file early than hand out prints with a placeholder on them.",
      "For the Ironbound the practical constraint is power, not space. Older restaurant buildings run their kitchens hard, and a booth on the same circuit as a fridge line is how you lose an hour. We ask which outlet is free and, where the answer is unclear, we bring our own lead and run it from somewhere sensible.",
    ],
    faqs: [
      {
        q: "Can you brand the booth for a corporate event?",
        a: "Yes — logo on the print template, the booth screen and the digital share. Send artwork a few days ahead so there is time to proof it with you.",
      },
      {
        q: "What power does a booth need?",
        a: "A standard outlet. What matters more is that it is not shared with kitchen equipment. Point us at a free circuit and we will do the rest.",
      },
      {
        q: "How long does setup take?",
        a: "About an hour before guests arrive for most booths, a little longer for a 360 platform. We schedule around your room access, not the other way round.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-newark-nj",
    service: "wedding-flower-wall",
    town: "Newark",
    locationSlug: "newark",
    title: "Wedding Flower Wall Newark NJ",
    description:
      "Wedding flower wall rental in Newark — cathedral and ballroom weddings, Ironbound receptions, installed to the venue's access window.",
    h1: "Wedding flower wall in Newark",
    lede: "Newark weddings often split across two buildings — a ceremony one place, a reception another. We plan for the drive between them.",
    body: [
      "The city's church-then-reception pattern is the thing that shapes our timeline here. Where the ceremony and the party are in different buildings, a single wall cannot be in both unless there is a genuine gap between them, and a photographed exit at one venue plus a bare corner at the other is not a trade worth making. We will usually recommend the wall lives where the reception photographs happen, and say so plainly.",
      "Ironbound reception rooms reward a smaller, denser wall over a wide one. The rooms are close and warm and full of people, and an 8ft wall in a room like that reads as generous rather than sparse. Where a venue has a low ceiling we will drop the frame height rather than let the top row of florals brush a light fitting.",
    ],
    faqs: [
      {
        q: "Can you cover a church ceremony and a separate reception?",
        a: "With one wall, only if the timing genuinely allows a move. More often we suggest putting the wall where the reception photographs happen — or quoting a second wall, which is frequently the cheaper answer once the move is priced properly.",
      },
      {
        q: "Do you work with our venue's coordinator?",
        a: "Gladly. Give us the contact and we will arrange access, timings and the COI directly, so it is one less thing in your week.",
      },
      {
        q: "How far ahead should we book a Saturday?",
        a: "Peak Saturdays between May and October go earliest. If your date is in that window, ask sooner rather than later — midweek and off-season dates are far more relaxed.",
      },
    ],
  },

  {
    slug: "flower-wall-rental-hoboken-nj",
    service: "flower-wall-rental",
    town: "Hoboken",
    locationSlug: "hoboken",
    title: "Flower Wall Rental Hoboken NJ",
    description:
      "Flower wall rental in Hoboken — brownstone walk-ups, Washington Street venues and waterfront rooms, delivered with the parking planned in advance.",
    h1: "Flower wall rental in Hoboken",
    lede: "The wall is the easy part in Hoboken. Parking the van is the part we plan first.",
    body: [
      "There is almost nowhere in Hoboken to leave a vehicle while you carry panels, and pretending otherwise is how a setup runs an hour late. We book the earliest access the venue will give us, unload fast and move the van before it becomes somebody's problem. For Washington Street addresses we will ask whether there is an alley or a rear door, because the front is often the worst way in.",
      "Then there are the brownstones. A parlour-floor party up a stoop and a narrow staircase is a completely normal Hoboken booking, and it is a hand-carry every time. We would rather send a bigger crew and get it right than send two people and a trolley into a building that was finished in 1890.",
    ],
    faqs: [
      {
        q: "Is there a surcharge for a walk-up?",
        a: "No. It changes the crew and the arrival time, not the price of the wall. What we do ask is that you tell us in advance so we schedule it properly.",
      },
      {
        q: "Do you need a parking permit?",
        a: "Where a venue can arrange one it helps a great deal. Where it cannot, we work around it — early access, quick unload, and the van moved before the event starts.",
      },
      {
        q: "How big is a standard wall?",
        a: "8ft x 8ft on a weighted free-standing frame. In tighter Hoboken rooms we can build narrower, and in a room with a low ceiling we can drop the height.",
      },
    ],
  },
  {
    slug: "photo-booth-rental-hoboken-nj",
    service: "photo-booth-rental",
    town: "Hoboken",
    locationSlug: "hoboken",
    title: "Photo Booth Rental Hoboken NJ",
    description:
      "Photo booth rental in Hoboken for birthdays, showers and bar nights — compact open-air booths with an attendant, props and instant sharing.",
    h1: "Photo booth rental in Hoboken",
    lede: "Hoboken rooms are small and busy, so the booth that fits is usually not the biggest one.",
    body: [
      "We steer a lot of Hoboken bookings toward the open-air and mirror booths rather than the 360, and it is an honest recommendation rather than an upsell in reverse. A 360 platform wants a ten-foot square with people standing clear of it, and in a bar's back room or a parlour-floor apartment that square does not exist without losing the dance floor. An open-air booth against a wall does the same job in a fraction of the footprint.",
      "Guest flow matters more here than anywhere. Hoboken parties run dense — a hundred people in a room built for eighty — and a booth in the wrong corner becomes a bottleneck between the bar and the bathroom. We will look at the room, not just the address, and put it somewhere the queue can exist.",
    ],
    faqs: [
      {
        q: "Which booth suits a small Hoboken venue?",
        a: "Usually the open-air or mirror booth. Both work against a wall in roughly 8ft x 8ft. The 360 is wonderful and needs about 10ft x 10ft clear, which many rooms here cannot spare.",
      },
      {
        q: "Can you set up in an apartment?",
        a: "Yes, and it is a common booking. Tell us about the stairs and the doorway width and we will bring the right kit and the right number of people.",
      },
      {
        q: "Is an attendant included?",
        a: "Always, for the whole booking. In a room this busy the attendant is most of the value — they keep the line moving and the props off the floor.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-hoboken-nj",
    service: "wedding-flower-wall",
    town: "Hoboken",
    locationSlug: "hoboken",
    title: "Wedding Flower Wall Hoboken NJ",
    description:
      "Wedding flower wall rental in Hoboken — waterfront ceremonies with the Manhattan skyline, brownstone receptions and rooftop toasts.",
    h1: "Wedding flower wall in Hoboken",
    lede: "You booked Hoboken for the skyline. Our job is to add to it, not stand in front of it.",
    body: [
      "Waterfront ceremonies here have one obvious backdrop already, and a flower wall placed badly competes with Manhattan and loses. Where the vows face the water we put the wall behind the guests instead — the receiving line, the cocktail corner, the spot the photographer works between the ceremony and the reception. It gets more use there and it does not fight the view you chose the venue for.",
      "Outdoors on the pier or a rooftop, wind is the whole conversation. The river funnels it and an afternoon can turn quickly. We ballast for it, we call it the day before, and we will move the wall inside rather than gamble on a wedding. That is not caution for its own sake — it is the one failure on a wedding day that cannot be fixed in the moment.",
    ],
    faqs: [
      {
        q: "Can the wall go outside at a waterfront venue?",
        a: "Yes, with proper ballast and a weather call the day before. Sustained wind is where we stop, and we will tell you the day before rather than on the morning.",
      },
      {
        q: "Where should the wall go if the ceremony faces the skyline?",
        a: "Behind the guests, not behind the couple. Cocktail hour and the receiving line are where it earns its keep at a waterfront wedding.",
      },
      {
        q: "Do Hoboken venues require insurance?",
        a: "Most do. Send us what your venue asks for and the certificate comes back the same day.",
      },
    ],
  },

  {
    slug: "flower-wall-rental-princeton-nj",
    service: "flower-wall-rental",
    town: "Princeton",
    locationSlug: "princeton",
    title: "Flower Wall Rental Princeton NJ",
    description:
      "Flower wall rental in Princeton — historic inns, university venues and Palmer Square, sized to doorways that predate the delivery van.",
    h1: "Flower wall rental in Princeton",
    lede: "Princeton's best rooms are its oldest ones, and old rooms have opinions about what fits through the door.",
    body: [
      "The historic inns and university buildings around Nassau Street are beautiful and genuinely constrained — narrow doorways, half-landings, staircases that turn. We build to the room here more than anywhere else we work, which sometimes means two narrower sections rather than one 8ft span, joined so the seam does not read in a photograph. That is a conversation before you book, not a discovery on the day.",
      "The academic calendar drives everything else. Graduation and reunion weekends put every venue and every road under strain at once, and the answer for those dates is to book early and accept an unusually early load-in. Off that calendar, Princeton is one of the more relaxed places in the state to schedule.",
    ],
    faqs: [
      {
        q: "Can you fit a wall through a historic doorway?",
        a: "Usually, by building it in narrower sections and joining them in the room. Send a photo of the door and the route in and we will tell you what will work before you book.",
      },
      {
        q: "Do you serve Princeton from Newark?",
        a: "Yes, from the Newark hub. It is a longer run than the towns on the hub's doorstep, so we schedule Princeton with a wider access window rather than a tight one.",
      },
      {
        q: "What about reunion and graduation weekends?",
        a: "Book as early as you can. Those weekends fill our calendar and the town's at the same time, and load-in windows are earlier than usual.",
      },
    ],
  },
  {
    slug: "photo-booth-rental-princeton-nj",
    service: "photo-booth-rental",
    town: "Princeton",
    locationSlug: "princeton",
    title: "Photo Booth Rental Princeton NJ",
    description:
      "Photo booth rental in Princeton for university events, corporate functions and weddings — attendant, props and instant sharing included.",
    h1: "Photo booth rental in Princeton",
    lede: "Department parties, reunions, weddings at the inns — Princeton books booths for the guest list as much as the party.",
    body: [
      "A lot of what we run here is institutional rather than private: department celebrations, conference receptions, reunion weekends. Those crowds behave differently from a wedding — they arrive together, they photograph in groups of eight rather than pairs, and they want the digital copy rather than the print. We size the template and the sharing setup for that, and bring more props than a corporate booking usually expects, because these turn out to be the rooms where people actually use them.",
      "For the historic venues the same constraint applies to a booth as to a wall: the doorway. An open-air booth breaks down small enough to go anywhere. A 360 platform does not, and in some of these buildings there is no route that takes it. We check before we accept the booking rather than after.",
    ],
    faqs: [
      {
        q: "Can you handle a large group in one shot?",
        a: "Yes — an open-air booth with a wide backdrop takes a group of eight or so comfortably. Tell us to expect groups and we set the framing for it from the start.",
      },
      {
        q: "Can guests get digital copies rather than prints?",
        a: "Both, always. Prints come out on the night and digital copies go by text, email or QR code.",
      },
      {
        q: "Will a 360 booth fit a historic venue?",
        a: "Sometimes not, and we would rather check the route in first. Where it will not go, an open-air or mirror booth does the job in far less space.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-princeton-nj",
    service: "wedding-flower-wall",
    town: "Princeton",
    locationSlug: "princeton",
    title: "Wedding Flower Wall Princeton NJ",
    description:
      "Wedding flower wall rental in Princeton — garden ceremonies, historic inns and university chapels, built to fit rooms with real constraints.",
    h1: "Wedding flower wall in Princeton",
    lede: "Garden ceremony, panelled reception room, a photographer working the light between them — a Princeton wedding usually wants the wall in the third place.",
    body: [
      "The garden weddings here are the ones worth planning carefully. An outdoor ceremony on a lawn is not a hard install, but a wall on grass needs a level bearing and ballast, and a lawn after a wet week needs boards under the feet. We would rather bring them and not need them. Where the ceremony is outside and the reception is in a panelled room, the wall almost always belongs indoors, where it holds the room the dancing happens in.",
      "Princeton's older reception rooms have real architecture — panelling, mouldings, fireplaces — and a flower wall can either complement that or bury it. Our honest advice in those rooms is a denser, tighter wall in a restrained palette rather than a wide riot of colour, because the room is already doing half the work.",
    ],
    faqs: [
      {
        q: "Can you install on a lawn?",
        a: "Yes, with ballast and boards under the frame where the ground is soft. We bring them as standard for garden ceremonies rather than deciding on arrival.",
      },
      {
        q: "Which walls suit a historic room?",
        a: "The more restrained palettes. A panelled room with mouldings is already busy, and a denser wall in fewer colours photographs better in it than a wide multi-colour one.",
      },
      {
        q: "Do you provide a COI for university venues?",
        a: "Yes. Institutional venues almost always require one and their requirements are usually specific — send them over and we will match them exactly.",
      },
    ],
  },

  {
    slug: "flower-wall-rental-red-bank-nj",
    service: "flower-wall-rental",
    town: "Red Bank",
    locationSlug: "red-bank",
    title: "Flower Wall Rental Red Bank NJ",
    description:
      "Flower wall rental in Red Bank — riverfront hotels, theatre events and Broad Street venues, delivered from our Barnegat hub down the shore.",
    h1: "Flower wall rental in Red Bank",
    lede: "Red Bank sits between our two hubs, which means we can usually reach it early from whichever one has the van.",
    body: [
      "The Navesink riverfront is the draw and the complication. Riverfront rooms and tented terraces photograph beautifully and sit in open air off the water, so anything outdoors gets ballast and a wind call as a matter of course. Under a tent the frame is fine; on an open terrace in a spring breeze it needs weighting properly, and we do not treat that as optional.",
      "In town it is a different job. The Broad Street restaurants and the venues around the theatres are compact rooms with street frontage and no dock, so we take the earliest access we can get and keep the load-in short. Red Bank's evening trade starts early, and a van sitting outside at five o'clock helps nobody.",
    ],
    faqs: [
      {
        q: "Which hub covers Red Bank?",
        a: "Both can. It sits between the Newark and Barnegat 50-mile radii, so we send whichever is scheduled better that day. Either way it is a normal delivery, not a special trip.",
      },
      {
        q: "Can you set up under a tent?",
        a: "Yes, and tented riverfront events are a regular booking here. The frame is free-standing, so it does not need to attach to anything of yours.",
      },
      {
        q: "Do you install outdoors by the river?",
        a: "Yes, with ballast and a weather call the day before. Open water means wind, and we plan for it rather than hope.",
      },
    ],
  },
  {
    slug: "photo-booth-rental-red-bank-nj",
    service: "photo-booth-rental",
    town: "Red Bank",
    locationSlug: "red-bank",
    title: "Photo Booth Rental Red Bank NJ",
    description:
      "Photo booth rental in Red Bank — mirror, 360 and glam booths with an attendant, for riverfront weddings, theatre nights and private parties.",
    h1: "Photo booth rental in Red Bank",
    lede: "A booth here works a long evening — Red Bank parties start early and finish late.",
    body: [
      "The pattern we see in Red Bank is a longer running time than the state average. Events start at cocktail hour and go on, and a booth that is only staffed for two of those hours is a booth that sits dark for the half of the night when people finally relax enough to use it. We would rather talk you into the hours that match the party than sell you a short booking that disappoints.",
      "Outdoors and riverside, the practical issue is light rather than space. As the sun drops over the Navesink the ambient light goes warm and then goes entirely, and a booth relying on it produces two very different halves of an evening. Ours bring their own lighting, which is why the last hour looks like the first.",
    ],
    faqs: [
      {
        q: "How many hours should we book?",
        a: "Long enough to cover the part of the night people actually use it — usually from cocktail hour through the middle of the reception. We are happy to advise against a booking that is too short.",
      },
      {
        q: "Can the booth work outdoors in the evening?",
        a: "Yes. The booths carry their own lighting, so photographs taken after sunset match the ones taken before it.",
      },
      {
        q: "Do you cover the wider Monmouth County area?",
        a: "Yes — Red Bank, the surrounding towns and up and down the shore, from the Barnegat hub. See the areas we serve.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-red-bank-nj",
    service: "wedding-flower-wall",
    town: "Red Bank",
    locationSlug: "red-bank",
    title: "Wedding Flower Wall Red Bank NJ",
    description:
      "Wedding flower wall rental in Red Bank — riverfront ceremonies, tented receptions and hotel ballrooms along the Navesink.",
    h1: "Wedding flower wall in Red Bank",
    lede: "Riverfront ceremony, tented reception, and a wall that has to survive an afternoon on open ground.",
    body: [
      "A tented wedding is a different install from a ballroom one, and the difference is the floor. Tents go up on grass or decking, and a wall standing on either needs a level bearing under the frame before anything else happens. We arrive expecting that rather than improvising, and where the ground is soft after rain the boards go down first.",
      "The other thing worth saying about Navesink weddings is the timeline. Riverfront light in the late afternoon is the reason many couples book here, and photographers plan around it tightly. We install well ahead of that window rather than working around a photographer who is chasing the sun, because there is exactly one chance at those twenty minutes.",
    ],
    faqs: [
      {
        q: "Can the wall stand on grass or decking?",
        a: "Yes. The frame is free-standing and weighted, and we bring boards for soft ground so it stays level all evening.",
      },
      {
        q: "How early do you install for a tented wedding?",
        a: "Ahead of the photography window, always. We would rather be finished and out of the way than still working while the couple's portraits are being taken.",
      },
      {
        q: "Do you handle collection the same night?",
        a: "Usually the same night or the following morning, whichever the venue prefers. We confirm it with them directly so it is not another thing on your list.",
      },
    ],
  },

  /* ----------------------------------------------------------- SECONDARY */

  {
    slug: "flower-wall-rental-montclair-nj",
    service: "flower-wall-rental",
    town: "Montclair",
    locationSlug: "montclair",
    title: "Flower Wall Rental Montclair NJ",
    description:
      "Flower wall rental in Montclair — garden parties, gallery events and large older homes, delivered from our Newark hub twenty minutes away.",
    h1: "Flower wall rental in Montclair",
    lede: "More Montclair bookings happen at home than at a venue, and houses have their own rules.",
    body: [
      "The domestic booking is the Montclair speciality — a milestone birthday or a shower in a large older house, often spilling into the garden. Those installs are about protecting somebody's home as much as building a wall: floor protection under the frame, a route in that does not scrape a hallway, and everything out again without a mark. We plan the exit as carefully as the entrance.",
      "Where the party moves outside, a lawn install needs a level bearing and ballast, and mature trees mean shade that shifts across the afternoon. It is worth deciding early whether the wall is for the two o'clock photographs or the six o'clock ones, because in a garden like that they are genuinely different pictures.",
    ],
    faqs: [
      {
        q: "Do you set up at private homes?",
        a: "Often. We bring floor protection, plan the route in, and leave the house as we found it. Tell us about stairs and doorways when you book.",
      },
      {
        q: "Indoors or in the garden?",
        a: "Either. Outdoors we bring ballast and boards for soft ground. It is worth thinking about what time your photographs happen, since garden light changes a great deal across an afternoon.",
      },
      {
        q: "How long does the wall stay up?",
        a: "For the event, with collection the same night or next morning. Longer hires are possible — just ask when you enquire.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-montclair-nj",
    service: "wedding-flower-wall",
    town: "Montclair",
    locationSlug: "montclair",
    title: "Wedding Flower Wall Montclair NJ",
    description:
      "Wedding flower wall rental in Montclair — garden ceremonies, museum and gallery receptions, and weddings at home.",
    h1: "Wedding flower wall in Montclair",
    lede: "Montclair weddings are often at home or in a garden, which makes the install gentler and the planning longer.",
    body: [
      "An at-home wedding has no venue coordinator, no loading dock and no standard access window, which means the logistics land on the couple unless somebody else picks them up. We try to be that somebody: we agree a delivery time that does not collide with the caterer or the tent crew, and we take our own rubbish away. On a day being run out of a family kitchen, that matters more than it sounds.",
      "For the gallery and museum spaces the constraint flips entirely. Those venues have real rules about what may touch a wall or a floor, and a free-standing weighted frame is usually the reason they say yes to us at all. Nothing of ours needs to be fixed to anything of theirs.",
    ],
    faqs: [
      {
        q: "Can you do a wedding at a private house?",
        a: "Yes, and it is common here. We coordinate our arrival with the caterer and any tent crew so the driveway is not three vans deep at once.",
      },
      {
        q: "Will a gallery or museum allow a flower wall?",
        a: "Usually, because the frame is free-standing and weighted and nothing attaches to their walls or floors. Send us their requirements and we will confirm before you book.",
      },
      {
        q: "Do you take the packaging away?",
        a: "Always. We arrive, build, and leave with everything we came with except the wall.",
      },
    ],
  },

  {
    slug: "flower-wall-rental-morristown-nj",
    service: "flower-wall-rental",
    town: "Morristown",
    locationSlug: "morristown",
    title: "Flower Wall Rental Morristown NJ",
    description:
      "Flower wall rental in Morristown — hotel ballrooms, historic venues and corporate events, delivered from our Newark hub.",
    h1: "Flower wall rental in Morristown",
    lede: "Morristown runs on its hotels and its corporate calendar, and both book further ahead than private clients do.",
    body: [
      "The ballroom venues here are the easiest installs we do anywhere — dock, freight lift, a banquet team that has a plan for you before you arrive. What they demand in return is precision about timing, because your room is being turned over between a lunch and your evening, and an install that drifts by half an hour collides with somebody else's event. We give a window and keep to it.",
      "Around the Green the building stock is older and smaller, and those rooms are worth a conversation about scale. A wide wall in a low room reads as crowded; a narrower, taller build in the same space photographs far better. We would rather propose that than deliver something that technically fits.",
    ],
    faqs: [
      {
        q: "Can you work to a tight ballroom turnaround?",
        a: "Yes. Give us the venue's access window and we work inside it. Hotel banquet teams schedule these tightly and we plan to their timetable, not ours.",
      },
      {
        q: "Do you handle corporate bookings?",
        a: "A great deal of our Morristown work is corporate. Branded walls and booths are straightforward, provided we have artwork a few days beforehand.",
      },
      {
        q: "How far ahead do corporate dates book?",
        a: "Earlier than private events, often months. If you have a date and a venue, it is worth asking us now even if the details are unsettled.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-morristown-nj",
    service: "wedding-flower-wall",
    town: "Morristown",
    locationSlug: "morristown",
    title: "Wedding Flower Wall Morristown NJ",
    description:
      "Wedding flower wall rental in Morristown — hotel ballroom weddings and historic venues, installed inside the venue's access window.",
    h1: "Wedding flower wall in Morristown",
    lede: "A Morristown ballroom wedding is the most planned event we do, and it goes best when we are part of the plan early.",
    body: [
      "These weddings usually come with a planner, a banquet manager and a run sheet, and the wall needs a line on it. Where we are told the schedule we install cleanly around the room flip and nobody notices us. Where we are booked late and slotted in, we are one more van in a service corridor already holding a florist, a band and a cake. Early is better, and it costs nothing.",
      "For the historic venues in town the honest answer is sometimes that the wall should be smaller than you first pictured. A room with period detail and a lower ceiling does more for a photograph than a wall that fills it edge to edge, and we would rather say that when you enquire than build something that overwhelms the room you chose.",
    ],
    faqs: [
      {
        q: "Do you coordinate with our wedding planner?",
        a: "Yes, and we prefer to. Give us the contact and we will handle access, timings and the COI with them directly.",
      },
      {
        q: "Can you install during a room flip?",
        a: "Yes, if the venue gives us a window. Ballroom teams run these to a tight schedule and we work inside it.",
      },
      {
        q: "What size wall suits a historic room?",
        a: "Often smaller than couples expect. In a room with period detail and a lower ceiling, a narrower wall photographs better than one that fills the wall edge to edge.",
      },
    ],
  },

  {
    slug: "flower-wall-rental-edison-nj",
    service: "flower-wall-rental",
    town: "Edison",
    locationSlug: "edison",
    title: "Flower Wall Rental Edison NJ",
    description:
      "Flower wall rental in Edison — large banquet halls and multi-day celebrations, with walls sized for rooms that seat hundreds.",
    h1: "Flower wall rental in Edison",
    lede: "Edison's banquet halls are the biggest rooms we work in, and a standard wall can disappear in them.",
    body: [
      "Scale is the whole conversation here. A room seating six or seven hundred swallows an 8ft wall — it looks correct in a photograph and lost in the space. For these halls we will usually propose a wider build in linked sections, or a pair of walls flanking an entrance, so the installation reads at the size of the room rather than at the size of a standard order.",
      "The multi-day celebrations the area is known for change the job in a more practical way. Where an event runs across several days and functions, the question is whether a wall stays up between them or is rebuilt for each. Both are possible and they cost different things in crew time, so it is worth deciding at the enquiry stage rather than midway through the weekend.",
    ],
    faqs: [
      {
        q: "Can you build wider than 8ft?",
        a: "Yes — linked sections give a much wider span, which is often what these halls need. Tell us the room and we will propose a size that fits it.",
      },
      {
        q: "Can a wall stay up across several days?",
        a: "Yes. Multi-day hires are straightforward; we just need to know at the enquiry stage so the wall and the crew are scheduled for it.",
      },
      {
        q: "Do you work with the venue's own decorators?",
        a: "Regularly. We handle the wall and coordinate our access so we are not competing for the same doorway as everybody else.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-edison-nj",
    service: "wedding-flower-wall",
    town: "Edison",
    locationSlug: "edison",
    title: "Wedding Flower Wall Edison NJ",
    description:
      "Wedding flower wall rental in Edison — large-format walls and stage backdrops for banquet hall weddings and multi-day celebrations.",
    h1: "Wedding flower wall in Edison",
    lede: "Stage backdrop, entrance flanks, a wall behind the couple that reads from the back of a very large room.",
    body: [
      "Weddings in these halls often want the wall as a stage backdrop rather than a photo corner, and that is a different build. It has to hold up at distance and under stage lighting, which means density and a palette that does not wash out when a spot hits it. A wall designed for close-up photographs can look thin from row twenty, and we would rather design for the room you are actually in.",
      "Where a celebration runs across several functions, we plan the walls as a set rather than one at a time. Different rooms, different scales, often different palettes across the days — deciding that up front is far cheaper than three separate last-minute orders, and it means the photographs across the weekend look like one event.",
    ],
    faqs: [
      {
        q: "Will the wall read from the back of a large hall?",
        a: "It will if it is built for it. We increase density and choose a palette that holds up under stage lighting rather than washing out.",
      },
      {
        q: "Can you supply walls for several days of functions?",
        a: "Yes, and planning them together works out better than ordering separately. Tell us the whole weekend and we will scope it as one job.",
      },
      {
        q: "Do you install around a stage or mandap?",
        a: "Yes. Send us the stage dimensions and we will size the wall to sit behind or flank it without crowding anything.",
      },
    ],
  },

  {
    slug: "flower-wall-rental-new-brunswick-nj",
    service: "flower-wall-rental",
    town: "New Brunswick",
    locationSlug: "new-brunswick",
    title: "Flower Wall Rental New Brunswick NJ",
    description:
      "Flower wall rental in New Brunswick — hotel ballrooms, theatre receptions and university events, delivered from our Newark hub.",
    h1: "Flower wall rental in New Brunswick",
    lede: "A hotel, a theatre and a university in a few blocks — New Brunswick's venues are close together and very different from each other.",
    body: [
      "The downtown hotel and conference rooms are conventional installs with proper access, and they are the easiest bookings in the city. The theatre and arts spaces are not: their back-of-house is built for productions, not events, and the route from the street to the room can involve a scene dock and a corridor that was never meant for florals. We ask about that route rather than assuming it, and we bring a smaller crew and more time.",
      "The university calendar does to New Brunswick what it does to Princeton. Move-in weekends, homecoming and graduation compress everything — traffic, parking and venue availability at once. On those dates we schedule early access as standard and tell you honestly that a mid-afternoon install is not realistic.",
    ],
    faqs: [
      {
        q: "Can you deliver to a theatre venue?",
        a: "Yes, once we know the route in. Back-of-house in an arts building is built for productions rather than events, so we plan it in advance rather than arriving hopeful.",
      },
      {
        q: "Do university dates affect availability?",
        a: "They affect timing more than availability. Around graduation and homecoming we install early, because the roads and the venues are both under strain.",
      },
      {
        q: "Is there a delivery charge?",
        a: "Travel is quoted before you book, and New Brunswick is a normal run from the Newark hub. There are no surprises added afterwards.",
      },
    ],
  },
  {
    slug: "wedding-flower-wall-new-brunswick-nj",
    service: "wedding-flower-wall",
    town: "New Brunswick",
    locationSlug: "new-brunswick",
    title: "Wedding Flower Wall New Brunswick NJ",
    description:
      "Wedding flower wall rental in New Brunswick — downtown hotel ballrooms and arts venues, installed to the venue's access window.",
    h1: "Wedding flower wall in New Brunswick",
    lede: "Downtown hotel weddings here run to a schedule, and the wall is easiest when it lands early in it.",
    body: [
      "Because so many of these weddings happen in hotels, guests are often staying in the building. That changes where a wall earns its keep: the lobby-adjacent spaces see traffic all day, and a wall placed where guests pass on the way to the room gets photographed far more than one tucked inside the ballroom. Where the venue allows it, we will suggest that placement.",
      "The other local factor is that a good share of couples here are marrying near where they studied, and the guest list arrives from a distance in one wave. Booths and walls both take their heaviest use in the first ninety minutes as a result. We install with enough margin that everything is finished and dressed before that first wave rather than during it.",
    ],
    faqs: [
      {
        q: "Can the wall go in a hotel lobby space?",
        a: "Where the venue permits it, yes, and it is often the better spot. Guests staying in the building pass it all day rather than only during the reception.",
      },
      {
        q: "How early do you install?",
        a: "Early enough to be finished before guests arrive. Where the guest list travels in together, that first hour is the busiest of the night.",
      },
      {
        q: "Do you provide a COI for hotel venues?",
        a: "Yes. Send us the hotel's requirements and the certificate comes back the same day.",
      },
    ],
  },

  /* ----------------------------------------------------------- BEACHHEAD */

  {
    slug: "flower-wall-rental-cherry-hill-nj",
    service: "flower-wall-rental",
    town: "Cherry Hill",
    locationSlug: "cherry-hill",
    title: "Flower Wall Rental Cherry Hill NJ",
    description:
      "Flower wall rental in Cherry Hill and South Jersey — hotel ballrooms, country clubs and private homes, reached from our Barnegat hub.",
    h1: "Flower wall rental in Cherry Hill",
    lede: "South Jersey is served from the Barnegat hub, which means Cherry Hill dates want a little more notice than the north does.",
    body: [
      "We are honest about the geography here rather than pretending the state is small. Cherry Hill sits at the far side of the Barnegat hub's radius, so we schedule these bookings with a wider window and prefer not to take a same-week date unless the day happens to be open. What you get in exchange is a crew that has planned the run properly rather than one arriving late and rushing an install.",
      "The venue mix is country clubs, hotel ballrooms and substantial private homes, and all three are straightforward to build in. Country clubs in particular tend to have a service entrance and a banquet team used to outside vendors, which makes them among the smoother installs we do anywhere in the state.",
    ],
    faqs: [
      {
        q: "Do you actually cover South Jersey?",
        a: "Yes, from the Barnegat hub. It is a longer run than our northern work, so give us more notice where you can and we will schedule it properly.",
      },
      {
        q: "How much notice do you need?",
        a: "More than for the Newark-hub towns. A few weeks is comfortable; same-week is possible only if the day is already open.",
      },
      {
        q: "Is there a travel charge?",
        a: "Travel is quoted before you book, so you see it up front rather than finding it on an invoice afterwards.",
      },
    ],
  },
  {
    slug: "flower-wall-rental-atlantic-city-nj",
    service: "flower-wall-rental",
    town: "Atlantic City",
    locationSlug: "atlantic-city",
    title: "Flower Wall Rental Atlantic City NJ",
    description:
      "Flower wall rental in Atlantic City — casino ballrooms, conference floors and oceanfront venues, delivered from our Barnegat hub.",
    h1: "Flower wall rental in Atlantic City",
    lede: "Casino venues have the best loading access in the state and the most paperwork to go with it.",
    body: [
      "The ballroom and conference floors here are built for freight — marshalling areas, service lifts, dedicated routes that never cross a guest corridor. The trade is that access is scheduled and credentialled rather than casual, so we need the venue's vendor requirements well in advance. Where we have them, load-in is as smooth as anywhere we work. Where we do not, a van can sit at a service entrance for an hour, and that is a wholly avoidable way to lose time.",
      "Anything on a deck, terrace or boardwalk-facing space is an outdoor install in an ocean wind, and we treat it as one. Ballast, a weather call the day before, and a willingness to move indoors. Salt air also means we prefer not to leave a wall standing outside overnight where it can be avoided.",
    ],
    faqs: [
      {
        q: "Do you handle casino vendor requirements?",
        a: "Yes — send us the venue's vendor pack and we will complete it. Access here is scheduled and credentialled, so having it early is what keeps load-in smooth.",
      },
      {
        q: "Can you set up on an oceanfront terrace?",
        a: "Yes, with ballast and a weather call. Ocean wind is stronger than most inland venues ever see and we plan for it rather than hope.",
      },
      {
        q: "How far in advance should we book?",
        a: "As early as you can for conference season. Atlantic City is at the outer edge of the Barnegat hub's radius, so the schedule fills differently from our northern work.",
      },
    ],
  },
  {
    slug: "flower-wall-rental-jersey-shore",
    service: "flower-wall-rental",
    town: "the Jersey Shore",
    locationSlug: "jersey-shore",
    title: "Flower Wall Rental Jersey Shore NJ",
    description:
      "Flower wall rental along the Jersey Shore — beach ceremonies, oceanfront hotels and Asbury Park venues, from our Barnegat hub on the coast.",
    h1: "Flower wall rental on the Jersey Shore",
    lede: "The Barnegat hub is on this coast, so the shore is home ground rather than a long trip.",
    body: [
      "Beach installs are the ones people underestimate. Sand gives under a weighted frame, so a wall on a beach needs boards beneath it and considerably more ballast than the same wall on a ballroom floor — and even then there is a wind speed at which we will not put it up, which we would rather tell you the day before than on the sand. Where a ceremony is on the beach, the wall very often belongs at the reception instead.",
      "Asbury Park and the oceanfront hotels are far simpler and among our favourite rooms in the state. Load-in is conventional, the rooms are used to vendors, and the light off the water in the late afternoon does something to a flower wall that no amount of uplighting reproduces. Book the wall where the photographs happen at that hour and it earns its keep twice over.",
    ],
    faqs: [
      {
        q: "Can you put a flower wall on the beach?",
        a: "Yes, with boards under the frame and heavy ballast. There is a wind speed where we will decline, and we will tell you the day before rather than on the day.",
      },
      {
        q: "Which shore towns do you cover?",
        a: "The coast either side of the Barnegat hub, from the northern shore towns down past Atlantic City. If you are unsure about your town, ask — it is usually a yes.",
      },
      {
        q: "Does salt air damage the flowers?",
        a: "Not over the length of an event. We do avoid leaving a wall outdoors overnight on the coast where the schedule allows it.",
      },
    ],
  },
];

/** Every combo that exists for a given location slug, for the link grid. */
export const combosForLocation = (locationSlug: string) =>
  COMBOS.filter((c) => c.locationSlug === locationSlug);

export const getCombo = (slug: string) => COMBOS.find((c) => c.slug === slug);
