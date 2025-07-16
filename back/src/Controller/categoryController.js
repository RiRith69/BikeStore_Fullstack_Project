import * as cateRepo from "../Repository/sequelizeCategory.js";

export const getProductsByCategory = async (req, res) => {
  try {

    const categoryName = req.params.category.toLowerCase();

    const categoryMap = {
        mountain: "Mountain Cycle",
        road: "Road Cycle",
        hybrid: "Hybrid Cycle",
        touring: "Touring Cycle",
        electronic: "Electronic Cycle",
        kids: "Kids Cycle",
        city: "City Cycle"
    }

    const category = categoryMap[categoryName];
    if (!category) {
        return res.status(404).json({ error: "Category Not Found"});
    }

    const cateProducts = await cateRepo.getProductsByCategory(category);
    res.status(200).json(cateProducts);
  } catch (err) {
    console.error("Error in getProductsByCategory :", err);
    res.status(500).json({ message: "Server error" });
  }
}

export default getProductsByCategory;