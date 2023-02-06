import { ILogin } from "../../interfaces/iLogin";
import { ChangeEvent, useState } from "react";
import Input from "../../components/atoms/Input";

function Login() {
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
    <div className="form-container">
      <h1>Login</h1>
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
          // data-testid="common_login__input-email"
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
          // data-testid="common_login__input-password"
        />
        <button
          type="button"
          name="button"
          // disabled={ !loginRequeriments() }
          // onClick={ () => login() }
          // data-testid="common_login__button-login"
        >
          Entrar
        </button>
        <button
          type="button"
          name="button"
          // onClick={ () => history('/register') }
          // data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      {/* {
      (failedTryLogin)
        ? (
          <p data-testid="common_login__element-invalid-email">
            { messageError }
          </p>
        )
        : null
    } */}
    </div>
  );
}

export default Login;
