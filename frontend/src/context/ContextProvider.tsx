import userContext from "./userContext";
import { useMemo, useState } from "react";
import { IProps } from "../interfaces/iContext";
import { INITIAL_USER_STATE } from "./userContext";

function ContextProvider({ children }: IProps) {
  const [user, setUser] = useState(INITIAL_USER_STATE.user);

  const userContextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return (
    <userContext.Provider value={userContextValue}>
      {children}
    </userContext.Provider>
  );
}

export default ContextProvider;
