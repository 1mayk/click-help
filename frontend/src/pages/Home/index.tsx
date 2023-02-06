import { useState } from "react";
import LandingPage from "../LandingPage";
import * as S from "../LandingPage/styles";
import Register from "../Register";
import Login from "../Login";

function Home() {
  const [logged, setLogged] = useState(false)

  return (
    <>
      {logged ? <Login /> : <S.Container><LandingPage /></S.Container>}
    </>
  );
}

export default Home;
