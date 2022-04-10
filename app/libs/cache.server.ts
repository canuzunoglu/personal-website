import LRU from "lru-cache";
import ms from "ms";

declare global {
  var __lruCache__: ReturnType<typeof createLruCache>;
}

const lruCache = (global.__lruCache__ = global.__lruCache__
  ? global.__lruCache__
  : createLruCache());

function createLruCache() {
  return new LRU({ ttl: ms("5m"), max: 100 });
}

export { lruCache };
