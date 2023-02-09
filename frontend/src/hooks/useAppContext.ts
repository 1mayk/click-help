import { useContext } from "react";
import clickContext from "../context/clickContext";

const useAppContext = () => {
  const context = useContext(clickContext);

  return context;
}

export default useAppContext;

// Para utilizar basta chamar: const {state: {prop}} = useAppContext()