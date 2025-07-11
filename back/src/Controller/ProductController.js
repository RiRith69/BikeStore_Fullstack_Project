import * as productrepository from "../../sequelizeProductQuery.js";

export async function getAllProducts(req, res) {
  try {
    const products = await productrepository.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getProductById(req, res) {
  try {
    const id = req.params.id;
    const products = await productrepository.getProductById(id);
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Server error" });
  }
}
