import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
  padding-top: 30px;

  .form-container, .login-form, .register-form {
  display: flex;
  flex-direction: column;
}

h1 {
  padding-bottom: 20px;
}

p {
  cursor: pointer;
  padding-top: 15px;
  font-weight: 500;
  font-size: 16px;
  text-decoration: underline;
}

p:hover {
  color: #17a4d0;
}

label {
  text-align: left;
  padding: 0.25rem 0;
}

input {
  margin: 0.3rem 0;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 18px;
}

button {
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

button:hover {
  background-color: #1e255e;
  color: white;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

`