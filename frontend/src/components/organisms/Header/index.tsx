import * as S from './styles';
import Logo from '../../molecules/Logo';
import Menu from '../Menu';
import Button from '../../atoms/Button';

function Header() {
  return (
    <S.Container>
      <Logo />
      <Menu />
      <Button />
    </S.Container>
  )
}

export default Header;