import { IUser } from "./iUser";

export interface IRegister extends IUser {
  password: string;
}

export interface IRegisterProps {
  formData: (user: IRegister) => void;
}