import { Container, Heading, Section, Subtitle } from "components/baseStyles/CommonStyle.styled";
import { theme } from "components/baseStyles/Variables.styled";
import styled from "styled-components";

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
const PartnerSubtitle = styled(Subtitle)`
  text-align: center;
  margin-bottom: 16px;
`;
const PartnerHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 60px;
`;
const PartnerItemContainer = styled.ul`
  display: grid;
  row-gap: 20px;
  column-gap: 32px;
  grid-template-columns: 1fr;


  @media screen and (min-width: ${theme.breakpoints.tablet}){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}){
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const PartnerItem = styled.li`
max-width: 387px;
max-height: 283px;
z-index: 10;
overflow: hidden;
/* background-color: ${theme.colors.white}; */
`
const PartnerImg = styled.img`
width: 200px;
height: 58px;
object-fit: scale-down;
`
const PartnerImgWrap = styled.div`
width: 200px;
height: 58px;
`
const ItemContentContainer = styled.div`
display: block;
height: 100%;
padding: 28px;
background-color: ${theme.colors.grey};
border-radius: 4px;
box-shadow: 0px 8px 50px 0px rgba(25, 35, 44, 0.10);;
`
const ItemContentTitle = styled.p`
color: ${theme.colors.granat};
font-family: ${theme.fonts[1]};
font-size: ${theme.fontSizes.small_medium};
font-style: normal;
font-weight: 300;
line-height: 24px;
`
const ItemContent = styled(ItemContentTitle)`
color: ${theme.colors.text};
`
const BackgroundSvgVectorContainer = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
`
const BackgroundSvgVector = styled.div`
height: 25%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export { PartnerSection, PartnerContainer, PartnerHeading, PartnerSubtitle, PartnerItemContainer, PartnerItem, PartnerImg, PartnerImgWrap, ItemContentContainer, ItemContentTitle, ItemContent, BackgroundSvgVectorContainer, BackgroundSvgVector};
