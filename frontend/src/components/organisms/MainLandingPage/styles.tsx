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
    font-size: 45px;
  }

  h6 {
    font-weight: normal;
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    margin-top: 15px;
  }
`

export const ColumnImage = styled.div`
  text-align: center;

  img {
    margin-top: -35px;
    max-height: 60vh;
    border-radius: 50px;
  }
`