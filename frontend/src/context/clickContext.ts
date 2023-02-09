import { createContext } from "react";

// O TS obriga a iniciar um estado no createContext
const INITIAL_STATE = {}

const clickContext = createContext({
  state: INITIAL_STATE
});

export default clickContext;