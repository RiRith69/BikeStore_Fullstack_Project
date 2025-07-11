import * as brandrepository from "../Repository/sequelizeBrandQuery.js";

// GET /api/brands
export async function getAllBrands(req, res) {
  try {
    const brand = await brandrepository.getAllBrands();
    res.status(200).json(brand);
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({ message: "Server error" });
  }
}
