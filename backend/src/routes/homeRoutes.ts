import { Router } from "express";
import UserController from "../controllers/UserController";

const userController = new UserController();
const homeRouter = Router();

homeRouter.get("/", userController.findAll);
homeRouter.post("/login", userController.login);
homeRouter.post("/register", userController.create);

export default homeRouter;
