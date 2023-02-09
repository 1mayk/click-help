import { useMemo, useState } from "react";
import { IProps } from "../interfaces/iContext";
import { ILogin } from "../interfaces/iLogin";
import { IRegister } from "../interfaces/iRegister";
import { IUser } from "../interfaces/iUser";
import clickContext from "./clickContext";

function ContextProvider({ children }: IProps) {
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState<IUser>({
    name: "",
    email: "",
    balance: 0,
    // role: "",
    // token: "",
  });

  // Passa os tipos de cada variável automaticamente no value abaixo
  const contextValue = useMemo(
    () => ({
      loginData,
      setLoginData,
      registerData,
      setRegisterData,
      userData,
      setUserData,
    }),
    [loginData, registerData, userData]
  );

  return (
    // Estado iniciando no outro arquivo + os tipos com useMemo
    <clickContext.Provider value={{ state: contextValue }}>
      {children}
    </clickContext.Provider>
  );
}

export default ContextProvider;
