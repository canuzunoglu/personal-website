import * as cheerio from 'cheerio';

export const scapeLastWatchedMovies = async (
  username: string,
  limit: number = 3
) => {
  const response = await fetch(
    `https://letterboxd.com/${username}/films/by/date`
  );

  const text = await response.text();
  const $ = cheerio.load(text);

  return $('.film-poster')
    .slice(0, limit)
    .map((_, node) => {
      const title = $(node).find('img').attr('alt');
      const slug = $(node).attr('data-film-slug');

      return { title, link: `https://letterboxd.com${slug}` };
    })
    .get();
};
