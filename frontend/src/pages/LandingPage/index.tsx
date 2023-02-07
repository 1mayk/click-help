import { useState, useEffect } from "react";
import Header from "../../components/organisms/Header";
import SpinnerLoading from "../../components/molecules/LoadingSpinner";
import Main from "./Main";
import * as S from "./styles";

function LandingPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return isLoading ? (
    <SpinnerLoading />
  ) : (
    <S.Container>
      <Header />
      <Main />
    </S.Container>
  );
}

export default LandingPage;
