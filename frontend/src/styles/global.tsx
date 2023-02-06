import { createGlobalStyle } from "styled-components";
import Bkg1 from '../assets/primeira-bg.png';
import Bkg2 from '../assets/segunda-bg.png';


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #F8FDFF;
    font-family: 'Poppins', sans-serif;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  ::selection {
    background: rgb(153, 51, 255);
    color: white;
  }
`

export default GlobalStyle;