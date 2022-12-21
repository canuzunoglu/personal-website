import * as cheerio from "cheerio";
import ms from "ms";
import { cachifyPromise } from "cachify-promise";
import { cache } from "./cache";


const CACHE_KEY = "letterboxd-movies";

const scapeLastWatchedMovies = async (username: string, limit: number = 3) => {
  const response = await fetch(
    `https://letterboxd.com/${username}/films/by/date`
  );
  const text = await response.text();
  const $ = cheerio.load(text);

 const movies = $(".film-poster")
    .slice(0, limit)
    .map((_, node) => {
      const title = $(node).find("img").attr("alt");
      const slug = $(node).attr("data-film-slug");


      return ({ title, link: `https://letterboxd.com${slug}` });
    }).get()

  return movies;
};

export const getLastWatchedMovies = cachifyPromise(
  () => scapeLastWatchedMovies("canuzunoglu"),
  {
    ttl: ms("1d"),
    cacheKeyFn: () => CACHE_KEY,
    staleWhileRevalidate: true,
    cacheMap: cache,
  }
);
