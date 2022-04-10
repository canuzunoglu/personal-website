import type { spotify } from "./spotify.server";

export type Track = Awaited<ReturnType<typeof spotify.getRecentTracks>>[number];

export type Movie = {
  title: string;
  link: string;
};
