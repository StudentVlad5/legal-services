import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';

import { ReactComponent as map } from 'images/svg/bxs_map.svg';
import { ReactComponent as phone } from 'images/svg/phone.svg';
import { ReactComponent as email } from 'images/svg/email.svg';

export const Footer = styled.footer``;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 60px 30px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 80px 70px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 120px 222px 120px;
    max-width: ${theme.breakpoints.desktop};
  }
`;

export const FooterLogoContainer = styled.div`
  display: ${props => (props.$mobile ? 'flex' : 'none')};
  margin-bottom: 30px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: ${props => (props.$mobile ? 'none' : 'flex')};
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    gap: 154px;
  }
`;

export const LocationList = styled.ul`
  margin-bottom: 30px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

export const LocationListItem = styled.li`
  display: flex;
  gap: 4px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    min-width: 220px;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ContactListItemLink = styled.a`
  color: ${theme.colors.text};

  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  text-decoration-line: underline;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const LocationListItemText = styled(ContactListItemLink)`
  margin-left: 4px;
  text-decoration: none;
`;

export const ContactListItemLinkEmail = styled(ContactListItemLink)`
  text-decoration: none;
`;

export const Map = styled(map)``;

export const Phone = styled(phone)``;

export const Email = styled(email)``;
