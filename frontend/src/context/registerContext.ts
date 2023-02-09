import { createContext, Dispatch, SetStateAction } from "react";
import { IRegister } from "../interfaces/iRegister";

type PropsRegisterContext = {
  register: IRegister;
  setRegister: Dispatch<SetStateAction<IRegister>>;
};

const INITIAL_REGISTER_STATE = {
  register: {
    email: "",
    password: "",
    name: "",
  },
  setRegister: () => {},
};

const registerContext = createContext<PropsRegisterContext>(
  INITIAL_REGISTER_STATE
);

export { INITIAL_REGISTER_STATE };
export default registerContext;
