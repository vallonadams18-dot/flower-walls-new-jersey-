/**
 * Display-name overrides for walls whose CheckCherry name is a place we no
 * longer trade under.
 *
 * The booking link uses the numeric package ID, not the name, so renaming
 * here is safe — the customer still lands on the right product. The name in
 * CheckCherry is unchanged, so your booking system will still say "Atlanta".
 * Rename it there too if you want the two to match.
 *
 * Edit the right-hand side to change what the site calls it.
 */
export const WALL_RENAMES: Record<string, string> = {
  // package 61452 — a deep red rose wall, carried over from the Atlanta brand
  Atlanta: "Crimson Rose",
  // package 173193 — shouted in the catalogue, set in sentence case here
  "BLUE OCEAN": "Blue Ocean",
};

export const displayName = (name: string) => WALL_RENAMES[name] ?? name;
