import * as S from "./styles";
import useAppContext from "../../../hooks/useAppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function HomeTherapist() {
  const { setUser, user } = useAppContext();
  const history = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") as string);
    if (!data) {
      history("/login")
    }
    setUser(data); 
  }, []);

  return (
    <S.Container>
      <p>Bem Vindo! Terapeuta {user.username.split(" ")[0]}</p>
    </S.Container>
  );
}

export default HomeTherapist;
