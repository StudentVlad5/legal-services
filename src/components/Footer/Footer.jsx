import React from 'react';
import { Logo } from 'components/Header/Elements/logo/Logo';
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
  Wrapper,
} from './Footer.styled';
import { useTranslation } from 'react-i18next';

export const FooterComp = () => {
  const { t } = useTranslation();

  return (
    <Footer id="contact">
      <FooterContainer>
        <FooterLogoContainer $mobile>
          <Logo />
        </FooterLogoContainer>
        <Wrapper>
          <LocationList>
            <LocationListItem>
              <Map />
              <LocationListItemText
                href="https://maps.app.goo.gl/8QTj3SRQvAVsL3VL8"
                aria-label="address"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('01001 Україна, м. Київ')}
                <br />
                {t("вул. Трьохсвятительска, 5/1а")}
                <br />
                {t("офіс 307")}
              </LocationListItemText>
            </LocationListItem>
          </LocationList>

          <FooterLogoContainer>
            <Logo />
          </FooterLogoContainer>

          <ContactList>
            <ContactListItem>
              <Phone />
              <ContactListItemLink href="tel:+380506499166" aria-label="phone">
                +380506499166
              </ContactListItemLink>
            </ContactListItem>
            <ContactListItem>
              <Email />
              <ContactListItemLinkEmail
                href="mailto:advgarnet@gmail.com"
                aria-label="email"
              >
                advgarnet@gmail.com
              </ContactListItemLinkEmail>
            </ContactListItem>
          </ContactList>
        </Wrapper>
      </FooterContainer>
    </Footer>
  );
};
