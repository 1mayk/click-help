"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
const validations_1 = __importDefault(require("../helpers/validations"));
class UserController {
    constructor() {
        this._userService = new UserService_1.default();
        this.create = async (req, res) => {
            validations_1.default.userValidation(req.body);
            const userCreated = await this._userService.create(req.body);
            res.status(201).json(userCreated);
        };
        this.findAll = async (_req, res) => {
            const allUsers = await this._userService.findAll();
            res.status(200).json(allUsers);
        };
        this.login = async (req, res) => {
            validations_1.default.loginValidation(req.body);
            const userFinded = await this._userService.login(req.body);
            res.status(200).json(userFinded);
        };
    }
}
exports.default = UserController;
