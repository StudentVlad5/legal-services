import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';

const Section = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 0 0 60px 0;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 0 80px 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 0 120px 0;
    max-width: ${theme.breakpoints.desktop};
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    padding: 0 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 70px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 120px;
    max-width: ${theme.breakpoints.desktop};
  }
`;

const Title = styled.h1`
  display: inline-block;

  font-family: ${theme.fonts[2]};
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 42px;
    line-height: normal;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$center ? 'center' : 'flex-start')};
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 16px;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts[2]};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 83.333% */
  text-transform: uppercase;
  color: ${theme.colors.text};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  color: ${theme.colors.granat};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px; /* 150% */
  color: ${props => (props.$white ? theme.colors.white : theme.colors.text)};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const LinkBtn = styled.a`
  padding: 13px;

  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.text};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  border-radius: 4px;
  border: 1px solid ${theme.colors.granat};

  cursor: pointer;
  transition: ${theme.transition[0]};

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    padding: 13px 26px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.granat};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
  }
`;

export {
  Section,
  Container,
  Title,
  TitleGroup,
  SectionTitle,
  Subtitle,
  Description,
  LinkBtn,
};
