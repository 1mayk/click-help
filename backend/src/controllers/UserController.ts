import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
  private _userService = new UserService();

  findAll = async (_req: Request, res: Response): Promise<Response | void> => {
    const allUsers = await this._userService.findAll();
    res.status(200).json(allUsers);
  };

  findOne = async (req: Request, res: Response): Promise<Response | void> => {
    const user = req.body;
    // Fazer a validação de formato do login e password com service
    // const {email, password} = validate(req.body)
    const userFinded = await this._userService.findOne(user);
    // Fazer lógica do token
    res.status(200).json(userFinded);
  };

  // create
}