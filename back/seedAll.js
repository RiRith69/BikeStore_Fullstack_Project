// src/seed/seedAll.js
import sequelize from "./src/DB/database.js";
import Location from "./src/Models/Location.js";
import User from "./src/Models/User.js";
import association from "./src/Models/association.js";

// Make sure your User model has the beforeCreate hook defined within its model file, e.g.:
// User.beforeCreate(async (user, options) => {
//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(user.password, salt);
// });

async function seed() {
  try {
    association();
    // await sequelize.sync(); // This will create tables. If tables already exist, consider { alter: true } or { force: true } (use force with caution as it drops existing tables)
    await sequelize.sync({ alter: true }); // A safer option for dev: alters tables to match models
    console.log("✅ DB Synced");

    const location2 = await Location.create({
      street: "234",
      district: "Chroy Chongva",
      province: "Phnom Penh",
    });
    console.log("✅ Location created:", location2.id);

    // --- THIS IS THE FIX ---
    const user1 = await location2.createUser({
      first_name: "Messi",
      last_name: "Doe",
      phone_number: "093123456",
      email: "messi@example.com",
      password: "messi@0648",
      role: "Admin",
      LocationId: location2.id, // Foreign key
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
