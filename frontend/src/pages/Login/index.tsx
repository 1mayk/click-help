import * as S from "./styles";
import { GeneralContainer } from "../Home/styles";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import useAppContext from "../../hooks/useAppContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ILogin } from "../../interfaces/iLogin";
import { IUser } from "../../interfaces/iUser";
import { reqLogin } from "../../services/requests";
import HeaderLandingPage from "../../components/organisms/HeaderLandingPage";

function Login() {
  const history = useNavigate();
  const { setLogin } = useAppContext();
  const [failedLogin, setFailedLogin] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const redirect = async (userLogin: ILogin) => {
    setLogin(userLogin); //Recebido do LoginForm

    try {
      const response = (await reqLogin("/login", userLogin)) as IUser;

      localStorage.setItem("user", JSON.stringify(response));
      if (response.role === "user") history("/user");
      if (response.role === "therapist") history("/therapist");
    } catch (error: any) {
      setFailedLogin(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <GeneralContainer>
      <S.Container>
        <HeaderLandingPage />
        <div className="main-container">
          <div className="form-container">
            <h1>Bem-vindo de volta</h1>
            <LoginForm formData={redirect} />
            {failedLogin ? <p className="errorMsg">{errorMessage}</p> : null}
          </div>
        </div>
      </S.Container>
    </GeneralContainer>
  );
}

export default Login;
