import { GitHub, Instagram, Twitter, Linkedin } from 'react-feather';

const Footer = () => {
  return (
    <footer className="mt-6">
      <span className="dark:text-gray-400 text-gray-700">
        {' '}
        ❤️ &nbsp; from Amsterdam
      </span>
      <div className="flex gap-3 mt-4">
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - LinkedIn"
          href="https://www.linkedin.com/in/can-uzuno%C4%9Flu-163bb223"
          className="dark:text-gray-300 dark:hover:text-gray-200 text-gray-600 hover:text-gray-800"
        >
          <Linkedin size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Twitter"
          href="https://twitter.com/canuzunoglu"
          className="dark:text-gray-300 dark:hover:text-gray-200 text-gray-600 hover:text-gray-800"
        >
          <Twitter size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Instagram"
          href="https://www.instagram.com/canuzunoglu"
          className="dark:text-gray-300 dark:hover:text-gray-200 text-gray-600 hover:text-gray-800"
        >
          <Instagram size={24} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          title="Can Uzunoglu - Github"
          href="https://www.github.com/canuzunoglu"
          className="dark:text-gray-300 dark:hover:text-gray-200 text-gray-600 hover:text-gray-800"
        >
          <GitHub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
