import * as S from "./styles";
import { IRegister } from "../../interfaces/iRegister";
import { IUser } from "../../interfaces/iUser";
import { useState } from "react";
import { useNavigate } from "react-router";
import { reqUserRegister } from "../../services/requests";
import HeaderLandingPage from "../../components/organisms/HeaderLandingPage";
import RegisterForm from "../../components/organisms/RegisterForm/RegisterForm";

function Register() {
  const history = useNavigate();
  const [failedRegister, setFailedRegister] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const redirect = async (userLogin: IRegister) => {
    try {
      const response = (await reqUserRegister("/register", userLogin)) as IUser;
      localStorage.setItem("user", JSON.stringify(response));
      alert("Cadastro feito com sucesso"); // Editar alert
      if (response.role === "user") history("/user");
      if (response.role === "therapist") history("/therapist");
    } catch (error: any) {
      setFailedRegister(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <S.GlobalRegisterContainer>
      <S.Container>
        <HeaderLandingPage />
        <div className="main-container">
          <div className="form-container">
            <h1>Crie uma nova conta</h1>
            <RegisterForm formData={redirect} />
            {failedRegister ? <p className="errorMsg">{errorMessage}</p> : null}
          </div>
        </div>
      </S.Container>
    </S.GlobalRegisterContainer>
  );
}

export default Register;
