import * as S from "./styles";
import ButtonRegister from "../../../components/atoms/ButtonRegister";
import ImageBG from "../../../assets/bg-landingpage.jpg";

function Main() {  
  return (
    <main>
      <S.Container>
        <div>
          <h1>Seu auxílio terapêutico em apenas um clique!</h1>
          <h6>Profissionais certificados dosponíveis para auxílio imediato.</h6>
          <ButtonRegister />
        </div>

        <S.ColumnImage>
          <img src={ImageBG} alt="Uma Mulher Meditando" />
        </S.ColumnImage>
      </S.Container>
    </main>
  );
}

export default Main;
