import React from 'react';
import PropTypes from 'prop-types';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { useTranslation } from 'react-i18next';

export const MobileNav = ({ toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <MobileNavList>
      <NavItem to="#about" onClick={toggleMenu}>
        {t('Про нас')}
      </NavItem>
      <NavItem to="#team" onClick={toggleMenu}>
        {t('Практики')}
      </NavItem>
      <NavItem to="#team" onClick={toggleMenu}>
        {t('Команда')}
      </NavItem>
      <NavItem to="#practics" onClick={toggleMenu}>
        {t('Переваги')}
      </NavItem>
      <NavItem to="#contacts" onClick={toggleMenu}>
        {t('Партнери')}
      </NavItem>
      <NavItem to="#contacts" onClick={toggleMenu}>
        {t('Благодійність')}
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <NavList>
      <NavItem className="headerNavigationItem"  to="#about" >
        {t('Про нас')}
      </NavItem>
      <NavItem to="#team" >
        {t('Практики')}
      </NavItem>
      <NavItem to="#team" >
        {t('Команда')}
      </NavItem>
      <NavItem to="#practics">
        {t('Переваги')}
      </NavItem>
      <NavItem to="#contacts">
        {t('Партнери')}
      </NavItem>
      <NavItem to="#contacts" >
        {t('Благодійність')}
      </NavItem>
      </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
