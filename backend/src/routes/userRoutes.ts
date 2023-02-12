import { Router } from "express";
import UserController from "../controllers/UserController";

const userController = new UserController();
const userRouter = Router();

userRouter.get("/", userController.findAll);
userRouter.post("/", userController.findOne);

export default userRouter;
