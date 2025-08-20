import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'gilroy-bold';
    src: url('/src/assets/fonts/Gilroy-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'gilroy-medium';
    src: url('/src/assets/fonts/Gilroy-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'gilroy-regular';
    src: url('/src/assets/fonts/Gilroy-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'gilroy-heavy';
    src: url('/src/assets/fonts/Gilroy-Heavy.ttf') format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'gilroy-regular', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;