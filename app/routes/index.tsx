import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import type { Tracks } from "~/libs/spotify.server";
import { getLastPlayedTracks } from "~/libs/spotify.server";
import { useLoaderData } from "@remix-run/react";
import { SpotifyIcon } from "../components/icons/SpotifyIcon";

type LoaderData = {
  lastPlayedTracks: Tracks;
};

export const loader: LoaderFunction = async () => {
  const lastPlayedTracks = await getLastPlayedTracks();
  return json<LoaderData>({
    lastPlayedTracks,
  });
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <main>
      <Header />
      <p className="mb-10 text-3xl">
        Hey 👋, I'm Can. I build user interfaces.
      </p>
      <section className="mb-10">
        <h2 className="mb-3 text-sm font-medium">Activity</h2>
        <div className="flex gap-3">
          <span className="mt-1 text-slate-600 dark:text-slate-500">
            <SpotifyIcon size={20} />
          </span>

          <ul className="list-none">
            {data.lastPlayedTracks.map((track) => (
              <li key={track.link}>
                <a
                  href={track.link}
                  className="text-sm"
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
      </section>
      <Footer />
    </main>
  );
}

export const handle = { hydrate: false };
