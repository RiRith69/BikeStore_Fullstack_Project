// middleware/isAdmin.js
export default function isAdmin(req, res, next) {
  const user = req.user; // assuming JWT is decoded already

  if (user && (user.role === "admin" || user.role === "manager")) {
    next();
  } else {
    return res.status(403).json({ message: "Access denied" });
  }
}
