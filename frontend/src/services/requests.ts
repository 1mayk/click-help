import axios from "axios";
import { ILogin } from "../interfaces/iLogin";
import { IUser } from "../interfaces/iUser";

const getUrl = (route: string) => `http://localhost:3001${route}`;

const reqLogin = async (
  endpoint: string,
  body: ILogin
): Promise<IUser | void> => {
  const routeUrl = getUrl(endpoint);
  const { data } = await axios.post(routeUrl, body);

  return data as IUser;
};

const reqUserRegister = async (
  endpoint: string,
  user: IUser
): Promise<IUser | void> => {
    const routeUrl = getUrl(endpoint);
    const { data } = await axios.post(routeUrl, user);
    
    return data;
};

export { reqLogin, reqUserRegister };
