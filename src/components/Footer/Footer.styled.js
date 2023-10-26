import { LogoContainer } from 'components/Header/Header.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { theme } from 'components/baseStyles/Variables.styled';
import { ReactComponent as map } from '../../images/svg/bxs_map.svg';
import { ReactComponent as phone } from '../../images/svg/phone.svg';
import { ReactComponent as email } from '../../images/svg/email.svg';

import styled from 'styled-components';

export const Footer = styled.footer``;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 0 60px 0;
  width: 100%;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 0 80px 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 222px 120px;
    max-width: ${theme.breakpoints.desktop};
  }
`;

export const FooterLogoContainer = styled(LogoContainer)`
  width: 0;
  margin-bottom: 30px;
  display: none;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 0;
    display: flex;
  }
`;

export const FooterLogoContainer1 = styled(LogoContainer)`
  width: 0;
  margin-bottom: 30px;
  display: flex;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 0;
    display: none;
  }
`;

export const LocationList = styled.ul`
  margin-bottom: 30px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 0;
  }
`;

export const LocationListItem = styled.li`
  margin-bottom: 12px;
  &:first-child {
    display: flex;
    align-items: center;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const LocationListItemText = styled.p`
  color: ${theme.colors.text};
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  margin-left: 4px;
`;

export const ContactList = styled.ul``;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 12px;
  }
`;

export const ContactListItemLink = styled.a`
  color: ${theme.colors.text};
  margin-left: 4px;
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  text-decoration-line: underline;
`;

export const ContactListItemLinkEmail = styled(ContactListItemLink)`
  text-decoration: none;
`;

export const Map = styled(map)``;

export const Phone = styled(phone)``;

export const Email = styled(email)``;
