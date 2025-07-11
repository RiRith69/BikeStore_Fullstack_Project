import Category from "../Models/Category.js";
import sequelize from "../DB/database.js";
async function createCategories() {
  const categoryData = [
    { category_name: "City Cycle" },
    { category_name: "Mountain Cycle" },
    { category_name: "Kids Cycle" },
    { category_name: "Road Cycle" },
    { category_name: "Hybrid Cycle" },
    { category_name: "Electric Cycle" },
    { category_name: "Touring Cycle" },
    { category_name: "Gravel Cycle" },
    { category_name: "Urban Cycle" },
    { category_name: "Brake" },
    { category_name: "Gear" },
    { category_name: "Suspension" },
    { category_name: "Spoke" },
    { category_name: "Chain" },
    { category_name: "Saddle" },
    { category_name: "Frame" },
  ];

  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await Category.bulkCreate(categoryData);

    console.log("✅ Categories created successfully:");
  } catch (error) {
    console.error("❌ Error creating categories:", error);
  }
}

// Run the insert function
createCategories();
