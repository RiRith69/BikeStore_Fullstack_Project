import Product from "../Models/Product.js";

export async function getAllProducts() {
  try {
    const product = await Product.findAll();
    return product;
  } catch (err) {
    console.log("Error fethcing data", err);
  }
}

export async function getProductById(id) {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (err) {
    console.error("Server error", err);
  }
}
