import * as S from "./styles";
import { IRegister } from "../../interfaces/iRegister";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import HeaderLandingPage from "../../components/organisms/HeaderLandingPage";
import Input from "../../components/atoms/Input";

function Register() {
  const history = useNavigate();

  const [RegisterData, setRegisterData] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prevState: IRegister) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <S.GlobalRegisterContainer>
      <S.Container>
        <HeaderLandingPage />
        <div className="main-container">
          <div className="form-container">
            <h1>Crie uma nova conta</h1>
            <form className="register-form">
              <label htmlFor="name-input">
                <span>Nome</span>
              </label>
              <Input
                id="name"
                type="name"
                name="name"
                placeholder="Nome Completo"
                value={RegisterData.name}
                onChange={(e) => handleChange(e)}
                //data-testid="common_register__input-name"
              />

              <label htmlFor="email-input">
                <span>Email</span>
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="email@email.com"
                value={RegisterData.email}
                onChange={(e) => handleChange(e)}
                // data-testid="common_register__input-email"
              />

              <label className="resgister-label" htmlFor="password-input">
                <span>Senha</span>
              </label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="*********"
                value={RegisterData.password}
                onChange={(e) => handleChange(e)}
                // data-testid="common_register__input-password"
              />

              <button
                type="button"
                name="button-user"
                className="register-btn"
                // disabled={ !loginRequeriments() }
                // onClick={ () => register() }
                // data-testid="common_register__button-register"
                >
                Usuário
              </button>
              <button
                type="button"
                name="button-therapist"
                className="register-btn"
                // disabled={ !loginRequeriments() }
                // onClick={ () => register() }
                // data-testid="common_register__button-register"
              >
                Terapeuta
              </button>
            </form>
          </div>
        </div>
      </S.Container>
      </S.GlobalRegisterContainer>
  );
}

export default Register;
