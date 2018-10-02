import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0;
`;

export const Icon = styled.a`
  color: black;
  display: inline-block;
  transition: transform 100ms;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;
