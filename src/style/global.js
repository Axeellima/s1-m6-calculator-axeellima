import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --font: 'Sofia Sans', sans-serif;
  }

  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  
  body,html {
    width: 100vw;
    height: 100vh;
    font-family: var(--font);
  }

  button {
    cursor: pointer;
  }

`;
