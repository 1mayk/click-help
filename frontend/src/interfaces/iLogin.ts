import { IUser } from "./iUser";

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginProps {
  formData: (user: ILogin) => void;
}