import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className="flex mt-12 align-center">
      <div className="mb-4 flex gap-3">
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - LinkedIn"
          href="https://www.linkedin.com/in/can-uzuno%C4%9Flu-163bb223"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Twitter"
          href="https://twitter.com/canuzunoglu"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
        >
          <TwitterIcon size={20} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Instagram"
          href="https://www.instagram.com/canuzunoglu"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
        >
          <InstagramIcon size={20} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Github"
          href="https://www.github.com/canuzunoglu"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
        >
          <GithubIcon size={20} />
        </a>
      </div>
      <span className="ml-2 text-gray-700 dark:text-gray-400">
        ❤️ from Amsterdam
      </span>
    </footer>
  );
};

export default Footer;
