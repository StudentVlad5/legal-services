import { Logo } from 'components/Header/Elements/logo/Logo';
import {
  IconLogo,
  IconLogoContainer,
  LogoContainer,
} from 'components/Header/Header.styled';
import React from 'react';
import {
  ContactList,
  ContactListItem,
  ContactListItemLink,
  ContactListItemLinkEmail,
  Email,
  Footer,
  FooterContainer,
  FooterLogoContainer,
  LocationList,
  LocationListItem,
  LocationListItemText,
  Map,
  Phone,
} from './Footer.styled';

export const FooterComp = () => {
  return (
    <Footer>
      <FooterContainer>
        <LocationList>
          <LocationListItem>
            <Map />
            <LocationListItemText>
          
              01001 Україна, м. Київ
            </LocationListItemText>
          </LocationListItem>

          <LocationListItem>
            <LocationListItemText>
              вул. Трьохсвятительска, 5/1а
            </LocationListItemText>
          </LocationListItem>

          <LocationListItem> <LocationListItemText> офіс 307 </LocationListItemText></LocationListItem>
        </LocationList>

        <FooterLogoContainer>
          <IconLogoContainer>
            <IconLogo />
          </IconLogoContainer>
          <Logo />
        </FooterLogoContainer>

        <ContactList>
          <ContactListItem>
            <Phone />
            <ContactListItemLink href="tel:+380506499166">
              +380506499166
            </ContactListItemLink>
          </ContactListItem>
          <ContactListItem>
            <Email />
            <ContactListItemLinkEmail href="mailto:advgarnet@gmail.com">
              advgarnet@gmail.com
            </ContactListItemLinkEmail>
          </ContactListItem>
        </ContactList>
      </FooterContainer>
    </Footer>
  );
};
