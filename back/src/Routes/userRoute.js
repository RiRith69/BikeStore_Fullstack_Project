import { Router } from "express";
import { getAllUser, deleteUser } from "../Controller/userController.js";
import isAdmin from "../Middleware/isAdmin.js";
import { authenticateToken } from "../Middleware/verifyToken.js";

const userRouter = Router();
userRouter.get("/", isAdmin, getAllUser);
userRouter.delete("/:id", deleteUser);
export default userRouter;
