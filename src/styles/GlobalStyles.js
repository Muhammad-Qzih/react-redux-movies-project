import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Global body styles */
  body {
    margin: 0;
  }

  /* Setting background color and height for the whole page */
  .color-body {
    background-color: white;
    height: 100vh;
  }

  /* Defining font families */
  .font {
    font-family: "Almarai", sans-serif;
    font-family: "Cairo", sans-serif;
  }

  /* Setting text and background color */
  .color {
    color: #2c2f3a;
    background-color: #2c2f3a;
  }
`;

export default GlobalStyle;
