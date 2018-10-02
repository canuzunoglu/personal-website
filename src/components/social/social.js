import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Container, Icon } from './social.css';

const Social = () => (
  <Container>
    <Icon target="_blank" href="https://twitter.com/canuzunoglu">
      <FaTwitter size={30} />
    </Icon>
    <Icon target="_blank" href="https://www.instagram.com/canuzunoglu">
      <FaInstagram size={30} />
    </Icon>
    <Icon
      target="_blank"
      href="https://www.linkedin.com/in/can-uzuno%C4%9Flu-163bb223"
    >
      <FaLinkedinIn size={30} />
    </Icon>
  </Container>
);

export default Social;
