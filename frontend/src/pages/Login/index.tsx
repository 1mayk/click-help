import * as S from "./styles";
import LoginForm from "./LoginForm";
import useAppContext from "../../hooks/useAppContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ILogin } from "../../interfaces/iLogin";
import { IUser } from "../../interfaces/iUser";
import reqData from "../../services/requestJson";

function Login() {
  const history = useNavigate();
  const {setLogin} = useAppContext();

  const [data, setData] = useState<IUser>({
    email: "",
    name: "",
    balance: 0,
  });

  const redirect = async (user: ILogin) => {
    const response = await reqData();
    setData(response[0]);
    setLogin(user);
    if (data.email === user.email && user.email !== "") {
      history("/user");
    } else {
      alert("Email Inválido!")
    }
  }

  return (
    <S.Container>
      <div className="form-container">
        <h1>Bem-vindo de volta</h1>
        <LoginForm formData={redirect}/>
        {/* {
        (failedTryLogin)
        ? (
            { messageError }
          </p>
        )
        : null
        }*/}
      </div>
    </S.Container>
  );
}

export default Login;
