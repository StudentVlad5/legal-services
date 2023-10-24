import { theme } from 'components/baseStyles/Variables.styled';
import styled, { keyframes } from 'styled-components';

const fadeInTopAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SelectContainerLanguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  position: relative;
  /* top: 20px;
  right: 90px;
  z-index: 15; */
  height: auto;

  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    /* top: 27px;
    right: 100px; */
  }
`;

export const SelectLanguage = styled.input`
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
`;
