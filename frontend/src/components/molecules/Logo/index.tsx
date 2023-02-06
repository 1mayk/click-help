import LogoHero from '../../../assets/logo.png'
import * as S from "./styles";

function Logo() {
  return (
    <S.Logo>
      <img src={LogoHero} alt="Logo Header" />
    </S.Logo>
  );
}

export default Logo;
