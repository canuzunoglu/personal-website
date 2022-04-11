import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import React from "react";

type SocialMediaItem = {
  icon: React.FunctionComponent<{ className?: string }>;
  title: string;
  href: string;
};

const SOCIAL_MEDIA = [
  {
    title: "Can Uzunoglu - Github",
    href: "https://www.github.com/canuzunoglu",
    icon: GithubIcon,
  },
  {
    title: "Can Uzunoglu - LinkedIn",
    href: "https://www.linkedin.com/in/can-uzuno%C4%9Flu-163bb223",
    icon: LinkedinIcon,
  },
  {
    title: "Can Uzunoglu - Twitter",
    href: "https://twitter.com/canuzunoglu",
    icon: TwitterIcon,
  },
  {
    title: "Can Uzunoglu - Instagram",
    href: "https://www.instagram.com/canuzunoglu",
    icon: InstagramIcon,
  },
];

const SocialMediaButton = ({ icon, title, href }: SocialMediaItem) => {
  return (
    <a
      target="_blank"
      rel="nofollow noreferrer"
      title={title}
      href={href}
      className="transition duration-100 ease-in-out hover:-translate-y-px text-slate-700 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300 "
    >
      {React.createElement(icon, { className: "w-6 h-6 sm:w-5 sm:h-5" })}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="flex mt-12 items-center">
      <div className="flex gap-2 sm:gap-2">
        {SOCIAL_MEDIA.map((social) => (
          <SocialMediaButton key={social.href} {...social} />
        ))}
      </div>
      <span className="flex items-center ml-2 text-sm text-slate-700 dark:text-slate-400">
        ❤️ from Amsterdam
      </span>
    </footer>
  );
};

export default Footer;
