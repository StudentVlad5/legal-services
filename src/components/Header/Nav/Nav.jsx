import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';
import { MobileNavList, NavList, NavItem, Connect } from './Nav.styled';
import { ReactComponent as Phone } from 'images/svg/phone.svg';


const handleChangeActiveClass = e => {
  // e.preventDefault();
  const navItemList = document.querySelectorAll('.headerNavigationItem');
  document.getElementById(e.target.dataset.info).scrollIntoView();
  setTimeout(() => window.scrollBy(0, -200), 100);
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

  const [activeItem, setActiveItem] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveSection = null;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          currentActiveSection = section.id;
          setActiveItem(currentActiveSection);
          
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MobileNavList>
      <NavItem
        href="#about"
        aria-label={t('Про нас')}
        className={activeItem === 'about' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="about"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Про нас')}
      </NavItem>
      <NavItem
        href="#practices"
        aria-label={t('Практики')}
        className={activeItem === 'practices' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="practices"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Практики')}
      </NavItem>
      <NavItem
        href="#team"
        aria-label={t('Команда')}
        className={activeItem === 'team' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="team"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Команда')}
      </NavItem>
      <NavItem
        href="#advantages"
        aria-label={t('Переваги')}
        className={activeItem === 'advantages' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="advantages"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Переваги')}
      </NavItem>
      <NavItem
        href="#partners"
        aria-label={t('Партнери')}
        className={activeItem === 'partners' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="partners"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Партнери')}
      </NavItem>
      <NavItem
        href="#charity"
        aria-label={t('Благодійність')}
        className={activeItem === 'charity' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="charity"
        onClick={e => {
          toggleMenu(e);
          handleChangeActiveClass(e);
        }}
      >
        {t('Благодійність')}
      </NavItem>
      <Connect href="tel:+380506499166" aria-label="phone">
        <Phone />
        <span>+380506499166</span>
      </Connect>
      <Language />
    </MobileNavList>
  );
};

export const Nav = () => {
  const { t } = useTranslation();
const [activeItem, setActiveItem] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveSection = null;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          currentActiveSection = section.id;
          setActiveItem(currentActiveSection);
          
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavList>
      <NavItem
        href="#about"
        aria-label={t('Про нас')}
        className={activeItem === 'about' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="about"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Про нас')}
      </NavItem>
      <NavItem
        href="#practices"
        aria-label={t('Практики')}
        className={activeItem === 'practices' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="practices"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Практики')}
      </NavItem>
      <NavItem
        href="#team"
        aria-label={t('Команда')}
        className={activeItem === 'team' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="team"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Команда')}
      </NavItem>
      <NavItem
        href="#advantages"
        aria-label={t('Переваги')}
        className={activeItem === 'advantages' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="advantages"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Переваги')}
      </NavItem>
      <NavItem
        href="#partners"
        aria-label={t('Партнери')}
        className={activeItem === 'partners' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="partners"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Партнери')}
      </NavItem>
      <NavItem
        href="#charity"
        aria-label={t('Благодійність')}
        className={activeItem === 'charity' ? "headerNavigationItem active" : "headerNavigationItem"}
        data-info="charity"
        onClick={e => handleChangeActiveClass(e)}
      >
        {t('Благодійність')}
      </NavItem>
      <Connect href="tel:+380506499166" aria-label="phone">
        <Phone /> <span>+380506499166</span>
      </Connect>
      <Language />
    </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
