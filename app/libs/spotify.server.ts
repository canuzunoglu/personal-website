import { SpotifyClient } from "spotify-mini";
import { lruCache } from "./cache.server";

export const getLastPlayedTracks = async () => {
  const cashedTracks = lruCache.get("cachedTracks");

  if (cashedTracks) {
    return cashedTracks;
  }

  const recentTracks = await spotify.getRecentTracks(3);
  lruCache.set("cachedTracks", recentTracks);
  return recentTracks;
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
