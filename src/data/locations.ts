/** Location cluster — the area HUBS. One page per area the business states it serves in
 *  `SITE.SERVICE_AREAS`, reached from the two real delivery hubs (Newark and
 *  Barnegat, 50-mile radius each). Barnegat itself has no page — it is a hub,
 *  not a market, and the Jersey Shore page already explains it.
 *  Every page must say things true only of its place — no doorway pages where
 *  only the city changes.
 *
 *  These are hubs, not service pages: they cover everything we do in an area
 *  and link down to the service-specific grid in `combos.ts`. Titles and H1s
 *  are deliberately broader than the grid's so the two do not compete for the
 *  same query. */
export interface LocationPage {
  slug: string;
  nav: string;
  h1: string;
  meta: { title: string; description: string };
  lede: string;
  sections: { h: string; p: string[] }[];
  events: string[]; // event slugs most relevant here
}

export const LOCATIONS: LocationPage[] = [
  {
    slug: "jersey-city",
    nav: "Jersey City",
    h1: "Flower walls and photo booths in Jersey City",
    meta: {
      title: "Flower Walls & Photo Booths Jersey City NJ",
      description:
        "Flower wall and photo booth rentals in Jersey City — waterfront venues, lofts and rooftops, delivered from our Newark hub minutes away.",
    },
    lede: "Waterfront venues, converted lofts and rooftop terraces — fifteen minutes from our Newark hub, so Jersey City gets our earliest install slots.",
    sections: [
      {
        h: "Working Jersey City venues",
        p: [
          "The waterfront hotels have proper loading docks; the Grove Street lofts and Hamilton Park brownstones do not. We quote Jersey City after asking one question — what is the access? — because carrying panels up a walk-up changes the crew, not the price of the wall.",
          "Rooftop events get the outdoor treatment: extra ballast and a wind call the day before. The skyline backdrop is worth the planning.",
        ],
      },
      {
        h: "Short-notice friendly",
        p: [
          "Being this close to the hub means Jersey City can sometimes book inside two weeks when other areas cannot. If your date is soon, ask — the answer is yes more often here than anywhere else we serve.",
        ],
      },
    ],
    events: ["weddings", "corporate", "birthdays"],
  },
  {
    slug: "newark",
    nav: "Newark",
    h1: "Flower walls and photo booths in Newark",
    meta: {
      title: "Flower Walls & Photo Booths Newark NJ",
      description:
        "Flower wall and photo booth rentals in Newark, NJ — our home base. Halls, hotels and the Ironbound's event spaces, with no travel fee.",
    },
    lede: "Newark is home base. No travel fee, the widest choice of install times, and crews that know the halls from the Ironbound to Broad Street.",
    sections: [
      {
        h: "Our own backyard",
        p: [
          "The warehouse is here, which means Newark events get first pick of walls and time slots, and a same-day fix if anything ever needs attention mid-event. Banquet halls around the Ironbound, the downtown hotels, church halls and school gyms — we have carried panels into most of them.",
          "Quinceañeras and Sweet 16s keep our Newark weekends busy; Rio, Ombre and the butterfly walls are the local favourites.",
        ],
      },
      {
        h: "No travel fee",
        p: [
          "Newark bookings skip the travel line entirely. The quote is the wall, the install and nothing else.",
        ],
      },
    ],
    events: ["birthdays", "weddings", "baby-showers"],
  },
  {
    slug: "hoboken",
    nav: "Hoboken",
    h1: "Flower walls and photo booths in Hoboken",
    meta: {
      title: "Flower Walls & Photo Booths Hoboken NJ",
      description:
        "Flower wall and photo booth rentals in Hoboken — waterfront weddings, brownstone parties and rooftop events, with parking handled in the quote.",
    },
    lede: "Waterfront wedding venues, brownstone parlour floors and rooftops with the Manhattan skyline — Hoboken's spaces are beautiful and tight, and we plan for both.",
    sections: [
      {
        h: "The parking truth",
        p: [
          "Everyone who has hosted in Hoboken knows the real logistics problem is the curb. We build loading time and permits into the plan up front, because a crew circling for parking is how other vendors run late. Our quote includes the reality of the street, not the fantasy.",
          "Brownstone parties: the wall panels fit through standard doorways and up parlour stairs. We measure twice by asking for one photo of the entry.",
        ],
      },
      {
        h: "Skyline rooftops",
        p: [
          "A blush or white wall against the Manhattan skyline is Hoboken's signature shot. Wind planning comes standard on every rooftop install.",
        ],
      },
    ],
    events: ["weddings", "bridal-showers", "corporate"],
  },
  {
    slug: "montclair",
    nav: "Montclair",
    h1: "Flower walls and photo booths in Montclair",
    meta: {
      title: "Flower Walls & Photo Booths Montclair NJ",
      description:
        "Flower wall and photo booth rentals in Montclair, NJ — restaurant private rooms, art-space events, backyard showers and Essex County weddings.",
    },
    lede: "Restaurant private rooms, gallery spaces and generous backyards — Montclair hosts at home more than anywhere else we serve, and the wall travels well to all of it.",
    sections: [
      {
        h: "Homes and private rooms",
        p: [
          "Montclair's shower-and-dinner-party culture means half our bookings here are residential or restaurant private rooms. The wall needs 8ft of width and standard-door access; Earthy and Jasmin match the town's taste for styled-but-natural.",
          "Backyard events under the big Essex County trees are a Montclair specialty — dappled light flatters every wall we own.",
        ],
      },
      {
        h: "Essex County reach",
        p: [
          "From Montclair we routinely cover West Orange, Livingston, Bloomfield and the Caldwells in the same trip radius, all inside the Newark hub's closest ring.",
        ],
      },
    ],
    events: ["baby-showers", "bridal-showers", "birthdays"],
  },
  {
    slug: "jersey-shore",
    nav: "Jersey Shore",
    h1: "Flower walls and photo booths at the Jersey Shore",
    meta: {
      title: "Flower Walls & Photo Booths Jersey Shore NJ",
      description:
        "Flower wall and photo booth rentals at the Jersey Shore from our Barnegat hub — beach weddings, Asbury Park venues and Atlantic City events.",
    },
    lede: "Beach weddings, boardwalk venues and Atlantic City ballrooms — served from our Barnegat hub, built for salt air and sea breeze.",
    sections: [
      {
        h: "The Barnegat hub",
        p: [
          "Our second base sits in Barnegat, which puts the whole Shore — LBI, Asbury Park, Point Pleasant, down to Atlantic City — inside a 50-mile ring. Shore dates do not pay North Jersey travel rates, because the truck is not coming from North Jersey.",
        ],
      },
      {
        h: "Wind is the design constraint",
        p: [
          "A flower wall on a beach behaves like a sail, so Shore installs get double ballast, a sheltered orientation, and a plan B location agreed with the venue in advance. Sunset, Sunrise and Blue Ocean were practically named for these events.",
          "Atlantic City ballroom events are the easy version — dock access, house power, and walls that photograph richly under chandelier light.",
        ],
      },
    ],
    events: ["weddings", "birthdays", "corporate"],
  },
  {
    slug: "princeton",
    nav: "Princeton",
    h1: "Flower walls and photo booths in Princeton",
    meta: {
      title: "Flower Walls & Photo Booths Princeton NJ",
      description:
        "Flower wall and photo booth rentals in Princeton, NJ — garden weddings, historic inns and university-season events, reached from both delivery hubs.",
    },
    lede: "Garden weddings, historic inns and a calendar that moves with the university — Princeton sits in the overlap between both our hubs, so it books like a close town rather than a far one.",
    sections: [
      {
        h: "Historic doorways, modern walls",
        p: [
          "Princeton's loveliest venues are also its oldest, which means narrow entries, low door heads and stair turns that defeat anything rigid. Our panels break down to fit through a standard doorway and reassemble inside — ask us before assuming a room is impossible, because it usually is not.",
          "Tented garden receptions are the other half of the town's calendar. On grass we bring ballast and level the frame properly; a wall that leans two degrees reads as crooked in every photo taken against it.",
        ],
      },
      {
        h: "Book around the university calendar",
        p: [
          "Reunions weekend, commencement and move-in take every hotel room and half the parking in town. If your date falls in those windows, book the wall early and expect an earlier install slot — we would rather be set up before the streets fill than negotiate a loading zone at noon.",
          "Purity and Earthy suit the town's taste for restrained and garden-adjacent; Greenstreak reads beautifully against stone.",
        ],
      },
    ],
    events: ["weddings", "corporate", "bridal-showers"],
  },
  {
    slug: "morristown",
    nav: "Morristown",
    h1: "Flower walls and photo booths in Morristown",
    meta: {
      title: "Flower Walls & Photo Booths Morristown NJ",
      description:
        "Flower wall and photo booth rentals in Morristown and Morris County — estate venues, hotel ballrooms and corporate events, 30 minutes from our Newark hub.",
    },
    lede: "Estate venues, hotel ballrooms and the corporate corridor along Route 24 — Morris County is half an hour from the Newark warehouse and books like it.",
    sections: [
      {
        h: "Estates and ballrooms",
        p: [
          "The historic estate venues around the Green have grand rooms and awkward service routes — servants' stairs, gravel drives, doorways built for 1890. We walk the route before the truck is loaded, which is why we ask for the venue name at quote time rather than after.",
          "Hotel ballrooms in Florham Park, Madison and Whippany are the straightforward version: dock, freight lift, house power. Majestic, Ebony and Crimson Rose hold up under chandelier light where paler walls wash out.",
        ],
      },
      {
        h: "The corporate corridor",
        p: [
          "Morris County's pharma and finance campuses run more weeknight receptions and award dinners than anywhere else we serve. Branded walls, step-and-repeat setups and a booth beside them are the usual ask — and a 6pm install after a working day means we arrive quiet and clear out clean.",
        ],
      },
    ],
    events: ["corporate", "weddings", "bridal-showers"],
  },
  {
    slug: "red-bank",
    nav: "Red Bank",
    h1: "Flower walls and photo booths in Red Bank",
    meta: {
      title: "Flower Walls & Photo Booths Red Bank NJ",
      description:
        "Flower wall and photo booth rentals in Red Bank and Monmouth County — riverfront weddings, downtown restaurants and theatre-district events.",
    },
    lede: "Riverfront weddings, downtown restaurant rooms and a theatre-district crowd that shows up dressed — Red Bank is a short run from the Barnegat hub.",
    sections: [
      {
        h: "River light and restaurant rooms",
        p: [
          "Navesink-side venues give you water light through the whole golden hour, which flatters the softer walls — Sky Blue, Sunset and Jasmin were made for this stretch of Monmouth County. Riverfront also means breeze: outdoor installs here get the same ballast treatment as a beach.",
          "Downtown restaurant private rooms are tighter than they look. Most fit an 8ft wall comfortably; a few need the narrower configuration, which we will tell you before you book rather than on the day.",
        ],
      },
      {
        h: "Monmouth County in one trip",
        p: [
          "From Red Bank we cover Rumson, Fair Haven, Middletown, Little Silver and Long Branch inside the same radius, all on Barnegat-hub rates rather than North Jersey ones.",
        ],
      },
    ],
    events: ["weddings", "birthdays", "bridal-showers"],
  },
  {
    slug: "edison",
    nav: "Edison",
    h1: "Flower walls and photo booths in Edison",
    meta: {
      title: "Flower Walls & Photo Booths Edison NJ",
      description:
        "Flower wall and photo booth rentals in Edison and Middlesex County — large banquet halls, multi-day weddings and 300-guest events along the Route 1 corridor.",
    },
    lede: "Middlesex County's big banquet halls host the largest guest counts we serve anywhere in New Jersey — and the multi-day celebrations that come with them.",
    sections: [
      {
        h: "Built for big rooms",
        p: [
          "A 300-guest hall makes a single 8ft wall look small. Edison bookings more often want the wide configuration, or a wall paired with an arch, so the backdrop holds its own against the room. We will say so at quote time — undersizing the wall for a hall this big is the most common mistake we see.",
          "Rio, Peacock Butterfly and Pink & Purple Ombre carry saturated colour that reads from across a ballroom; Majestic pairs with gold and mandap staging without competing with it.",
        ],
      },
      {
        h: "Multi-day events, one install plan",
        p: [
          "Celebrations that run across two or three days need the wall in a different room each night, not struck and rebuilt from scratch. Tell us the full schedule up front and we plan the moves as one job — it is cheaper than booking us three times and far less disruptive to the venue.",
        ],
      },
    ],
    events: ["weddings", "corporate", "birthdays"],
  },
  {
    slug: "new-brunswick",
    nav: "New Brunswick",
    h1: "Flower walls and photo booths in New Brunswick",
    meta: {
      title: "Flower Walls & Photo Booths New Brunswick NJ",
      description:
        "Flower wall and photo booth rentals in New Brunswick, NJ — hotel and conference venues, university and hospital galas, and downtown celebrations.",
    },
    lede: "Conference hotels, university halls and hospital galas — New Brunswick runs on institutional events, and institutional venues have rules worth knowing before the truck arrives.",
    sections: [
      {
        h: "Loading docks and certificates",
        p: [
          "Downtown venues here mean parking decks, service corridors and a security desk that wants paperwork. We carry a certificate of insurance and send it ahead when the venue asks — this is routine for us and it is the thing that most often delays other vendors at the door.",
          "Freight lift dimensions matter more than room size in this part of town. One photo of the lift is usually all we need to confirm the configuration.",
        ],
      },
      {
        h: "Galas and graduations",
        p: [
          "Spring is fundraiser and graduation season across the university and hospital calendars, and it books out early. Rainbow Wall and Pink Blush do the lighter, celebratory end; Ebony and Majestic suit a black-tie fundraiser without reading like a party.",
        ],
      },
    ],
    events: ["corporate", "weddings", "birthdays"],
  },
  {
    slug: "cherry-hill",
    nav: "Cherry Hill",
    h1: "Flower walls and photo booths in Cherry Hill",
    meta: {
      title: "Flower Walls & Photo Booths Cherry Hill NJ",
      description:
        "Flower wall and photo booth rentals in Cherry Hill and Camden County — country clubs, synagogue celebrations and South Jersey weddings, from our Barnegat hub.",
    },
    lede: "Country clubs, synagogue halls and the Philadelphia side of the state — Cherry Hill sits at the far edge of the Barnegat hub's ring, and we plan the day around that honestly.",
    sections: [
      {
        h: "The long-haul truth",
        p: [
          "Cherry Hill is the furthest regular run we make, so South Jersey dates get an earlier install slot and a confirmed arrival window rather than a vague morning. We would rather tell you the truck leaves at dawn than have you wonder where it is at ten.",
          "It also means we prefer to know about a Cherry Hill booking further ahead than a Newark one. Short-notice is possible; it is just not the promise we make down here.",
        ],
      },
      {
        h: "Clubs, temples and b'nai mitzvah season",
        p: [
          "Camden County's country clubs and synagogue social halls run a full calendar of bar and bat mitzvahs alongside the wedding season, and those events want a wall the guest of honour picked themselves. Barbie Wall, Sky Blue and White Pink Blush are the ones thirteen-year-olds actually choose.",
        ],
      },
    ],
    events: ["birthdays", "weddings", "bridal-showers"],
  },
  {
    slug: "atlantic-city",
    nav: "Atlantic City",
    h1: "Flower walls and photo booths in Atlantic City",
    meta: {
      title: "Flower Walls & Photo Booths Atlantic City NJ",
      description:
        "Flower wall and photo booth rentals in Atlantic City — casino ballrooms, convention centre activations and boardwalk weddings, served from our Barnegat hub.",
    },
    lede: "Casino ballrooms, convention floors and boardwalk weddings — Atlantic City is the most procedural venue city in the state, and the one we plan earliest for.",
    sections: [
      {
        h: "Casino and convention load-in",
        p: [
          "Properties here run real loading docks with scheduled bays, badge requirements, certificates of insurance and in some cases house labour rules about who may push a cart across the floor. None of it is a problem when it is handled a week out; all of it is a problem at 4pm on the day. We do the paperwork as part of the booking.",
          "Ballroom light is warm and low, which suits the richer walls — Ebony, Majestic and Adonis Blue photograph deeply under chandeliers where pale walls go flat.",
        ],
      },
      {
        h: "Conventions and brand activations",
        p: [
          "Trade show and convention work is its own job: a branded wall, a booth beside it, and a build that must be up before the floor opens and gone before the hall closes. Overnight and pre-dawn installs are normal for us here, and the Barnegat hub is close enough to make them practical.",
          "Boardwalk and beach ceremonies get the Shore treatment — double ballast, a wind call the day before, and an agreed indoor fallback.",
        ],
      },
    ],
    events: ["corporate", "weddings", "birthdays"],
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
