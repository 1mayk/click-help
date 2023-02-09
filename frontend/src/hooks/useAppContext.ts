import { useContext } from "react";
import userContext from "../context/userContext";
import loginContext from "../context/loginContext";
import registerContext from "../context/registerContext";

const useAppContext = () => {
  const contextUser = useContext(userContext);
  const contextLogin = useContext(loginContext);
  const contextRegister = useContext(registerContext);

  return {
    ...contextUser,
    ...contextLogin,
    ...contextRegister
  };
}

export default useAppContext;
