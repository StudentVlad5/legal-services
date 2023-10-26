import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';
import { theme } from 'components/baseStyles/Variables.styled';
import { LinkBtn } from 'components/baseStyles/CommonStyle.styled';

export const slitOutVertical = keyframes`
  0% {
    -webkit-transform: translateZ(0) rotateY(0);
            transform: translateZ(0) rotateY(0);
    opacity: 1;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateY(87deg);
            transform: translateZ(-160px) rotateY(87deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-800px) rotateY(90deg);
            transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);

  transition: ${theme.transition[0]};
  overflow-y: scroll;

  &.is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  width: 90%;
  height: 90%;
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  padding: 30px;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.blackOpacity};
  border-radius: 5px;
  box-shadow: ${theme.colors.blackOpacity} 7px 4px 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 100px);
    margin-top: 0;
    padding: 50px;
    gap: 36px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1000px;
    max-height: 1000px;
    padding: 80px 120px;
    gap: 48px;
  }

  &.animated {
    animation: ${slitOutVertical} 0.5s ease-in both;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 20px 20px 20px 30px;

  list-style-type: circle;

  border-radius: 4px;
  background: ${theme.colors.grey};
  box-shadow: ${theme.colors.blackOpacity} 7px 4px 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 24px;
    padding: 30px 30px 30px 50px;
  }
`;

export const Item = styled.li`
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  color: ${theme.colors.text};

  &::marker {
    color: ${theme.colors.granat};
    background-color: ${theme.colors.granat};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const Connect = styled(LinkBtn)`
  color: ${theme.colors.granat};
  border: 0.5px solid ${theme.colors.red_grey};

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.granat};
    border: 0.5px solid ${theme.colors.granat};
  }
`;

export const CloseBtn = styled(MdClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;

  fill: ${theme.colors.text};
  cursor: pointer;

  & path {
    stroke: ${theme.colors.text};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    top: 40px;
    right: 40px;
    width: 24px;
    height: 24px;
  }
`;
