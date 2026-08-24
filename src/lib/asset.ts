/** Prefixes local public/ asset paths with the build's basePath (the GitHub
 *  Pages preview serves from /<repo>/; production serves from the root).
 *  Raw <img src> does not get basePath applied automatically — next/link
 *  does, static files do not. */
export const asset = (p: string) => `${process.env.BASE_PATH || ""}${p}`;
