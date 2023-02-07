import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1110px;
  margin: auto;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    align-items: center;
    display: flex;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
.spinner{
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
