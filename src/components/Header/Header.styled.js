import styled from 'styled-components';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { theme } from 'components/baseStyles/Variables.styled';
import { ReactComponent as Icon_Logo } from '../../images/svg/brand_agency.svg';

const HeaderSectionWrap = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 100;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ props }) =>
    props.$isscrolled === 'true' ? 'rgb(252, 249, 242)' : 'transparent'};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 30px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 60px 120px;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 330px;
`;

const IconLogo = styled(Icon_Logo)`
  width: 46px;
  height: 46px;
`;

const IconLogoContainer = styled.div`
  width: 46px;
  height: 46px;
  margin: 4px;
  border-radius: 50%;
`;

export {
  HeaderContainer,
  HeaderSectionWrap,
  LogoContainer,
  IconLogo,
  IconLogoContainer,
};
