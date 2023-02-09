import * as S from "./styles";
import * as AiIcons from "react-icons/ai";

function HomeUser() {
  return (
    <S.Container>
      <p>Bem vindo ao Click Help!</p>
      <button>
        <AiIcons.AiFillPlayCircle className="icon-page" />
        FAÇA UMA CONSULTA
      </button>
    </S.Container>
  );
}

export default HomeUser;
