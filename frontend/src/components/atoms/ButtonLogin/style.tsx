import styled from "styled-components";

export const Container = styled.button`
  width: 130px;
  height: 45px;
  border: 1px solid #17A4D0;
  border-radius: 16px;
  color: #17a4d0;
  font-size: 15px;
  margin-left: 25px;
  box-shadow: 0px 0px 17px -8px transparent;
  transition: all 0.25s ease-out;

  &:hover {
    color: #fff;
    background-color: #17a4d0;
    box-shadow: 0px 0px 17px 0px #17a4d0;
  }

`