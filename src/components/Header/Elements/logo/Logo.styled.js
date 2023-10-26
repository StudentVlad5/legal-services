import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from 'components/baseStyles/Variables.styled';

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
  letter-spacing: 3.87px;
  text-transform: lowercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.medium};
  }
`;

export { Text, SubText };
