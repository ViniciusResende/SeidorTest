import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @media(min-width: 1600px){
    html {
      font-size: 20px;
    }
  }
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
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root {
  --white: #fff;
  --ice: #EFF4F9;

  --gray-50: #f7f8fa;
  --gray-100: #e6e8eb;
  --gray-200: #afb2b1;
  --gray-500: #808080;
  --gray-800: #494d4b;

  --red-50: #ffe8e8;
  --red-500: #ff0808;

  --green-50: #ceffcc;

  --purple-300: #9f75ff;
  --purple-400: #9164fa;
  --purple-500: #8257e5;
  --purple-800: #6f48c9;

  --dark-purple: #1c1233;
}

body {
  background: var(--gray-50);
}

body,
input,
textarea,
button {
  font: 500 1rem Inter, sans-serif;
  color: var(--gray-500);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  font-family: Lexend, sans-serif;
  color: var(--gray-800);
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}
`;