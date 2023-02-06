import { IRegister } from "../../interfaces/iRegister";
import { ChangeEvent, useState } from "react";
import Input from "../../components/atoms/Input";

function Register() {
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
    <div className="form-container">
      <h1>Cadastro</h1>
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
          // disabled={ !loginRequeriments() }
          // onClick={ () => register() }
          // data-testid="common_register__button-register"
        >
          Usuário
        </button>
        <button
          type="button"
          name="button-therapist"
          // disabled={ !loginRequeriments() }
          // onClick={ () => register() }
          // data-testid="common_register__button-register"
        >
          Terapeuta
        </button>
      </form>
    </div>
  );
}

export default Register;
