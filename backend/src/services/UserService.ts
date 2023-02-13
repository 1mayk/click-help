import User from "../database/models/UserModel";
import ILogin from "../interfaces/iLogin";
import IUser from "../interfaces/iUser";
import validations from "../helpers/validations";

export default class UserService {
  private _userModel = User;

  create = async(user: IUser): Promise<IUser | void> => {
    validations.userValidation(user);
    const userCreated = await this._userModel.create(user as any);
    return userCreated as IUser;
  }

  findAll = async (): Promise<IUser[] | void> => {
    const allUsers = await this._userModel.findAll();
    return allUsers;
  };

  findOne = async (user: ILogin): Promise<IUser | void> => {
    const { email, password } = user;
    const userFinded = await this._userModel.findOne({
      where: { email },
      attributes: {
        exclude: ['password']
      }
    });
    if (!userFinded) throw Error("userNotFound")
    if (userFinded.password !== password) throw Error("invalidPassword")
    return userFinded as IUser;
  };
}
