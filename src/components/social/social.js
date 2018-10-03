import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Container, Icon } from './social.css';

const Social = () => (
  <Container>
    <Icon
      target="_blank"
      rel="noreferrer"
      title="Can Uzunoglu - LinkedIn"
      href="https://www.linkedin.com/in/can-uzuno%C4%9Flu-163bb223"
    >
      <FaLinkedinIn size={30} />
    </Icon>
    <Icon
      target="_blank"
      rel="noreferrer"
      title="Can Uzunoglu - Twitter"
      href="https://twitter.com/canuzunoglu"
    >
      <FaTwitter size={30} />
    </Icon>
    <Icon
      target="_blank"
      rel="noreferrer"
      title="Can Uzunoglu - Instagram"
      href="https://www.instagram.com/canuzunoglu"
    >
      <FaInstagram size={30} />
    </Icon>
    <Icon
      target="_blank"
      rel="noreferrer"
      title="Can Uzunoglu - Github"
      href="https://www.github.com/canuzunoglu"
    >
      <FaGithub size={30} />
    </Icon>
  </Container>
);

export default Social;
