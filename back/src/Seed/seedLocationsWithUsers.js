import sequelize from "../DB/database.js";
// import setupAssociation from "../Models/association.js";
import Location from "../Models/Location.js";
import User from "../Models/User.js";

// setupAssociation();

async function seedLocationsWithUsers() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // drop & recreate tables
    console.log("✅ Database synced");

    // Create locations
    const location1 = await Location.create({
      street: "182",
      district: "7 Makara",
      province: "Phnom Penh",
    });
    const location2 = await Location.create({
      street: "Street 178",
      district: "7 Makara",
      province: "Phnom Penh",
    });
    const location3 = await Location.create({
      street: "Street 240",
      district: "Chamkarmon",
      province: "Phnom Penh",
    });
    const location4 = await Location.create({
      street: "Street 104",
      district: "Dangkao",
      province: "Phnom Penh",
    });
    const location5 = await Location.create({
      street: "Street 51",
      district: "Daunpenh",
      province: "Phnom Penh",
    });
    const location6 = await Location.create({
      street: "Street 136",
      district: "Dangkao",
      province: "Phnom Penh",
    });
    const location7 = await Location.create({
      street: "Street 104",
      district: "Mean Chey",
      province: "Phnom Penh",
    });
    const location8 = await Location.create({
      street: "Street 104",
      district: "Dangkao",
      province: "Phnom Penh",
    });
    const location9 = await Location.create({
      street: "Street 152",
      district: "Toul Kork",
      province: "Phnom Penh",
    });
    const location10 = await Location.create({
      street: "Street 109",
      district: "Chbar Ampov",
      province: "Phnom Penh",
    });

    // Create users (with correct LocationId reference)
    await User.create({
      first_name: "Chren",
      last_name: "Sophearith",
      username: "sopherith",
      phone_number: "855123456789",
      email: "sophearith.chren@bikestore.org",
      password: "CSPR@123",
      role: "admin",
      LocationId: location1.id,
    });

    await User.create({
      first_name: "Touch",
      last_name: "Lyheng",
      username: "lyheng",
      phone_number: "587654321",
      email: "lyheng.touch@bikestore.org",
      password: "TLH@0123",
      role: "staff",
      LocationId: location1.id,
    });

    await User.create({
      first_name: "Rith",
      last_name: "Phearinsathya",
      username: "phearinsathya",
      phone_number: "56366993",
      email: "phearinsathya.rith@bikestore.org",
      password: "RPRS@123",
      role: "manager",
      LocationId: location2.id,
    });

    await User.create({
      first_name: "Liam",
      last_name: "Campbell",
      username: "campbell",
      phone_number: "2636699",
      email: "liam@example.com",
      password: "liam",
      role: "customer",
      LocationId: location3.id,
    });

    await User.create({
      first_name: "Ava",
      last_name: "Fooster",
      username: "fooster",
      phone_number: "55263669",
      email: "ava@example.com",
      password: "ava",
      role: "customer",
      LocationId: location3.id,
    });

    await User.create({
      first_name: "Noah",
      last_name: "Diaz",
      username: "diaz",
      phone_number: "2636699",
      email: "noah@example.com",
      password: "noah",
      role: "customer",
      LocationId: location4.id,
    });

    await User.create({
      first_name: "Isabella",
      last_name: "Griffin",
      username: "griffin",
      phone_number: "2636699",
      email: "isabella@example.com",
      password: "isabella",
      role: "customer",
      LocationId: location5.id,
    });

    await User.create({
      first_name: "Mason",
      last_name: "Hayes",
      username: "hayes",
      phone_number: "52636699",
      email: "mason@example.com",
      password: "mason",
      role: "customer",
      LocationId: location6.id,
    });

    await User.create({
      first_name: "Mia",
      last_name: "Powell",
      username: "powell",
      phone_number: "9332636699",
      email: "mia@example.com",
      password: "mia",
      role: "customer",
      LocationId: location4.id,
    });

    await User.create({
      first_name: "Lucas",
      last_name: "Reed",
      username: "reed",
      phone_number: "652636699",
      email: "lucas@example.com",
      password: "lucas",
      role: "customer",
      LocationId: location7.id,
    });

    await User.create({
      first_name: "Amelia",
      last_name: "Morgan",
      username: "morgan",
      phone_number: "9652636699",
      email: "amelia@example.com",
      password: "amelia",
      role: "customer",
      LocationId: location8.id,
    });

    await User.create({
      first_name: "Logan",
      last_name: "Cooper",
      username: "cooper",
      phone_number: "9652636699",
      email: "logan@example.com",
      password: "logan",
      role: "customer",
      LocationId: location9.id,
    });

    await User.create({
      first_name: "Charlotte",
      last_name: "Patterson",
      username: "patterson",
      phone_number: "462636699",
      email: "charlotte@example.com",
      password: "charlotte",
      role: "customer",
      LocationId: location10.id,
    });

    console.log("✅ 10 locations and 13 users inserted successfully");
  } catch (err) {
    console.error("❌ Error inserting data:", err.message);
  }
}

seedLocationsWithUsers();
