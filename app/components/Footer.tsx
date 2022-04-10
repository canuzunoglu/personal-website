import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex mt-12 align-center">
      <div className="flex gap-2">
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - LinkedIn"
          href="https://www.linkedin.com/in/can-uzuno%C4%9Flu-163bb223"
          className="text-slate-700 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Twitter"
          href="https://twitter.com/canuzunoglu"
          className="text-slate-700 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300"
        >
          <TwitterIcon size={20} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Instagram"
          href="https://www.instagram.com/canuzunoglu"
          className="text-slate-700 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300"
        >
          <InstagramIcon size={20} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Github"
          href="https://www.github.com/canuzunoglu"
          className="text-slate-700 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300"
        >
          <GithubIcon size={20} />
        </a>
      </div>
      <span className="ml-2 text-sm text-slate-700 dark:text-slate-400">
        ❤️ from Amsterdam
      </span>
    </footer>
  );
};

export default Footer;