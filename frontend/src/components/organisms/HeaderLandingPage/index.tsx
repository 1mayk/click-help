import * as S from './styles';
import Logo from '../../molecules/Logo';
import Menu from '../../molecules/MenuHeader';
import ButtonLogin from '../../atoms/ButtonLogin';

function HeaderLandingPage() {
  return (
    <S.Container>
      <Logo />
      <Menu />
      <ButtonLogin />
    </S.Container>
  )
}

export default HeaderLandingPage;