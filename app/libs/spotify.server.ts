import { cachifyPromise } from "cachify-promise";
import ms from "ms";
import { SpotifyClient } from "spotify-mini";
import { cache } from "./cache.server";

const CACHE_KEY = "spotify-tracks";

export const spotify = new SpotifyClient({
  clientId: process.env.SPOTIFY_CLIENT_ID!,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
  refreshToken: process.env.SPOTIFY_REFERSH_TOKEN!,
});

export const getLastPlayedTracks = cachifyPromise(
  () => spotify.getRecentTracks(3),
  {
    ttl: ms("5m"),
    cacheKeyFn: () => CACHE_KEY,
    staleWhileRevalidate: true,
    cacheMap: cache,
  }
);
