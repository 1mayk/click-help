import { useState } from "react";
import * as S from "./styles";
import LandingPage from "../LandingPage";
import Register from "../Register";
import Login from "../Login";

function Home() {
  const [logged, setLogged] = useState(false);

  return (
    <>
      {logged ? (
        <Login />
      ) : (
        <S.GeneralContainer>
          <LandingPage />
        </S.GeneralContainer>
      )}
    </>
  );
}

export default Home;
