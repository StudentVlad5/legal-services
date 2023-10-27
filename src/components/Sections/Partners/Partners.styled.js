import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  TitleGroup,
} from 'components/baseStyles/CommonStyle.styled';
import lines from 'images/svg/lines.png';

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

const PartnerTitleGroup = styled(TitleGroup)`
  margin-bottom: 60px;
`;

const PartnerItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;

  background-image: url(${lines}), url(${lines}), url(${lines});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 50% 10%, 50% 50%, 50% 90%;
  background-size: contain, contain, 60%;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    row-gap: 20px;
    column-gap: 32px;
    background-image: url(${lines}), url(${lines});
    background-repeat: no-repeat, no-repeat;
    background-position: 50% 15%, 50% 85%;
    background-size: contain, 60%;
  }
`;

const PartnerItem = styled.li`
  z-index: 10;
  align-items: stretch;
  align-content: stretch;
  padding: 4px;
  overflow: hidden;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 300px;
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

// const BackgroundSvgVectorContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

// const BackgroundSvgVector = styled.div`
//   height: 25%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export {
  PartnerSection,
  PartnerContainer,
  PartnerTitleGroup,
  PartnerItemContainer,
  PartnerItem,
  PartnerImg,
  PartnerImgWrap,
  ItemContentContainer,
  ItemContentTitle,
  ItemContent,
};
