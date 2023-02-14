import { IRegisterProps } from "../../../interfaces/iRegister";
import { ChangeEvent, useState } from "react";
import ShowPasswordIcon from "../../atoms/ShowPasswordIcon";
import Input from "../../atoms/Input";

function RegisterForm(props: IRegisterProps) {
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("");

  const [RegisterData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerRequeriments = () => {
    const PASSWORD_LIMIT_SIZE = 6;
    const emailRegex = /\S+@\S+\.\S+/i;
    return (
      emailRegex.test(RegisterData.email) &&
      RegisterData.password &&
      RegisterData.password.length >= PASSWORD_LIMIT_SIZE &&
      RegisterData.password === RegisterData.confirmPassword &&
      role !== ""
    );
  };

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setShowEmailMessage(name === "email" && !/\S+@\S+\.\S+/i.test(value));
    setShowPasswordMessage(
      name === "confirmPassword" && value !== RegisterData.password
    );
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="register-form">
      <label htmlFor="name-input">
        <span>Nome</span>
      </label>
      <Input
        id="name"
        type="name"
        name="username"
        placeholder="Nome Completo"
        value={RegisterData.username}
        onChange={(e) => handleChange(e)}
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
      />
      {showEmailMessage && <p className="passwordMsg">Email inválido!</p>}

      <label className="resgister-label" htmlFor="password-input">
        <span>Senha</span>
      </label>
      <div className="pssContainer">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Mínimo 6 caracteres"
          value={RegisterData.password}
          onChange={(e) => handleChange(e)}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          <ShowPasswordIcon value={showPassword} />
        </button>
      </div>

      <label className="resgister-label" htmlFor="password-input">
        <span>Confirme sua senha</span>
      </label>
      <div className="pssContainer">
        <Input
          id="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Mínimo 6 caracteres"
          value={RegisterData.confirmPassword}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <ShowPasswordIcon value={showConfirmPassword} />
        </button>
      </div>
      {showPasswordMessage && <p className="passwordMsg">Senhas diferentes</p>}

      <div className="btnsContainer">
        <button
          type="button"
          name="button-user"
          className="register-btn"
          onClick={() => setRole("user")}
        >
          Usuário
        </button>
        <button
          type="button"
          name="button-therapist"
          className="register-btn"
          onClick={() => setRole("therapist")}
        >
          Terapeuta
        </button>
      </div>
      <button
        type="button"
        name="button-register"
        className="register"
        disabled={!registerRequeriments()}
        onClick={() =>
          props.formData({
            username: RegisterData.username,
            email: RegisterData.email,
            password: RegisterData.password,
            role,
            balance: 0,
          })
        }
      >
        Cadastrar
      </button>
    </form>
  );
}

export default RegisterForm;
