"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    username: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    balance: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
    },
    role: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
