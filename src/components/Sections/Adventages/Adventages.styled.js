import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import {
  Container,
  Section,
  SectionTitle,
} from 'components/baseStyles/CommonStyle.styled';
import lines from 'images/svg/lines.png';

const AdvantageSection = styled(Section)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AdvantageContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AdvantageSectionTitle = styled(SectionTitle)`
  text-align: center;
  margin-bottom: 60px;
`;

const AdvantageItemContainer = styled.ul`
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

const AdvantageItem = styled.div`
  width: 100%;
  height: 80%;
`;

const AdvantageItemWrap = styled.li`
  max-width: 300px;
  z-index: 10;
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

const ItemContentContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
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
  text-align: center;
  min-height: 48px;
  margin-bottom: 4px;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    min-height: auto;
    margin-bottom: 24px;
  }
`;

const NumberOfItem = styled.div`
  display: flex;
  width: 24px;
  height: 36px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  float: left;
  margin: 6px 16px 6px 0;
  color: ${theme.colors.granat};
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small_medium};
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const ItemContent = styled(ItemContentTitle)`
  color: ${theme.colors.text};
  text-align: start;
`;

export {
  AdvantageSection,
  AdvantageContainer,
  AdvantageSectionTitle,
  AdvantageItemContainer,
  AdvantageItem,
  ItemContentContainer,
  ItemContentTitle,
  ItemContent,
  NumberOfItem,
  AdvantageItemWrap,
};
