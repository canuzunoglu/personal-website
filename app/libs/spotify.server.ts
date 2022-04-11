import ms from "ms";
import { SpotifyClient } from "spotify-mini";
import { lruCache } from "./cache.server";
import type { Track } from "./types.server";

const CACHE_KEY = "spotify-tracks";

export const getLastPlayedTracks = async () => {
  const cashedTracks = lruCache.get(CACHE_KEY);

  if (cashedTracks) {
    return cashedTracks as Track[];
  }

  try {
    const recentTracks = await spotify.getRecentTracks(3);
    lruCache.set(CACHE_KEY, recentTracks, { ttl: ms("3m") });
    return recentTracks;
  } catch (err) {
    // TODO: Log error
    return [];
  }
};

declare global {
  var __spotify__: SpotifyClient;
}

const spotify = (global.__spotify__ = global.__spotify__
  ? global.__spotify__
  : createSpotifyClient());

function createSpotifyClient() {
  return new SpotifyClient({
    clientId: process.env.SPOTIFY_CLIENT_ID!,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    refreshToken: process.env.SPOTIFY_REFERSH_TOKEN!,
  });
}

export { spotify };
