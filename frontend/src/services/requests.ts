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
  try {
    const routeUrl = getUrl(endpoint);
    const userCreated = await axios.post(routeUrl, user);
    console.log(userCreated);
    localStorage.setItem("user", JSON.stringify(userCreated));
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
};

export { reqLogin, reqUserRegister };
