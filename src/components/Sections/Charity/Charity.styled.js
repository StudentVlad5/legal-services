import {
    Container,
    Section,
    Subtitle,
  } from "components/baseStyles/CommonStyle.styled";
  import { theme } from "components/baseStyles/Variables.styled";
  import styled from "styled-components";
  
  const CharitySection = styled(Section)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const CharityContainer = styled(Container)`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: row;
    background-color: ${theme.colors.grey};
    padding: 8px;
    @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 20px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 100px;
  }
  `;
    const CharityContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    padding: 20px;
`;
    const CharitySubtitle = styled(Subtitle)`
    text-align: center;
    margin-bottom: 34px;
`;
    const CharityImgContainer = styled.div`
    position: relative;
    width: 366px;
    height: 350px;
    border-radius: 4px;
    box-shadow: 0px 8px 50px 0px rgba(25, 35, 44, 0.10);
`;
    const CharityImg = styled.div`
    position: absolute;
    top: 0px;
    left: -20px;
    width: 366px;
    height: 350px;
    border-radius: 4px;
    box-shadow: 0px 8px 50px 0px rgba(25, 35, 44, 0.10);
    z-index: 10;
`;
    const CharityImgPhone = styled.div`
    position: absolute;
    top: 31px;
    width: 366px;
    height: 350px;
    background: linear-gradient(0deg, #567A7B 0%, rgba(234, 252, 241, 0.00) 100%);
    border-radius: 4px;
    box-shadow: 0px 8px 50px 0px rgba(25, 35, 44, 0.10);
    `;
    const ItemContentTitle = styled.p`
    color: ${theme.colors.granat};
    font-family: ${theme.fonts[1]};
    font-size: ${theme.fontSizes.small_medium};
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
  `;

export {
    CharitySection,
    CharityContainer,
    CharityContentContainer,
    CharitySubtitle,
    CharityImgContainer,
    CharityImg,
    CharityImgPhone,
    ItemContentTitle
  };