// middleware/isAdmin.js
const allowedRoles = ["admin", "manager"];

export default function isAdmin(req, res, next) {
  // 1. Check if user is authenticated
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized: Login required" });
  }

  // 2. Check if user has the right role
  if (allowedRoles.includes(req.user.role)) {
    next(); // Allow access
  } else {
    // 3. Deny access with a clear message
    return res.status(403).json({
      success: false,
      message: `Access denied. Required role: ${allowedRoles.join(" or ")}`,
    });
  }
}
