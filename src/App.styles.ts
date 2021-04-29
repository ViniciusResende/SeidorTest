import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
  }

  @media(max-width: 720){
    html {
      font-size: 87.5%;
    }
  }
  
  html{
    height: 100%
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
  }

  *{
    box-sizing: border-box;
  }

`;