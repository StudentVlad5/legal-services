import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { SectionTitle } from 'components/baseStyles/CommonStyle.styled';
import lines from 'images/svg/lines.png';

export const PracticesSectionTitle = styled(SectionTitle)`
  margin-bottom: 20px;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 60px;
  }
`;

export const PracticesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${lines});

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const PracticesItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  border-radius: 4px;
  background: ${theme.colors.grey};
  box-shadow: ${theme.colors.blackOpacity} 7px 4px 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 285px;
    height: 264px;
  }

  & > svg {
    margin-bottom: 24px;
    fill: ${theme.colors.granat};

    & path {
      stroke: ${theme.colors.granat};
      fill: ${theme.colors.granat};
    }
    & rect {
      fill: ${theme.colors.granat};
    }
  }

  &:nth-child(2n) {
    background: ${theme.colors.granat};

    & > svg {
      fill: ${theme.colors.white};
      & path {
        stroke: ${theme.colors.white};
        fill: ${theme.colors.white};
      }
      & rect {
        fill: ${theme.colors.white};
      }
    }

    & p {
      color: ${theme.colors.white};
    }

    & button {
      color: ${theme.colors.white};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    &:first-child {
      padding-left: 15px;
    }
  }
`;

export const PracticeTitle = styled.p`
  margin-bottom: 12px;

  font-family: ${theme.fonts[2]};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  text-transform: uppercase;

  color: ${theme.colors.granat};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

export const PracticeDesc = styled.p`
  margin-bottom: 14px;

  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px; /* 150% */

  color: ${theme.colors.text};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const PracticeBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  margin: auto 0 0 auto;
  padding: 0;

  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px; /* 171.429% */

  color: ${theme.colors.granat};

  border: none;
  background: transparent;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  & svg,
  path {
    fill: currentColor;
    stroke: currentColor;
  }
`;
