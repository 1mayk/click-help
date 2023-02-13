import styled from "styled-components";

export const Container = styled.div`
  /* height: 100%; */
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

  .login-form, .register-form {
    padding-top: 10px;
  }

  h1 {
    padding-bottom: 20px;
  }

  .notAccount {
    cursor: pointer;
    padding-top: 15px;
    font-weight: 500;
    font-size: 16px;
    text-decoration: underline;
  }

  .notAccount:hover {
    color: #17a4d0;
  }

  .errorMsg {
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

  .login-btn {
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

  .login-btn:hover {
    background-color: #1e255e;
    color: white;
  }
  .login-btn:focus,
  .login-btn:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  .login-btn[disabled] {
  cursor: not-allowed;
  background-color: gray;
  color: black;

  &:hover {
    background-color: gray;
    color: black;
  }
}

`;
