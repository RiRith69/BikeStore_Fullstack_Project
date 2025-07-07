import express, { json } from "express";
const app = express();
const authMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return res.status(403).json({ message: "Roles not allow" });
    }
    next();
  };
};
export default authMiddleware;
