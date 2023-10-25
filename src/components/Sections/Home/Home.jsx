import { Title } from 'components/baseStyles/CommonStyle.styled';
import {
  Connect,
  Hero,
  HeroSection,
  TitleGroup,
  UpperTitle,
} from './Home.styled';

export const Home = () => {
  return (
    <HeroSection id="home">
      <Hero>
        <TitleGroup>
          <UpperTitle>Знаходимо</UpperTitle>
          <Title>Рішення, засновані на законі та досвіді</Title>
          <Connect href="#contact" aria-label="Зв’язатись з нами">
            Зв’язатись з нами
          </Connect>
        </TitleGroup>
      </Hero>
    </HeroSection>
  );
};
