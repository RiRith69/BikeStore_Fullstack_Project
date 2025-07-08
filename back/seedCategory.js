import Category from "./src/Models/Category.js";

async function createCategories() {
  try {
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

    const createdCategories = await Category.bulkCreate(categoryData);

    console.log("✅ Categories created successfully:");
    createdCategories.forEach((category) =>
      console.log(`- ${category.category_name} (ID: ${category.id})`)
    );
  } catch (error) {
    console.error("❌ Error creating categories:", error);
  }
}

// Run the insert function
createCategories();
