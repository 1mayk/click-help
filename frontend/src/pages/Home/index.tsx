import { useState } from "react";
import * as S from "./styles";
import LandingPage from "../LandingPage";
import Register from "../Register";
import Login from "../Login";

/*
    REFATORAÇÃO:
    - Está logado? Vai direto pra page de usuário ou terapeuta
    - Não está? Vai para a landing page
*/

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
