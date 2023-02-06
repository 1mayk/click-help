import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    width: 50%;
  }

  h1 {
    color: #1e255e;
    font-weight: bold;
    font-size: 56px;
  }

  h6 {
    font-weight: normal;
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    margin-top: 25px;
  }
`

export const ColumnImage = styled.div`
  text-align: right;

  img {
    max-height: 60vh;
    border-radius: 50px;
  }
`