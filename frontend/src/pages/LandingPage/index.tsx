import { useState, useEffect } from "react";
import Header from "../../components/organisms/Header";
import Main from "./Main";
import * as S from "./styles";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return isLoading ? (
    <S.SpinnerContainer>
      <div className="spinner"></div>
    </S.SpinnerContainer>
  ) : (
    <S.Container>
      <Header />
      <Main />
    </S.Container>
  );
}

export default LandingPage;
