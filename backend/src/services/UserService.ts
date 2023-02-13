import User from "../database/models/UserModel";
import ILogin from "../interfaces/iLogin";
import IUser from "../interfaces/iUser";
import validations from "../helpers/validations";

export default class UserService {
  private _userModel = User;

  create = async (user: IUser): Promise<IUser | void> => {
    validations.userValidation(user);
    // Checar se já existe
    const userCreated = await this._userModel.create(user as any);
    // Gerar e retornar o token
    return userCreated as IUser;
  };

  findAll = async (): Promise<IUser[] | void> => {
    const allUsers = await this._userModel.findAll();
    return allUsers;
  };

  findOne = async (user: ILogin): Promise<IUser | void> => {
    validations.loginValidation(user);
    const { email, password } = user;
    const userFinded = await this._userModel.findOne({
      where: { email },
    });
    if (!userFinded) throw Error("userNotFound");
    if (userFinded.password !== password) throw Error("invalidPassword");
    // gerar e retornar token
    return userFinded as IUser;
  };
}
