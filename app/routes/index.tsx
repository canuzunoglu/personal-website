import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import type { Movie, Track } from "~/libs/types.server";
import { getLastPlayedTracks } from "~/libs/spotify.server";
import { getLastWatchedMovies } from "~/libs/letterboxd.server";
import { useLoaderData } from "@remix-run/react";
import { MusicIcon } from "~/components/icons/MusicIcon";
import { MovieIcon } from "~/components/icons/MovieIcon";

type LoaderData = {
  lastPlayedTracks: Track[];
  lastWatchedMovies: Movie[];
};

export const loader: LoaderFunction = async () => {
  const lastPlayedTracks = await getLastPlayedTracks();
  const lastWatchedMovies = await getLastWatchedMovies();

  return json<LoaderData>({
    lastPlayedTracks,
    lastWatchedMovies,
  });
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <main>
      <Header />
      <p className="mb-10 text-2xl sm:3xl">
        Hey 👋, I'm Can. I build user interfaces.
      </p>
      <section className="mb-10">
        <h2 className="mb-3 text-md sm:text-sm font-medium">Activity</h2>
        <div className="flex gap-6 flex-col">
          {data.lastPlayedTracks.length > 0 && (
            <div className="flex gap-3">
              <span className="mt-1 text-slate-600 dark:text-slate-500">
                <MusicIcon size={20} />
              </span>
              <ul className="list-none">
                {data.lastPlayedTracks.map((track) => (
                  <li key={track.link} className="mb-1">
                    <a
                      href={track.link}
                      className="text-lg sm:text-sm"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {track.title} -{" "}
                      <span className="font-semibold">{track.artist}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {data.lastWatchedMovies.length > 0 && (
            <div className="flex gap-3">
              <span className="mt-1 text-slate-600 dark:text-slate-500">
                <MovieIcon size={20} />
              </span>
              <ul className="list-none">
                {data.lastWatchedMovies.map((movie) => (
                  <li key={movie.link} className="mb-1">
                    <a
                      href={movie.link}
                      className="text-lg sm:text-sm"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {movie.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export const handle = { hydrate: false };
