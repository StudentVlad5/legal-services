import React from 'react';
import PropTypes from 'prop-types';
import { MobileNavList, NavList, NavItem } from './Nav.styled';
import { useTranslation } from 'react-i18next';

const handleChangeActiveClass = (e) => {
  e.preventDefault();
  const navItemList = document.querySelectorAll(".headerNavigationItem");
  console.log(navItemList);
  if(navItemList){navItemList.forEach(it => {if(it.dataset.info === e.target.dataset.info){it.classList.add('active')}else{it.classList.remove('active')}})};
}



export const MobileNav = ({ toggleMenu }) => {
  const { t } = useTranslation();

  return (
    <MobileNavList>
      <NavItem to="#about" className="headerNavigationItem active" data-info="about" onClick={(e)=>{toggleMenu(e); handleChangeActiveClass(e)}}>
        {t('Про нас')}
      </NavItem>
      <NavItem to="#practics" className="headerNavigationItem" data-info="practics" onClick={(e)=>{toggleMenu(e); handleChangeActiveClass(e)}}>
        {t('Практики')}
      </NavItem>
      <NavItem to="#team" className="headerNavigationItem" data-info="team" onClick={(e)=>{toggleMenu(e); handleChangeActiveClass(e)}}>
        {t('Команда')}
      </NavItem>
      <NavItem to="#advantages" className="headerNavigationItem" data-info="advantages" onClick={(e)=>{toggleMenu(e); handleChangeActiveClass(e)}}>
        {t('Переваги')}
      </NavItem>
      <NavItem to="#partners" className="headerNavigationItem" data-info="partners" onClick={(e)=>{toggleMenu(e); handleChangeActiveClass(e)}}>
        {t('Партнери')}
      </NavItem>
      <NavItem to="#charity" className="headerNavigationItem" data-info="charity" onClick={(e)=>{toggleMenu(e); handleChangeActiveClass(e)}}>
        {t('Благодійність')}
      </NavItem>
    </MobileNavList>
  );
};

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <NavList>
      <NavItem to="#about" className="headerNavigationItem active" data-info="about" onClick={(e)=>handleChangeActiveClass(e)}>
        {t('Про нас')}
      </NavItem>
      <NavItem to="#practics" className="headerNavigationItem" data-info="practics" onClick={(e)=>handleChangeActiveClass(e)}>
        {t('Практики')}
      </NavItem>
      <NavItem to="#team" className="headerNavigationItem" data-info="team" onClick={(e)=>handleChangeActiveClass(e)}>
        {t('Команда')}
      </NavItem>
      <NavItem to="#advantages" className="headerNavigationItem" data-info="advantages" onClick={(e)=>handleChangeActiveClass(e)}>
        {t('Переваги')}
      </NavItem>
      <NavItem to="#partners" className="headerNavigationItem" data-info="partners" onClick={(e)=>handleChangeActiveClass(e)}>
        {t('Партнери')}
      </NavItem>
      <NavItem to="#charity" className="headerNavigationItem" data-info="charity" onClick={(e)=>handleChangeActiveClass(e)}>
        {t('Благодійність')}
      </NavItem>
      </NavList>
  );
};

MobileNav.propTypes = {
  toggleMenu: PropTypes.func,
};
