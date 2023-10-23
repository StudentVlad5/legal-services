import React from 'react';
import { Nav } from 'components/Header/Nav/Nav';

import {
  Container,
  NavBlock,
  MobileContainer,
  MobileNavBlock,
} from './Navigation.styled';

export const Navigation = () => {

  return (
    <Container>
      <Nav />
      <NavBlock/>
    </Container>
  );
};

export const MobileNavigation = ({ toggleMobileMenu }) => {
  return (
    <MobileContainer>
      <Nav />
      <MobileNavBlock/>
    </MobileContainer>
  );
};
