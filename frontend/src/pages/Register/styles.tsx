import styled from "styled-components";
import Bkg1 from "../../assets/primeira-bg.png";
import Bkg2 from "../../assets/segunda-bg.png";

export const GlobalRegisterContainer = styled.div`
  background: url(${Bkg1}) no-repeat 1010px, url(${Bkg2}) no-repeat 931px;
  background-size: cover;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: auto;
  display: flex;
  flex-direction: column;

  .main-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
    margin-bottom: 50px;
  }

  .form-container,
  .login-form,
  .register-form {
    display: flex;
    text-align: center;
    max-width: 350px;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }

  .login-form,
  .register-form {
    padding-top: 10px;
  }

  h1 {
    padding-bottom: 20px;
  }

  .errorMsg {
    margin-top: 15px;
    font-weight: 500;
    color: red;
  }

  .passwordMsg {
    font-size: 16px;
    color: red;
  }

  label {
    text-align: left;
    padding: 0.25rem 0;
  }

  input {
    margin: 0.3rem 0;
    padding: 0.7rem;
    border: 1px solid black;
    border-radius: 8px;
    font-size: 16px;
  }

  .btnsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .register-btn {
    width: 49%;
    margin-top: 0.45rem;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: #17a4d0;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  .register-btn:hover {
    background-color: #1e255e;
    color: white;
  }
  .register-btn:focus,
  .register-btn:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
    background-color: #1e255e;
    color: white;
  }

  .register {
    margin-top: 0.45rem;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    background-color: #17a4d0;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  .register:hover {
    background-color: #1e255e;
    color: white;
  }
  .register:focus,
  .register:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .register[disabled] {
    cursor: not-allowed;
    background-color: gray;
    color: black;

    &:hover {
      background-color: gray;
      color: black;
    }
  }

  .pssContainer {
    display: flex;
    flex-direction: column;
  }
`;
