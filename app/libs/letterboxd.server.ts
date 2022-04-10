import { lruCache } from "./cache.server";

import * as cheerio from "cheerio";
import type { Movie } from "./types.server";
import ms from "ms";

const CACHE_KEY = "letterboxd-movies";

export const parseLastWatchedMovies = async (
  username: string,
  limit: number = 3
) => {
  const response = await fetch(
    `https://letterboxd.com/${username}/films/by/date/`
  );
  const text = await response.text();
  const $ = cheerio.load(text);

  let items: Movie[] = [];

  $(".film-poster")
    .slice(0, limit)
    .each((_, node) => {
      const title = $(node).find("img").attr("alt");
      const slug = $(node).attr("data-film-slug");

      if (!title || !slug) {
        throw new Error("Failed to fetch properties");
      }

      items.push({ title, link: `https://letterboxd.com${slug}` });
    });

  return items;
};

export const getLastWatchedMovies = async () => {
  const cachedMovies = lruCache.get(CACHE_KEY);

  if (cachedMovies) {
    return cachedMovies as Movie[];
  }

  try {
    const recentMovies = await parseLastWatchedMovies("canuzunoglu");
    lruCache.set(CACHE_KEY, recentMovies, { ttl: ms("1d") });
    return recentMovies;
  } catch (err) {
    // TODO: Log error
    return [];
  }
};
