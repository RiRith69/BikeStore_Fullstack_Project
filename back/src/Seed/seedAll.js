// src/seed/seedAll.js
import { sequelize } from "../DB/database.js";
import Location from "../Models/Location.js"; // <-- UNCOMMENT THIS
import User from "../Models/User.js"; // <-- UNCOMMENT THIS
import bcrypt from "bcrypt"; // You'll need bcrypt for the beforeCreate hook if it's not already linked in User model definition

// Make sure your User model has the beforeCreate hook defined within its model file, e.g.:
// User.beforeCreate(async (user, options) => {
//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(user.password, salt);
// });

async function seed() {
  try {
    // await sequelize.sync(); // This will create tables. If tables already exist, consider { alter: true } or { force: true } (use force with caution as it drops existing tables)
    await sequelize.sync({ alter: true }); // A safer option for dev: alters tables to match models
    console.log("✅ DB Synced");

    const location1 = await Location.create({
      street: "182",
      district: "7 Makara",
      province: "Phnom Penh",
    });
    console.log("✅ Location created:", location1.id);

    // --- THIS IS THE FIX ---
    const user1 = await User.create({
      // <--- CALL .create() ON THE USER MODEL, NOT THE LOCATION INSTANCE
      first_name: "John",
      last_name: "Doe",
      phone_number: "093123456",
      email: "john@example.com",
      password: "Rith@0648", // The beforeCreate hook on User will hash this
      role: "manager",
      LocationId: location1.id, // Make sure User model has a LocationId foreign key field and association
    });
    console.log("✅ User created:", user1.id);

    console.log("✅ Data inserted successfully");
  } catch (err) {
    console.error("❌ Error inserting data:", err.message);
    // Log the full error object for more details during debugging
    console.error(err);
  } finally {
    await sequelize.close();
    console.log("🔌 DB Connection closed");
  }
}

seed();
