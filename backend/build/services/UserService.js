"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
class UserService {
    constructor() {
        this._userModel = UserModel_1.default;
        this.create = async (user) => {
            const userExists = await this.findOne(user.email);
            if (userExists)
                throw Error("userAlreadyExists");
            const userCreated = (await this._userModel.create(user));
            // Gerar e retornar o token
            return {
                username: userCreated.username,
                email: userCreated.email,
                role: userCreated.role,
                balance: userCreated.balance
            };
        };
        this.findAll = async () => {
            const allUsers = await this._userModel.findAll();
            return allUsers;
        };
        this.findOne = async (email) => {
            const userFinded = await this._userModel.findOne({
                where: { email },
            });
            return userFinded;
        };
        this.login = async (user) => {
            const { email, password } = user;
            const userFinded = await this.findOne(email);
            if (!userFinded)
                throw Error("userNotFound");
            if (userFinded.password !== password)
                throw Error("invalidPassword");
            // gerar e retornar token
            return {
                username: userFinded.username,
                email: userFinded.email,
                role: userFinded.role,
                balance: userFinded.balance
            };
        };
    }
}
exports.default = UserService;
