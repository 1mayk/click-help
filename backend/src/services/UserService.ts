import User from "../database/models/UserModel";

export default class UserService {
  private _userModel = User;

  findAll = async () => {
    const allUsers = await this._userModel.findAll();
    // if (allUsers) {
    //   throw Error("dbError");
    // }
    return allUsers;
  };
}
