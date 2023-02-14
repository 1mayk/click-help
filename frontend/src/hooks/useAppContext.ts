import { useContext } from "react";
import userContext from "../context/userContext";

const useAppContext = () => {
  const contextUser = useContext(userContext);

  return {
    ...contextUser,
  };
}

export default useAppContext;
