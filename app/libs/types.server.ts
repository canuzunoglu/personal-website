import type { spotify } from "./spotify.server";

export type Tracks = Awaited<ReturnType<typeof spotify.getRecentTracks>>;
