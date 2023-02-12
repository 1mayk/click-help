"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController {
    constructor() {
        this._userService = new UserService_1.default();
        this.findAll = async (req, res) => {
            const allUsers = await this._userService.findAll();
            res.status(200).json(allUsers);
        };
    }
}
exports.default = UserController;
