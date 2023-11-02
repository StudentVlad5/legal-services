import styled, { keyframes } from "styled-components";
import { MdClose } from "react-icons/md";
import { theme } from "components/baseStyles/Variables.styled";
import { LinkBtn } from "components/baseStyles/CommonStyle.styled";

export const slitOutVertical = keyframes`
  0% {
    -webkit-transform: translateZ(0) rotateY(0);
            transform: translateZ(0) rotateY(0);
    opacity: 1;
  }
  24% {
    -webkit-transform: translateZ(-160px) rotateY(88deg);
            transform: translateZ(-160px) rotateY(88deg);
    opacity: 0.7;
  }
  54% {
    -webkit-transform: translateZ(-560px) rotateY(87deg);
            transform: translateZ(-560px) rotateY(87deg);
    opacity: 0.5;
  }
  100% {
    -webkit-transform: translateZ(-800px) rotateY(90deg);
            transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
`;

export const slitInVertical = keyframes`
  0% {
    -webkit-transform: translateZ(-800px) rotateY(90deg);
            transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
  24% {
    -webkit-transform: translateZ(-560px) rotateY(88deg);
            transform: translateZ(-560px) rotateY(88deg);
    opacity: 0.5;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateY(87deg);
            transform: translateZ(-160px) rotateY(87deg);
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translateZ(0) rotateY(0);
            transform: translateZ(0) rotateY(0);
    opacity: 1;
  }
`;

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

  background: rgba(0, 0, 0, 0.5);

  transition: ${theme.transition[2]};
  overflow-y: scroll;

  &.is-hidden {
    /* opacity: 0;
    pointer-events: none;
    visibility: hidden; */
    animation: ${slitOutVertical} 1s ease both;  
    transition: ${theme.transition[2]};
  }
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  padding: 30px;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.blackOpacity};
  border-radius: 5px;
  box-shadow: ${theme.colors.blackOpacity} 7px 4px 14px;

  animation: ${slitInVertical} 1s ease both;
  transition: ${theme.transition[2]};

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

  width: 100%;
  padding: 20px 20px 20px 30px;

  border-radius: 4px;
  background: ${theme.colors.grey};
  box-shadow: ${theme.colors.blackOpacity} 7px 4px 14px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 24px;
    padding: 30px 30px 30px 50px;
  }
`;

export const Item = styled.li`
  position: relative;

  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  color: ${theme.colors.text};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);

    width: 6px;
    height: 6px;

    border-radius: 50%;
    background-color: ${theme.colors.granat};
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
