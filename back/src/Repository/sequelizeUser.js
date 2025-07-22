import User from "./../Models/User.js";

export async function getAllUser() {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "phone_number", "email", "role"],
    });
    return users;
  } catch (err) {
    console.error("Error fetching users", err); // Improved error message
    throw err; // Important to re-throw the error
  }
}

export async function deleteUser(id) {
  try {
    const users = await User.destroy({ where: { id } });
    return users;
  } catch (err) {
    console.error("Error delete product", err);
    throw err;
  }
}
