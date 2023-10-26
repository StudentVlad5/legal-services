import {
  Container,
  Section,
  Subtitle,
} from 'components/baseStyles/CommonStyle.styled';
import { theme } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const TeamsSection = styled(Section)`
  position: relative;
  margin-bottom: 120px;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${theme.colors.back_green};
    z-index: -1;
  }
`;

export const TeamContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamsSubtitle = styled(Subtitle)`
  margin-top: 12px;
`;

export const TeamsList = styled.ul`
  display: flex;
  flex-direction: column;

  background-color: ${theme.colors.grey};
  width: 100%;
  padding: 20px 60px;
  margin-top: 36px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding: 40px 102px;
  }
`;

export const TeamsListItem = styled.li`
  position: relative;

  &:not(:first-child) {
    margin-top: 30px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 463px;

    &:nth-child(1) {
      margin-right: 45px;
      margin-top: 0;
    }

    &:nth-child(2) {
      margin-top: 0;
    }
    &:nth-child(3) {
      margin-top: 24px;
      margin-right: 45px;
    }

    &:nth-child(4) {
      margin-top: 24px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.granat};
    top: 10px;
    left: -20px;
    border-radius: 50%;
  }
`;

export const TeamsListItemText = styled.p`
  color: ${theme.colors.text};
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
`;
