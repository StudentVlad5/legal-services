import React,{ useEffect, useState } from "react";
import { Navigation } from 'components/Header/Navigation/Navigation';
import { Logo } from './Elements/logo/Logo';
import { Menu } from './Elements/menu/Menu';
import {
  HeaderContainer,
  HeaderSectionWrap,
  IconLogo,
  IconLogoContainer
} from './Header.styled';


export const HeaderComp = () => {
 
    const [isScrolled, setIsScrolled] = useState(false);

  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <HeaderSectionWrap isScrolled={isScrolled}>
        <HeaderContainer>
          <IconLogoContainer>
            <IconLogo/>
          </IconLogoContainer>
          <Logo />
          <Menu />
          {/* <Language /> */}
          <Navigation />
        </HeaderContainer>
      </HeaderSectionWrap>
    );
  };
