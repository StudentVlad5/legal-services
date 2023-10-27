import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import {
  Container,
  Subtitle,
  Section,
  SectionTitle,
} from 'components/baseStyles/CommonStyle.styled';
import linesBig from "images/svg/big_vector.svg";
import linesSmal from "images/svg/small_vector.svg";

const PartnerSection = styled(Section)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PartnerContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PartnerSectionTitle = styled(SectionTitle)`
  text-align: center;
  margin-bottom: 16px;
`;
const PartnerSubtitle = styled(Subtitle)`
  text-align: center;
  margin-bottom: 60px;
`;
const PartnerItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 20px;
  column-gap: 32px;
  justify-content: center;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
   background-image: url(${linesBig}), url(${linesSmal});
  background-repeat: no-repeat, no-repeat;
  background-position: 50% 15%, 50% 85%;
  background-size: contain, 80%;
  }
`;
const PartnerItem = styled.li`
  max-width: 300px;
  z-index: 20;
  overflow: hidden;
  align-items: stretch;
  align-content: stretch;
  padding: 4px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 350px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 350px;
  }
`;
const PartnerImg = styled.img`
  width: 200px;
  height: 58px;
  object-fit: scale-down;
`;
const PartnerImgWrap = styled.div`
  width: 200px;
  height: 58px;
`;
const ItemContentContainer = styled.div`
  display: block;
  width: 100%;
  height: 75%;
  padding: 28px;
  background-color: ${theme.colors.grey};
  border-radius: 4px;
  box-shadow: ${theme.colors.blackOpacity} 7px 4px 14px;
`;
const ItemContentTitle = styled.p`
  color: ${theme.colors.granat};
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small_medium};
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`;
const ItemContent = styled(ItemContentTitle)`
  color: ${theme.colors.text};
`;

export {
  PartnerSection,
  PartnerContainer,
  PartnerSubtitle,
  PartnerSectionTitle,
  PartnerItemContainer,
  PartnerItem,
  PartnerImg,
  PartnerImgWrap,
  ItemContentContainer,
  ItemContentTitle,
  ItemContent,
};
