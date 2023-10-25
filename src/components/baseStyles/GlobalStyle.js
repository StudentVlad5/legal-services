import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { theme } from './Variables.styled';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Fira Sans Condensed", "Roboto Condensed", "Spectral";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  background-color: ${theme.colors.white};
  color:${theme.colors.black}
  }
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: ${theme.breakpoints.desktop_max};
    width: 100%;
    min-height: calc(100vh - 50px);
  }

//-----reset-----//
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
}

//-----modal-----//
#popup-root {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 45;

  width: 100vw;
  height: 100vh;

  opacity: 1;
  visibility: visible;
  display: flex;

  background-color: #0000006b;
  transition: opacity .3s linear 50ms, visibility .3s linear 50ms;
}

#popup-root {
  &.is-hide {
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      display: none;

      width: 0;
      height: 0;
  }
}

//-----navigation-----//
.headerNavigationItem.active {
    color: ${theme.colors.granat};
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
    font-weight: 700;
}

//-----translate-----//
.language.active {
    transform: ${theme.scale[0]};
    text-decoration: underline;
}
`;
