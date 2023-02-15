import { useState, useEffect } from "react";
import HeaderLandingPage from "../../components/organisms/HeaderLandingPage";
import SpinnerLoading from "../../components/molecules/LoadingSpinner";
import MainLandingPage from "../../components/organisms/MainLandingPage";
import * as S from "./styles";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return isLoading ? (
    <SpinnerLoading />
  ) : (
    <S.Container>
      <HeaderLandingPage />
      <MainLandingPage />
    </S.Container>
  );
}

export default LandingPage;
