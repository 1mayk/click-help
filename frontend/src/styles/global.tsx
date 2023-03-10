import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #F8FDFF;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  a {
    color: #1e255e;
    text-decoration: none;
    outline: none;
  }

  ::selection {
    background: #00D2C2;
    color: white;
  }
  }
`

export default GlobalStyle;