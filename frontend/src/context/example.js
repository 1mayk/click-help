import useAppContext from "../../../hooks/useAppContext";
import { useEffect, useState } from "react";

const {login, setLogin} = useAppContext();
const [logon, setLogon] = useState('');

useEffect(() => {
  setLogin({email: logon, password: logon});
}, [logon]);

console.log(login)