import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "defaultSecretKey";

// REGISTER
export const register = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Validate
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if email is already in use
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered" });
    }

    // Create user
    const newUser = await User.create({
      username,
      email,
      password,
      // default role = 'customer' from model
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     // Find user
//     const user = await User.findOne({ where: { email } });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

//     // Create token
//     const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user.id,
//         username: user.username,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Login failed", error: error.message });
//   }
// };

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

    // Create token (you can include id or role if needed for frontend)
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d",
    });

    //  Only return token and message
    res.status(200).json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};



// displayUser
export const displayUser = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],   // if you want to see password, remove it
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve users", error: error.message });
  }
};


// UPDATE USER INFO
export const updateinfo = async (req, res) => {
  try {
    const { id, username, email } = req.body;

    // Validate
    if (!id || !username || !email) {
      return res.status(400).json({ message: "ID, username, and email are required" });
    }

    // Find user
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Update user info
    user.username = username;
    user.email = email;
    await user.save();

    res.status(200).json({
      message: "User info updated successfully",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error: error.message });
  }
}

// DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;

    // Validate
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    // Find user
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Delete user
    await user.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed", error: error.message });
  }
};



// import User from "../Models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const JWT_SECRET = process.env.JWT_SECRET || "defaultSecretKey";

// // REGISTER
// export const register = async (req, res) => {
//   try {
//     const { username, email, password, confirmPassword } = req.body;

//     // Validate
//     if (!username || !email || !password || !confirmPassword) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     if (password !== confirmPassword) {
//       return res.status(400).json({ message: "Passwords do not match" });
//     }

//     // Check if email is already in use
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(409).json({ message: "Email is already registered" });
//     }

//     // Create user
//     const newUser = await User.create({
//       username,
//       email,
//       password,
//       // default role = 'customer' from model
//     });

//     res.status(201).json({
//       message: "User registered successfully",
//       user: {
//         id: newUser.id,
//         username: newUser.username,
//         email: newUser.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Registration failed", error: error.message });
//   }
// };

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     // Find user
//     const user = await User.findOne({ where: { email } });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

//     // Create token
//     const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user.id,
//         username: user.username,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Login failed", error: error.message });
//   }
// };


// // // DISPLAY USER
// // export const displayUser = async (req, res) => {
// //   try {
// //     const users = await User.findAll({
// //       attributes: {
// //         exclude: ["createdAt", "updatedAt"],
// //       },
// //     });

// //     res.status(200).json(users);
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Failed to retrieve users", error: error.message });
// //   }
// // };

// // import User from "../Models/User.js";

// export const displayUser = async (req, res) => {
//   try {
//     const users = await User.findAll({
//       attributes: {
//         exclude: ["password", "createdAt", "updatedAt"],   // if you want to see password, remove it
//       },
//     });

//     res.status(200).json(users);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Failed to retrieve users", error: error.message });
//   }
// };


// // UPDATE USER INFO
// export const updateinfo = async (req, res) => {
//   try {
//     const { id, username, email } = req.body;

//     // Validate
//     if (!id || !username || !email) {
//       return res.status(400).json({ message: "ID, username, and email are required" });
//     }

//     // Find user
//     const user = await User.findByPk(id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Update user info
//     user.username = username;
//     user.email = email;
//     await user.save();

//     res.status(200).json({
//       message: "User info updated successfully",
//       user: {
//         id: user.id,
//         username: user.username,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Update failed", error: error.message });
//   }
// }

// // DELETE USER
// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.body;

//     // Validate
//     if (!id) {
//       return res.status(400).json({ message: "ID is required" });
//     }

//     // Find user
//     const user = await User.findByPk(id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Delete user
//     await user.destroy();

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete failed", error: error.message });
//   }
// };