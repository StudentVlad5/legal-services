import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { Section } from 'components/baseStyles/CommonStyle.styled';

import hero_mob_jpg from 'images/hero/hero-mob.jpg';
import hero_mob_2x_jpg from 'images/hero/hero-mob@2x.jpg';
import hero_mob_webp from 'images/hero/hero-mob.webp';
import hero_mob_2x_webp from 'images/hero/hero-mob@2x.webp';
import hero_tab_jpg from 'images/hero/hero-tab.jpg';
import hero_tab_2x_jpg from 'images/hero/hero-tab@2x.jpg';
import hero_tab_webp from 'images/hero/hero-tab.webp';
import hero_tab_2x_webp from 'images/hero/hero-tab@2x.webp';
import hero_desk_jpg from 'images/hero/hero-desk.jpg';
import hero_desk_2x_jpg from 'images/hero/hero-desk@2x.jpg';
import hero_desk_webp from 'images/hero/hero-desk.webp';
import hero_desk_2x_webp from 'images/hero/hero-desk@2x.webp';

export const HeroSection = styled(Section)`
  padding-top: 134px;
  padding-bottom: 0;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-top: 174px;
    padding-bottom: 0;
  }
`;

export const Hero = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 371px;

  margin: 0 auto;

  background-repeat: no-repeat;
  background-position: top left, top right;
  background-size: contain, 50vw 371px;

  background-image: linear-gradient(
      89deg,
      #750115 0.52%,
      #3f0a13 54.88%,
      rgba(54, 17, 23, 0.09) 89.37%
    ),
    -webkit-image-set(url(${hero_mob_webp}) 1x);
  background-image: linear-gradient(
      89deg,
      #750115 0.52%,
      #3f0a13 54.88%,
      rgba(54, 17, 23, 0.09) 89.37%
    ),
    url(${hero_mob_jpg});
  backdrop-filter: blur(0px);

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        89deg,
        #750115 0.52%,
        #3f0a13 54.88%,
        rgba(54, 17, 23, 0.09) 89.37%
      ),
      -webkit-image-set(url(${hero_mob_2x_webp}) 2x);
    background-image: linear-gradient(
        89deg,
        #750115 0.52%,
        #3f0a13 54.88%,
        rgba(54, 17, 23, 0.09) 89.37%
      ),
      url(${hero_mob_2x_jpg});
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* max-width: ${theme.breakpoints.tablet}; */
    height: 494px;
    background-size: contain, 50vw 494px;
    background-image: linear-gradient(
        89deg,
        #750115 0.52%,
        #3f0a13 54.88%,
        rgba(54, 17, 23, 0.09) 89.37%
      ),
      -webkit-image-set(url(${hero_tab_webp}) 1x);
    background-image: linear-gradient(
        89deg,
        #750115 0.52%,
        #3f0a13 54.88%,
        rgba(54, 17, 23, 0.09) 89.37%
      ),
      url(${hero_tab_jpg});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          89deg,
          #750115 0.52%,
          #3f0a13 54.88%,
          rgba(54, 17, 23, 0.09) 89.37%
        ),
        -webkit-image-set(url(${hero_tab_2x_webp}) 2x);
      background-image: linear-gradient(
          89deg,
          #750115 0.52%,
          #3f0a13 54.88%,
          rgba(54, 17, 23, 0.09) 89.37%
        ),
        url(${hero_tab_2x_jpg});
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: ${theme.breakpoints.desktop};
    height: 658px;
    background-size: contain;
    background-image: linear-gradient(
        89deg,
        #750115 0.52%,
        #3f0a13 54.88%,
        rgba(54, 17, 23, 0.09) 89.37%
      ),
      -webkit-image-set(url(${hero_desk_webp}) 1x);
    background-image: linear-gradient(
        89deg,
        #750115 0.52%,
        #3f0a13 54.88%,
        rgba(54, 17, 23, 0.09) 89.37%
      ),
      url(${hero_desk_jpg});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          89deg,
          #750115 0.52%,
          #3f0a13 54.88%,
          rgba(54, 17, 23, 0.09) 89.37%
        ),
        -webkit-image-set(url(${hero_desk_2x_webp}) 2x);
      background-image: linear-gradient(
          89deg,
          #750115 0.52%,
          #3f0a13 54.88%,
          rgba(54, 17, 23, 0.09) 89.37%
        ),
        url(${hero_desk_2x_jpg});
    }
  }
`;

export const TitleGroup = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  width: 45%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 40px;
    left: 50px;
    gap: 12px;
    max-width: 590px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    top: 101px;
    left: 120px;
    gap: 16px;
  }
`;

export const UpperTitle = styled.p`
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${theme.colors.white};
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 32px;
  }
`;

export const Connect = styled.a`
  margin-top: 11px;
  padding: 13px;

  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.white};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  border-radius: 4px;
  border: 1px solid ${theme.colors.white};
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    padding: 13px 26px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;
