import { Router } from "express";
import { getAllUser, deleteUser } from "../Controller/userController.js";

const userRouter = Router();
userRouter.get("/", getAllUser);
userRouter.delete("/:id", deleteUser);
export default userRouter;
