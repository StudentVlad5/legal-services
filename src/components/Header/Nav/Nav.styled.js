import { LinkBtn } from 'components/baseStyles/CommonStyle.styled';
import { theme } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.medium};
  text-decoration: none;
  white-space: nowrap;
  margin-top: 60px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 88px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const NavList = styled(MobileNavList)`
  display: none;
  white-space: nowrap;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 24px;
    margin: 0px;
    /* width: 100%; */
  }
`;

const NavItem = styled.a`
  cursor: pointer;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small_medium};
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
  color: ${theme.colors.text};
  transition: ${theme.transition[0]};
  &:focus,
  &:hover {
    color: ${theme.colors.granat};
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
  &.active {
    color: ${theme.colors.granat};
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
    font-weight: 700;
  }
  &:not(:first-child) {
    margin-top: 40px;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    &:not(:first-child) {
      margin-top: 60px;
    }
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    &:not(:first-child) {
      margin-top: 0px;
      margin-left: 0px;
    }
  }
`;
const Connect = styled(LinkBtn)`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 40px;
  padding: 13px;

  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  white-space: nowrap;

  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.granat};
  transition: ${theme.transition[0]};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.granat};
    border: 1px solid ${theme.colors.granat};

    & > svg path {
      fill: ${theme.colors.white};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 0px;
    margin-left: 0px;
  }
`;
export { MobileNavList, NavList, NavItem, Connect };
