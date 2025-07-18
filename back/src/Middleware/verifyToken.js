import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "defaultSecretKey";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // Authorization: Bearer TOKEN
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token required." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Add user data to request object
    next(); // Allow to continue
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
};




