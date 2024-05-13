import { component$, Slot } from '@builder.io/qwik';
import { GithubIcon } from './icons/GithubIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { TwitterIcon } from './icons/TwitterIcon';

type SocialMediaItem = {
  title: string;
  href: string;
};

export const SocialMediaLink = component$(
  ({ title, href }: SocialMediaItem) => {
    return (
      <a
        target="_blank"
        rel="nofollow noreferrer"
        title={title}
        href={href}
        class="transition duration-100 ease-in-out hover:-translate-y-px text-slate-700 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300 "
      >
        <div class="w-7 h-7 sm:w-6 sm:h-6">
          <Slot />
        </div>
      </a>
    );
  }
);

export const Footer = component$(() => {
  return (
    <footer class="flex mt-12 items-center">
      <div class="flex gap-2 sm:gap-3">
        <SocialMediaLink
          title="Can Uzunoglu - Github"
          href="https://www.github.com/canuzunoglu"
        >
          <GithubIcon class="w-full" />
        </SocialMediaLink>
        <SocialMediaLink
          title="Can Uzunoglu - LinkedIn"
          href="https://www.linkedin.com/in/can-uzuno%C4%9Flu-163bb223"
        >
          <LinkedinIcon class="w-full" />
        </SocialMediaLink>
        <SocialMediaLink
          title="Can Uzunoglu - Twitter"
          href="https://twitter.com/canuzunoglu"
        >
          <TwitterIcon class="w-full" />
        </SocialMediaLink>
        <SocialMediaLink
          title="Can Uzunoglu - Instagram"
          href="https://www.instagram.com/canuzunoglu"
        >
          <InstagramIcon class="w-full" />
        </SocialMediaLink>
      </div>
      <span class="flex items-center ml-2 text-sm text-slate-700 dark:text-slate-400">
        ❤️ from Amsterdam
      </span>
    </footer>
  );
});
