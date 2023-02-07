import * as S from './styles';
import Logo from '../../molecules/Logo';
import Menu from '../Menu';
import ButtonLogin from '../../atoms/ButtonLogin';

function Header() {
  return (
    <S.Container>
      <Logo />
      <Menu />
      <ButtonLogin />
    </S.Container>
  )
}

export default Header;