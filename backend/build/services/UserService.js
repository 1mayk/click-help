"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
class UserService {
    constructor() {
        this._userModel = UserModel_1.default;
        this.findAll = async () => {
            const allUsers = await this._userModel.findAll();
            return allUsers;
        };
    }
}
exports.default = UserService;
