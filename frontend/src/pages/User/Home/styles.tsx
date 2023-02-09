import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 90vh;
  /* align-items: center; */
  /* justify-content: start; */
  font-size: 3rem;
  padding-left: 10rem;
  padding-top: 5rem;
  flex-direction: column;

  p {
    color: #1e255e;
    font-weight: 500;
    font-size: 50px;
  }

  .icon-page {
    font-size: 35px;
    margin-right: 10px;
    margin-left: -17px;
  }

  button {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding-left: 30px;
    height: 50px;
    width: 550px;
    border-radius: 30px;
    background-color: #17a4d0;
    color: #1e255e;
    font-weight: 500;
    font-size: 22px;
    transition: all 0.25s ease-out;
  }

  button:hover {
    color: #fff;
    background-color: #17a4d0;
    box-shadow: 0px 0px 17px 0px #17a4d0;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
