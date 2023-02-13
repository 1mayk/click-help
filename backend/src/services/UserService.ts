import User from "../database/models/UserModel";
import ILogin from "../interfaces/iLogin";
import IUser from "../interfaces/iUser";

export default class UserService {
  private _userModel = User;

  create = async (user: IUser): Promise<IUser | void> => {
    const userExists = await this.findOne(user.email);
    if (userExists) throw Error("userAlreadyExists");
    const userCreated = (await this._userModel.create(
      user as any
    )) as IUser;
    // Gerar e retornar o token
    return {
      username: userCreated.username,
      email: userCreated.email,
      role: userCreated.role,
      balance: userCreated.balance
    } as IUser;
  };

  findAll = async (): Promise<IUser[] | void> => {
    const allUsers = await this._userModel.findAll();
    return allUsers;
  };

  findOne = async (email: string): Promise<IUser | void> => {
    const userFinded = await this._userModel.findOne({
      where: { email },
    });

    return userFinded as IUser;
  };

  login = async (user: ILogin): Promise<IUser | void> => {
    const { email, password } = user;
    const userFinded = await this.findOne(email);
    if (!userFinded) throw Error("userNotFound");
    if (userFinded.password !== password) throw Error("invalidPassword");
    // gerar e retornar token
    return { email: userFinded.email } as IUser;
  };
}
