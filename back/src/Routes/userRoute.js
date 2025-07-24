import { Router } from "express";
import { getAllUser, deleteUser } from "../Controller/userController.js";
import isAdmin from "../Middleware/isAdmin.js";
import { authMiddleware } from "../Middleware/verifyToken.js";

const userRouter = Router();
userRouter.get("/", authMiddleware, isAdmin, getAllUser);
userRouter.delete("/:id", authenticateToken, isAdmin, deleteUser);
export default userRouter;
