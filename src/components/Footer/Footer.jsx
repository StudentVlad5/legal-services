import { Logo } from 'components/Header/Elements/logo/Logo';
import { IconLogo } from 'components/Header/Header.styled';
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
  FooterLogoContainer1,
  LocationList,
  LocationListItem,
  LocationListItemText,
  Map,
  Phone,
} from './Footer.styled';

export const FooterComp = () => {
  return (
    <Footer id='contact'>
      <FooterContainer>
        <FooterLogoContainer1>
          {/* <IconLogoContainer> */}
            <IconLogo />
          {/* </IconLogoContainer> */}
          <Logo />
        </FooterLogoContainer1>

        <LocationList>
          <LocationListItem>
            <Map />
            <LocationListItemText>
              01001 Україна, м. Київ
              <br />
              вул. Трьохсвятительска, 5/1а
              <br />
              офіс 307
            </LocationListItemText>
          </LocationListItem>
       </LocationList>
        <FooterLogoContainer>
            <IconLogo />
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
