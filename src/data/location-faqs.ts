/**
 * FAQs for the location hubs, keyed by the slug in `locations.ts`.
 *
 * Kept in their own file so the hub copy and the questions can be edited
 * independently, and so this can grow without touching a file another hand
 * is working in.
 *
 * These are deliberately BROADER than the questions on the coverage-grid
 * pages in `combos.ts`. A hub answers "do you come here, and how does that
 * work" — coverage, scheduling, both product lines together. A grid page
 * answers a question about one service. No question is asked in both places,
 * and no answer is shared between them.
 */

export const LOCATION_FAQS: Record<string, { q: string; a: string }[]> = {
  "jersey-city": [
    {
      q: "Do you cover the whole of Hudson County?",
      a: "Yes. Jersey City, Hoboken, Bayonne, Weehawken, Union City and the towns between them are all inside the Newark hub's radius, and none of them counts as a long trip.",
    },
    {
      q: "Can we see a wall in person before booking?",
      a: "We do not run a showroom, and we would rather tell you that than have you drive somewhere. What we can do is send photographs of a specific wall at real events rather than catalogue shots, which is a better guide to how it will actually look in a room.",
    },
    {
      q: "Can one booking cover both a wall and a booth?",
      a: "Yes, and it is the most common way people book here — one team, one delivery, one setup. It also means the booth is pointed at the backdrop from the start rather than the two being positioned by different people.",
    },
  ],

  newark: [
    {
      q: "Are you actually based in Newark?",
      a: "Our northern hub is here, which is why Newark gets the first install slot of the day and the latest collection. It is the shortest run we make.",
    },
    {
      q: "Can you handle a same-week booking?",
      a: "Sometimes, and Newark is where the answer is most often yes. Ask rather than assuming — the worst outcome is that the day is already committed.",
    },
    {
      q: "Do you work with event planners and venues directly?",
      a: "Regularly, and it usually makes for a smoother day. Give us the coordinator's contact and we will arrange access, timings and insurance paperwork with them so it stops being your job.",
    },
  ],

  hoboken: [
    {
      q: "How early do you need access in Hoboken?",
      a: "Earlier than most places, because there is nowhere to leave a vehicle while we carry. We take the first access window a venue will give us, unload quickly and move the van before the event starts.",
    },
    {
      q: "Do you deliver to apartments and private homes?",
      a: "Often — parlour floors and brownstone apartments are a normal booking here. Tell us about the stoop, the staircase and the doorway width and we will send the right crew.",
    },
    {
      q: "What if the weather turns on an outdoor booking?",
      a: "We make the call the day before rather than on the morning, and where an indoor alternative exists we will move to it. Anything free-standing and tall has a wind limit, and we would rather lose the outdoor photograph than the whole setup.",
    },
  ],

  montclair: [
    {
      q: "Do you serve the surrounding Essex County towns?",
      a: "Yes — Montclair, Bloomfield, Glen Ridge, Verona, Caldwell and the rest of that cluster are all a short run from the Newark hub.",
    },
    {
      q: "Will you protect our floors and doorways?",
      a: "Yes, as standard for anything at a private home. Protection goes down before the frame does, we plan the route in, and we take our packaging away with us.",
    },
    {
      q: "Can a setup stay up overnight for a two-day event?",
      a: "Usually, if the space is secure and the host is happy for it. It is worth raising when you enquire so the wall and the crew are scheduled for it rather than being needed elsewhere the next morning.",
    },
  ],

  "jersey-shore": [
    {
      q: "Which shore towns do you actually reach?",
      a: "The coast either side of the Barnegat hub — the northern shore towns through to the Atlantic City side. If you are unsure whether your town is in range, ask; it is usually a yes.",
    },
    {
      q: "Is a beach setup possible?",
      a: "Yes, with boards under the frame and considerably more ballast than an indoor install. There is a wind speed at which we will decline, and we will say so the day before rather than on the sand.",
    },
    {
      q: "Do you work with the oceanfront hotels?",
      a: "Frequently. Those venues have conventional load-in and staff who are used to outside vendors, which makes them some of the smoothest installs we do anywhere in the state.",
    },
  ],

  princeton: [
    {
      q: "Do you serve the wider Mercer County area?",
      a: "Yes — Princeton, Lawrenceville, Hopewell, Pennington and across to the Trenton side are all within reach, run from the Newark hub.",
    },
    {
      q: "Our venue has strict rules about fixings. Is that a problem?",
      a: "No, and it is the reason free-standing works so well here. Nothing of ours attaches to a wall, a floor or a ceiling — the frame is weighted and stands on its own, which is usually what gets a yes from a protected building.",
    },
    {
      q: "How much notice do university-linked events need?",
      a: "More than a private booking, particularly around reunions and graduation. Those weekends fill our calendar and the town's simultaneously, and load-in windows move earlier.",
    },
  ],

  morristown: [
    {
      q: "Do you cover the rest of Morris County?",
      a: "Yes — Morristown, Madison, Chatham, Florham Park, Parsippany and the surrounding towns are a routine run from the Newark hub.",
    },
    {
      q: "Can you fit into a hotel's turnaround between events?",
      a: "Yes. Give us the venue's access window in writing and we work inside it. Banquet teams here run tight schedules and we plan to their timetable rather than our own convenience.",
    },
    {
      q: "How far ahead do corporate dates need booking?",
      a: "Earlier than private events — often months, because the venues themselves book that way. If you have a date and a room, it is worth asking us before the rest of the detail is settled.",
    },
  ],

  "red-bank": [
    {
      q: "Which hub covers Red Bank?",
      a: "Either. Red Bank sits inside both the Newark and Barnegat radii, so we send whichever is scheduled better on the day. It is a normal delivery from both, not a special trip.",
    },
    {
      q: "Do you cover the rest of Monmouth County?",
      a: "Yes — Red Bank, Rumson, Middletown, Holmdel, Asbury Park and the towns along that stretch of coast are all in range.",
    },
    {
      q: "Can a booth and a wall run for a longer evening?",
      a: "Yes, and here it is worth it. Events in this area tend to run late, and a booking that ends before the party does leaves the busiest hours uncovered.",
    },
  ],

  edison: [
    {
      q: "Do you serve the surrounding Middlesex County towns?",
      a: "Yes — Edison, Woodbridge, Iselin, Metuchen, Piscataway and the rest of that area are a normal run from the Newark hub.",
    },
    {
      q: "Can you supply decor across several days of functions?",
      a: "Yes, and planning the whole weekend together works out better than booking each function separately. Tell us the full schedule and we will scope it as one job.",
    },
    {
      q: "Will a standard wall look right in a very large hall?",
      a: "Often not, and we will say so. A room seating several hundred can swallow a standard span — linked sections or a pair of walls flanking an entrance usually read far better at that scale.",
    },
  ],

  "new-brunswick": [
    {
      q: "Do you cover the surrounding area as well?",
      a: "Yes — New Brunswick, Highland Park, East Brunswick, Somerset and the towns around them are all inside the Newark hub's radius.",
    },
    {
      q: "Do university dates affect availability?",
      a: "They affect timing more than availability. Around graduation and homecoming the roads and the venues are under strain at once, so we schedule earlier access as standard rather than promising a mid-afternoon install.",
    },
    {
      q: "Can you deliver to an arts or theatre venue?",
      a: "Yes, once we know the route in. Back-of-house in those buildings is designed for productions rather than events, so we plan it in advance instead of arriving hopeful.",
    },
  ],

  "cherry-hill": [
    {
      q: "Do you really cover South Jersey?",
      a: "Yes, from the Barnegat hub. We would rather be straight about the geography than pretend the state is small: it is a longer run than our northern work, so more notice helps.",
    },
    {
      q: "How much notice should we give?",
      a: "A few weeks is comfortable. Same-week is possible only where the day happens to be open, because the run is long enough that it has to be scheduled properly rather than squeezed in.",
    },
    {
      q: "Is travel charged separately?",
      a: "Travel is quoted before you book, so you see it as part of the number rather than finding it added afterwards.",
    },
  ],

  "atlantic-city": [
    {
      q: "Can you meet casino vendor requirements?",
      a: "Yes. Send us the venue's vendor pack and we complete it. Access on those floors is scheduled and credentialled, and having the paperwork done early is what keeps a load-in smooth.",
    },
    {
      q: "Do you cover the rest of the shore from here?",
      a: "Yes — the Barnegat hub reaches Atlantic City and the coast in both directions, so a booking here and one further north are the same kind of trip for us.",
    },
    {
      q: "How far ahead should a conference booking be made?",
      a: "As early as you can manage. Conference season fills the calendar differently from wedding season, and this is the far edge of the hub's radius.",
    },
  ],
};

/**
 * One line per area on what we need to know about getting in, used as the
 * first step of the HowTo on each hub. Short, and specific to the place.
 */
export const LOCATION_ACCESS: Record<string, string> = {
  "jersey-city": "For Jersey City we ask whether it is a waterfront tower with a dock or a walk-up behind Grove Street, because they are different crews.",
  newark: "For Newark we ask whether it is a downtown ballroom or an Ironbound function room, because the door decides the build.",
  hoboken: "For Hoboken we ask about the stoop, the staircase and where a van can legally stop, because none of that can be solved on the day.",
  montclair: "For Montclair we ask whether it is a venue or a private home, because a home install starts with floor protection and a planned route.",
  "jersey-shore": "For the shore we ask whether anything is going on sand or an open deck, because that changes the ballast and the weather call.",
  princeton: "For Princeton we ask for a photograph of the doorway, because the best rooms here are the oldest ones.",
  morristown: "For Morristown we ask for the venue's access window in writing, because ballroom turnarounds are scheduled to the minute.",
  "red-bank": "For Red Bank we ask whether it is riverfront or in town, because one is an outdoor install and the other is a tight street frontage.",
  edison: "For Edison we ask the room's dimensions first, because a standard span can disappear in a hall that seats hundreds.",
  "new-brunswick": "For New Brunswick we ask about the route in, because a theatre's back-of-house is built for productions rather than events.",
  "cherry-hill": "For Cherry Hill we ask for as much notice as you can give, because it sits at the far edge of the Barnegat hub's radius.",
  "atlantic-city": "For Atlantic City we ask for the venue's vendor pack early, because access on those floors is scheduled and credentialled.",
};
