import React from 'react';
import { Text, SubText, LogoContainer, IconLogo } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <IconLogo />
      <Text to="/">
        «Колегія адвокатів «Гранат»
        <SubText>адвокатське об’єднання</SubText>
      </Text>
    </LogoContainer>
  );
};
