import { where } from "sequelize";
import User from "../database/models/UserModel";
import ILogin from "../interfaces/iLogin";
import IUser from "../interfaces/iUser";

export default class UserService {
  private _userModel = User;

  findAll = async (): Promise<IUser[] | void> => {
    const allUsers = await this._userModel.findAll();
    return allUsers;
  };

  findOne = async (user: ILogin): Promise<IUser | void> => {
    const { email, password } = user;
    const userFinded = await this._userModel.findOne({
      where: { email },
    });
    if (!userFinded) throw Error("userNotFound")
    if (userFinded.password !== password) throw Error("invalidPassword")
    return userFinded as IUser;
  };
}
