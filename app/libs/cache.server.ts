import lru from "tiny-lru";
import ms from "ms";
import type { Tracks } from "./types.server";

declare global {
  var __lruCache__: ReturnType<typeof createLruCache>;
}

const lruCache = (global.__lruCache__ = global.__lruCache__
  ? global.__lruCache__
  : createLruCache());

function createLruCache() {
  return lru<Tracks>(10, ms("10m"));
}

export { lruCache };
