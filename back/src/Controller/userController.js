import * as userRepository from "./../Repository/sequelizeUser.js";

export async function getAllUser(req, res) {
  try {
    const users = await userRepository.getAllUser();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Server error" });
  }
}
export async function deleteUser(req, res) {
  const { id } = req.params;
  const { role } = req.user;
  if (role !== "staff" && role !== "manager") {
    return res.status(403).json({ message: "Access denied" });
  }
  try {
    const deleteCount = await userRepository.deleteUser(id);
    if (deleteCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.error("Error deleting product:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
}
