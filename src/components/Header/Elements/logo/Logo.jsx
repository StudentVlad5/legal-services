import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, SubText, LogoContainer, IconLogo } from './Logo.styled';

export const Logo = () => {
  const { t } = useTranslation();

  return (
    <LogoContainer>
      <IconLogo />
      <Text to="/">
        {t('«Колегія адвокатів «Гранат»')}
        <SubText>{t('адвокатське об’єднання')}</SubText>
      </Text>
    </LogoContainer>
  );
};
