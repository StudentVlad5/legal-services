import React from 'react';
import PropTypes from 'prop-types';
import { MobileNavList, NavList, NavItem, Connect } from './Nav.styled';
import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';

const handleChangeActiveClass = e => {
  // e.preventDefault();
  const navItemList = document.querySelectorAll('.headerNavigationItem');
  document.getElementById(e.target.dataset.info).scrollIntoView();
  setTimeout(()=>window.scrollBy(0, -200),100)
  if (navItemList) {
    navItemList.forEach(it => {
      if (it.dataset.info === e.target.dataset.info) {
        it.classList.add('active');
      } else {
        it.classList.remove('active');
      }
    });
  }
};

export const MobileNav = ({ toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <MobileNavList>
      <NavItem href="#about" aria-label={t('Про нас')}   className="headerNavigationItem active"
        data-info="about"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Про нас')}
      </NavItem>
      <NavItem href="#practices" aria-label={t('Практики')}
        className="headerNavigationItem"
        data-info="practices"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Практики')}
      </NavItem>
      <NavItem href="#team" aria-label={t('Команда')}
        className="headerNavigationItem"
        data-info="team"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Команда')}
      </NavItem>
      <NavItem href="#advantages" aria-label={t('Переваги')}
        className="headerNavigationItem"
        data-info="advantages"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Переваги')}
      </NavItem>
      <NavItem href="#partners" aria-label={t('Партнери')}       className="headerNavigationItem" data-info="partners" onClick={e => {    toggleMenu(e); handleChangeActiveClass(e);}}
      >
        {t('Партнери')}
      </NavItem>
      <NavItem href="#charity" aria-label={t('Благодійність')}
        className="headerNavigationItem"
        data-info="charity"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Благодійність')}
      </NavItem>
      <Language />
      <Connect href="#contact" aria-label="Зв’язатись з нами">Зв’язатись з нами</Connect>
    </MobileNavList>
  );
};

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <NavList>
      <NavItem href="#about" aria-label={t('Про нас')}
        className="headerNavigationItem active"
        data-info="about"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Про нас')}
      </NavItem>
      <NavItem href="#practices" aria-label={t('Практики')}
        className="headerNavigationItem"
        data-info="practices"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Практики')}
      </NavItem>
      <NavItem href="#team" aria-label={t('Команда')}
        className="headerNavigationItem"
        data-info="team"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Команда')}
      </NavItem>
      <NavItem href="#advantages" aria-label={t('Переваги')}
        className="headerNavigationItem"
        data-info="advantages"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Переваги')}
      </NavItem>
      <NavItem href="#partners" aria-label={t('Партнери')}
        className="headerNavigationItem"
        data-info="partners"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Партнери')}
      </NavItem>
      <NavItem href="#charity" aria-label={t('Благодійність')}
        className="headerNavigationItem"
        data-info="charity"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Благодійність')}
      </NavItem>
      <Connect href="#contact" aria-label="Зв’язатись з нами">Зв’язатись з нами</Connect>
      <Language />
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
