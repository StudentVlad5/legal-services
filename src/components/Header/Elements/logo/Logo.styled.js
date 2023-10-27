import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'components/baseStyles/Variables.styled';
import { ReactComponent as Icon_Logo } from 'images/svg/brand_agency.svg';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 230px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 320px;
  }
`;

const Text = styled(Link)`
  color: ${theme.colors.red_grey};
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.large};
  }
`;
const SubText = styled.p`
  color: ${theme.fonts[0]};
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.87px;

  text-transform: lowercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
    letter-spacing: 3.87px;
  }
`;

const IconLogo = styled(Icon_Logo)`
  width: 25px;
  height: 25px;
  margin-right: 4px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 46px;
    height: 46px;
  }
`;

export { LogoContainer, Text, SubText, IconLogo };
