import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import type { Tracks } from "~/libs/spotify.server";
import { getLastPlayedTracks } from "~/libs/spotify.server";
import { useLoaderData } from "@remix-run/react";
import { Icon } from "@iconify/react";

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
        <h3 className="text-sm font-medium text-slate-300 mb-3">Activity</h3>
        <div className="flex gap-3">
          <div className=" text-slate-300">
            <Icon icon="simple-icons:spotify" width={20} height={20} />
          </div>
          <ul>
            {data.lastPlayedTracks.map((track) => (
              <li key={track.link}>
                <a
                  href={track.link}
                  className="block text-sm text-slate-400"
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

export const handle = { hydrate: true };
