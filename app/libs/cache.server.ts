import lru from "tiny-lru";
import ms from "ms";
import { Tracks } from "./spotify.server";

export const recentTracksCache = lru<Tracks>(3, ms("15m"));

declare global {
  var lruCache: typeof recentTracksCache;
}

const lruCache = (global.lruCache = global.lruCache
  ? global.lruCache
  : createLruCache());

function createLruCache() {
  return lru<Tracks>(3, ms("10m"));
}

export { lruCache };
