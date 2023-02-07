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
    text-decoration: none;
    outline: none;
  }

  ::selection {
    background: rgb(153, 51, 255);
    color: white;
  }

  .user_home, .therapist_home {
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
`

export default GlobalStyle;