import { theme } from "components/baseStyles/Variables.styled";
import styled from "styled-components";

export const SelectContainerLanguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  position: relative;
  height: auto;
  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: ${theme.breakpoints.mobile_max}) {
    margin-top: 0;
  }
`;

export const LabelLanguage = styled.span`
  cursor: pointer;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.small_medium};
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
  color: ${theme.colors.text};
  margin: 2px;
  transition: ${theme.transition[0]};
  &:first-child {
  margin-left: 5px;
  };
  &:focus,
  &:hover {
    color: ${theme.colors.granat};
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
`;
