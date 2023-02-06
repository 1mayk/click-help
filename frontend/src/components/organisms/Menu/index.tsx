import * as S from "./styles";

function Menu() {
  return (
    <S.MenuList>
      <S.MenuItem>
        <a href="#">Sobre Nós</a>
      </S.MenuItem>
      <S.MenuItem>
        <a href="#">Serviços</a>
      </S.MenuItem>
      <S.MenuItem>
        <a href="#">Como Funciona</a>
      </S.MenuItem>
      <S.MenuItem>
        <a href="#">Contato</a>
      </S.MenuItem>
    </S.MenuList>
  );
}

export default Menu;
