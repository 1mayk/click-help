import { Request, Response } from "express";
import UserService from "../services/UserService";
import validations from "../helpers/validations";

export default class UserController {
  private _userService = new UserService();

  create = async (req: Request, res: Response): Promise<Response | void> => {
    validations.userValidation(req.body);
    const userCreated = await this._userService.create(req.body);
    res.status(201).json(userCreated);
  };

  findAll = async (_req: Request, res: Response): Promise<Response | void> => {
    const allUsers = await this._userService.findAll();
    res.status(200).json(allUsers);
  };

  login = async (req: Request, res: Response): Promise<Response | void> => {
    validations.loginValidation(req.body);
    const userFinded = await this._userService.login(req.body);
    res.status(200).json(userFinded);
  };
}
