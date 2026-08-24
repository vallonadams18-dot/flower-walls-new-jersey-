/** Location cluster. Five at launch, chosen from the two real delivery hubs
 *  (Newark and Barnegat, 50-mile radius each). Every page must say things
 *  true only of its place — no doorway pages where only the city changes. */
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
    h1: "Flower wall rental in Jersey City",
    meta: {
      title: "Flower Wall Rental Jersey City | NJ Flower Walls",
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
    h1: "Flower wall rental in Newark",
    meta: {
      title: "Flower Wall Rental Newark NJ | NJ Flower Walls",
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
    h1: "Flower wall rental in Hoboken",
    meta: {
      title: "Flower Wall Rental Hoboken | NJ Flower Walls",
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
    h1: "Flower wall rental in Montclair",
    meta: {
      title: "Flower Wall Rental Montclair | NJ Flower Walls",
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
    h1: "Flower wall rental at the Jersey Shore",
    meta: {
      title: "Flower Wall Rental Jersey Shore | NJ Flower Walls",
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
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
