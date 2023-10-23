import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';
import { theme } from 'components/baseStyles/Variables.styled';

const MobileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px 0px 30px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 40px 45px 0px 45px;
  }

  & a {
    margin: 0 auto;
  }
`;

const IconClose = styled(iconClose)`
  cursor: pointer;

  & > path {
    stroke: ${theme.colors.grey1};
    fill: ${theme.colors.grey1};
  }
`;

const Text = styled(Link)`
  color: ${theme.colors.red_grey};
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
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
export { MobileHeader, IconClose, Text, SubText };
