import { createContext, Dispatch, SetStateAction } from "react";
import { ILogin } from "../interfaces/iLogin";

type PropsLoginContext = {
  login: ILogin;
  setLogin: Dispatch<SetStateAction<ILogin>>;
}

// Inicio o estado aplicado os valores default de cada propriedade
const INITIAL_LOGIN_STATE = {
  login: {
    email: "",
    password: ""
  },
  setLogin: () => {}
}

const loginContext = createContext<PropsLoginContext>(INITIAL_LOGIN_STATE);

export { INITIAL_LOGIN_STATE };
export default loginContext;