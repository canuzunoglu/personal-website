import { SpotifyClient } from "spotify-mini";
import { lruCache } from "./cache.server";

let spotify: SpotifyClient;

const createClient = () => {
  return new SpotifyClient({
    clientId: process.env.SPOTIFY_CLIENT_ID!,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    refreshToken: process.env.SPOTIFY_REFERSH_TOKEN!,
  });
};

export type Tracks = Awaited<ReturnType<typeof spotify.getRecentTracks>>;

export const getLastPlayedTracks = async () => {
  const getCashedTracks = lruCache.get("cachedTracks");

  if (getCashedTracks) {
    return getCashedTracks;
  }

  const tracks = await spotify.getRecentTracks(3);
  lruCache.set("cachedTracks", tracks);
  return tracks;
};

declare global {
  var __spotify__: SpotifyClient;
}

if (process.env.NODE_ENV === "production") {
  spotify = createClient();
} else {
  if (!global.__spotify__) {
    global.__spotify__ = createClient();
  }
  spotify = global.__spotify__;
}

export { spotify };
