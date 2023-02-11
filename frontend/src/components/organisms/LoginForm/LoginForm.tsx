import { ILogin } from "../../../interfaces/iLogin";
import { ILoginProps } from "../../../interfaces/iLogin";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../atoms/Input";

function LoginForm(props: ILoginProps) {
  const history = useNavigate();

  const [LoginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setLoginData((prevState: ILogin) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="login-form">
      <label htmlFor="email-input">
        <span>Email</span>
      </label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="email@email.com"
        value={LoginData.email}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="email-input">
        <span>Senha</span>
      </label>
      <Input
        id="password"
        type="password"
        name="password"
        placeholder="**********"
        value={LoginData.password}
        onChange={(e) => handleChange(e)}
      />
      <button
        type="button"
        name="button"
        onClick={() => props.formData(LoginData)}
        className="login-btn"
        // disabled={ !loginRequeriments() }
      >
        Entrar
      </button>
      <p onClick={() => history("/register")}>
        Ainda não tenho conta
      </p>
    </form>
  );
}

export default LoginForm;
