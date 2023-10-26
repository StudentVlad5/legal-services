import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import {
  Container,
  Description,
  Section,
  TitleGroup,
} from 'components/baseStyles/CommonStyle.styled';

export const CharitySection = styled(Section)``;

export const CharityContainer = styled(Container)`
  width: calc(100vw - 20px);
  margin: 0 10px;
  padding: 28px;

  background: ${theme.colors.grey};
  box-shadow: ${theme.colors.blackOpacity} 7px 4px 14px;

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    width: calc(100vw - 60px);
    margin: 0 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: calc(100vw - 140px);
    margin: 0 70px;
    padding: 50px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: calc(100vw - 240px);
    max-width: 1200px;
    margin: 0 120px;
    padding: 100px 102px;
  }
`;

export const CharityTitleGroup = styled(TitleGroup)`
  display: ${props => (props.$mobile ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 12px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: ${props => (props.$mobile ? 'none' : 'flex')};
    gap: 16px;
    margin-top: ${props => (props.$mobile ? '0' : '51px')};
    margin-bottom: 32px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 12px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: start;
    gap: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 20px;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 215px;
  height: 205px;
  /* overflow: hidden; */

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 240px;
    height: 230px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 386px;
    height: 360px;
  }

  & > picture {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    & > img {
      border-radius: 4px;
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 193px;
  height: 185px;

  border-radius: 4px;
  background: linear-gradient(0deg, #567a7b 0%, rgba(234, 252, 241, 0) 100%);
  box-shadow: 0px 8px 50px 0px rgba(25, 35, 44, 0.1);

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 220px;
    height: 210px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 366px;
    height: 350px;
  }
`;

export const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 18px;
    width: 50%;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 25px;
    width: 60%;
  }
`;

export const DescriptionHeading = styled.div``;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 10px;
  }
`;

export const MasterLetter = styled.span`
  font-family: ${theme.fonts[1]};
  font-size: 48px;
  font-style: normal;
  font-weight: 300;
  color: ${theme.colors.text};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 58px;
    /* line-height: 120%;  */
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;

export const CharityDescription = styled(Description)`
  & span {
    color: ${theme.colors.granat};
  }
`;

export const DescriptionItalic = styled(Description)`
  position: relative;
  padding-left: 10px;
  font-style: italic;

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;

    width: 0.5px;
    height: 100%;

    background: ${theme.colors.granat};
  }

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    margin-left: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-left: 36px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-left: 56px;
  }
`;
