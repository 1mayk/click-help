import * as S from "./styles";
import * as AiIcons from "react-icons/ai";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAppContext from "../../../hooks/useAppContext";

function HomeUser() {
  const { setUser, user } = useAppContext();
  const history = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") as string);
    if (!data) {
      history("/login")
    }
    // Preciso passar pro context pq ñ consigo acessar o data no resto da paǵina
    // Escopos diferentes
    setUser(data); 
  }, []);

  return (
    <S.Container>
      <p>Bem vindo ao Click Help! {user.name}</p>
      <button>
        <AiIcons.AiFillPlayCircle className="icon-page" />
        FAÇA UMA CONSULTA
      </button>
    </S.Container>
  );
}

export default HomeUser;
