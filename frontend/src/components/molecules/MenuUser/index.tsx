import * as S from "./styles";
import useAppContext from "../../../hooks/useAppContext";

function MenuUser() {
  const { user } = useAppContext();
  return (
    <S.Container>
      <p>Saldo: R$ {user.balance.toFixed(2)}</p>
    </S.Container>
  );
}

export default MenuUser;
