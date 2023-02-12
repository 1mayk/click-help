"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const userController = new UserController_1.default();
const userRouter = (0, express_1.Router)();
userRouter.get("/", userController.findAll);
exports.default = userRouter;
