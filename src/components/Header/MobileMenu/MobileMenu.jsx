import React from 'react';
import PropTypes from 'prop-types';
import { MobileHeader, IconClose, Text, SubText } from './MobileMenu.styled';
import { MobileNav } from 'components/Header/Nav/Nav';
import { MobileNavigation } from '../Navigation/Navigation';

export const MobileMenu = ({ toggleMenu }) => {


  return (
    <>
      <MobileHeader>
        <IconClose onClick={toggleMenu} />
        <Text to="/" onClick={toggleMenu}>
          «Колегія адвокатів «Гранат»
          <SubText>адвокатське об’єднання</SubText>
        </Text>
      </MobileHeader>
      <MobileNavigation toggleMobileMenu={toggleMenu} />
      <MobileNav toggleMenu={toggleMenu} />
    </>
  );
};

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func,
};
