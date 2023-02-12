import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
  private _userService = new UserService();

  findAll = async (req: Request, res: Response): Promise<Response | void> => {
    const allUsers = await this._userService.findAll();
    res.status(200).json(allUsers);
  };
}