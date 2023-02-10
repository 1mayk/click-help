import { createContext, Dispatch, SetStateAction } from "react";
import { IUser } from "../interfaces/iUser";

// Crio as props do context, contendo as interfaces das propriedades
type PropsUserContext = {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

// Inicio o estado aplicado os valores default de cada propriedade
const INITIAL_USER_STATE = {
  user: {
    name: "",
    email: "",
    role: "",
    balance: 0
    // token: ""
  },
  setUser: () => {}
}

// Passo tudo pra context
const userContext = createContext<PropsUserContext>(INITIAL_USER_STATE);

export { INITIAL_USER_STATE };
export default userContext;