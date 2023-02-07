import * as S from "./style";
import { useNavigate } from "react-router";

function ButtonLogin() {
  const history = useNavigate()
  return <S.Container onClick={() => history('/login')}>Entrar</S.Container>;
}

export default ButtonLogin;
