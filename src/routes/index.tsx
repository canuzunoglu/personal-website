import { component$ } from '@builder.io/qwik';
import {
  DocumentHead,
  routeLoader$,
} from '@builder.io/qwik-city';
import { LetterboxdIcon } from '~/components/icons/LetterboxdIcon';
import { scrapeLastWatchedMovies } from '~/libs/letterboxd';

export const useLastWatchedMovies = routeLoader$(async () => {
  return await scrapeLastWatchedMovies('canuzunoglu', 5);
});

export default component$(() => {
  const lastWatchedMovies = useLastWatchedMovies();
  return (
    <div>
      <p class="mb-10 text-2xl sm:text-3xl">
        Hey 👋, I'm Can. I build user interfaces
        <br />
        <span class="text-xl sm:3xl">
          at{' '}
          <a
            href="https://bird.com"
            target="_blank"
            rel="nofollow noreferrer"
            class="hover:text-slate-500 dark:hover:text-slate-400"
          >
            Bird
          </a>
        </span>
      </p>
      <section class="mb-10">
        <h2 class="mb-3 text-md sm:text-sm font-medium">Activity</h2>
        <div class="flex gap-6 flex-col">
          {lastWatchedMovies.value && lastWatchedMovies.value.length > 0 && (
            <div class="flex gap-3">
              <span class="mt-1 w-6 h-6 sm:w-5 sm:h-5 text-slate-600 dark:text-slate-500">
                <LetterboxdIcon />
              </span>
              <ul class="list-none">
                {lastWatchedMovies.value.map((movie) => (
                  <li key={movie.link} class="mb-1">
                    <a
                      href={movie.link}
                      class="inline-block transition duration-100 ease-in-out text-lg sm:text-sm hover:text-slate-500 hover:translate-x-0.5 dark:hover:text-slate-400"
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
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Can Uzunoglu - Front-end developer',
  meta: [
    {
      name: 'description',
      content: 'Homepage of an ui developer',
    },
  ],
};
