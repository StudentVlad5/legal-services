import React, { useEffect, useState } from 'react';
import { Navigation } from 'components/Header/Navigation/Navigation';
import { Logo } from './Elements/logo/Logo';
import { Menu } from './Elements/menu/Menu';
import {
  HeaderContainer,
  HeaderSectionWrap,
  IconLogo,
  IconLogoContainer,
  LogoContainer,
} from './Header.styled';

export const HeaderComp = () => {
  const [isscrolled, setIsScrolled] = useState('false');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled('true');
      } else {
        setIsScrolled('false');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderSectionWrap props={isscrolled}>
      <HeaderContainer>
        <LogoContainer>
          <IconLogoContainer>
            <IconLogo />
          </IconLogoContainer>
          <Logo />
        </LogoContainer>
        <Menu />
        <Navigation />
      </HeaderContainer>
    </HeaderSectionWrap>
  );
};
