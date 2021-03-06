import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from './header.css';
import Title from 'components/title';

const Header = ({ title }) => (
  <Container>
    <Link to="/">
      <Title as="h1">{title}</Title>
    </Link>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
