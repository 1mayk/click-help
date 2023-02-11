import * as S from "./styles";
import { GeneralContainer } from "../Home/styles";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import useAppContext from "../../hooks/useAppContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ILogin } from "../../interfaces/iLogin";
import { IUser } from "../../interfaces/iUser";
import reqData from "../../services/requestJson";
import HeaderLandingPage from "../../components/organisms/HeaderLandingPage";

function Login() {
  const history = useNavigate();
  const { setLogin } = useAppContext();

  const [data, setData] = useState<IUser>({
    email: "",
    name: "",
    role: "",
    balance: 0,
  });

  async function inputStorage() {
    return localStorage.setItem("user", JSON.stringify(data));
  }

  const redirect = async (userLogin: ILogin) => {
    const response = await reqData();
    setData(response[0]); //Info do DB
    setLogin(userLogin); //Info do LoginForm
    if (userLogin.email !== data.email || userLogin.email === "") {
      return alert("Email Inválido!");
    }
    await inputStorage();
    history("/user");
  };

  return (
    <GeneralContainer>
      <S.Container>
        <HeaderLandingPage />
        <div className="main-container">
          <div className="form-container">
            <h1>Bem-vindo de volta</h1>
            <LoginForm formData={redirect} />
            {/* {
            (failedTryLogin)
            ? (
              { messageError }
              </p>
              )
              : null
            }*/}
          </div>
        </div>
      </S.Container>
    </GeneralContainer>
  );
}

export default Login;
