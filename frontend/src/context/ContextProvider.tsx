import userContext from "./userContext";
import loginContext from "./loginContext";
import registerContext from "./registerContext";
import { useMemo, useState } from "react";
import { IProps } from "../interfaces/iContext";
import { INITIAL_USER_STATE } from "./userContext";
import { INITIAL_LOGIN_STATE } from "./loginContext";
import { INITIAL_REGISTER_STATE } from "./registerContext";

function ContextProvider({ children }: IProps) {
  const [user, setUser] = useState(INITIAL_USER_STATE.user);
  const [login, setLogin] = useState(INITIAL_LOGIN_STATE.login);
  const [register, setRegister] = useState(INITIAL_REGISTER_STATE.register);

  const userContextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  const loginContextValue = useMemo(
    () => ({
      login,
      setLogin,
    }),
    [login]
  );

  const registerContextValue = useMemo(
    () => ({
      register,
      setRegister,
    }),
    [register]
  );

  return (
    <userContext.Provider value={userContextValue}>
      <loginContext.Provider value={loginContextValue}>
        <registerContext.Provider value={registerContextValue}>
          {children}
        </registerContext.Provider>
      </loginContext.Provider>
    </userContext.Provider>
  );
}

export default ContextProvider;
