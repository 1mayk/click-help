import * as S from "./styles";
import useAppContext from "../../../hooks/useAppContext";

function MenuTherapist() {
  const { user } = useAppContext();

  return (
    <S.Container>
      <p>Saldo: R$ {Number(user.balance).toFixed(2)}</p>
    </S.Container>
  );
}

export default MenuTherapist;
