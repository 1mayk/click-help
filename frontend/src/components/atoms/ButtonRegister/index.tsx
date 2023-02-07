import * as S from "./styles";
import { useNavigate } from "react-router";

function ButtonRegister() {
  const history = useNavigate();
  return (
    <S.Container onClick={() => history("/register")}>Começar</S.Container>
  );
}

export default ButtonRegister;
