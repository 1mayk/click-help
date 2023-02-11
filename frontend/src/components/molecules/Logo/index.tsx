import LogoHero from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import * as S from "./styles";

function Logo() {
  return (
    <S.Logo>
      <Link to="/">
        <img src={LogoHero} alt="Logo Header" />
      </Link>
    </S.Logo>
  );
}

export default Logo;
