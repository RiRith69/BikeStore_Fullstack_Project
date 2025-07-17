import express from "express";
import { register, login, displayUser, updateinfo, deleteUser} from "../Controller/authController.js";   //IMPORT CONTROLLER FUNCTIONS
const router = express.Router();

// @route   POST /api/auth/register
router.post("/register", register);

// @route   POST /api/auth/login
router.post("/login", login);
router.get("/displayUser", displayUser);
router.put("/updateinfo", updateinfo);
router.delete("/deleteUser", deleteUser)

export default router;
