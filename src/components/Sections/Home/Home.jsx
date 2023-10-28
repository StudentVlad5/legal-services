import { Title } from 'components/baseStyles/CommonStyle.styled';
import {
  Connect,
  Hero,
  HeroSection,
  TitleGroup,
  UpperTitle,
} from './Home.styled';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <HeroSection id="home">
      <Hero>
        <TitleGroup>
          <UpperTitle>{t('Знаходимо')}</UpperTitle>
          <Title>{t('Рішення, засновані на законі та досвіді')}</Title>
          <Connect href="#contact" aria-label={t('Зв’язатись з нами')}>
            {t('Зв’язатись з нами')}
          </Connect>
        </TitleGroup>
      </Hero>
    </HeroSection>
  );
};
