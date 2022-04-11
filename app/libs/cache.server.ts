import QuickLRU from "quick-lru";

declare global {
  var __cache__: QuickLRU<any, any>;
}

export const cache = (global.__cache__ = global.__cache__
  ? global.__cache__
  : new QuickLRU({ maxSize: 1000 }));
