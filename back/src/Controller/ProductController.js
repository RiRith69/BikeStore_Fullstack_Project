import * as productrepository from "../Repository/sequelizeProductQuery.js";

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

export async function createProduct(req, res) {
  const { product_name, model_year, price, is_available, CategoryId, BrandId } =
    req.body;
  try {
    const products = await productrepository.createProduct({
      product_name,
      model_year,
      price,
      is_available,
      CategoryId,
      BrandId,
    });
    res.status(201).json(products);
  } catch (err) {
    console.error("Error for insert new row");
    res.status(500).json({ message: "Server error" });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { product_name, model_year, price, is_available, CategoryId, BrandId } =
    req.body;
  try {
    const product = await productrepository.updateProduct(
      id,
      product_name,
      model_year,
      price,
      is_available,
      CategoryId,
      BrandId
    );
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product update successfully" });
  } catch (err) {
    res.status(500).json({ messag: "server error" });
  }
}

export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await productrepository.deleteProduct(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product delete successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

export const searchProduct = async (req, res) => {
  const { query } = req.query;
  try {
    const products = await productrepository.searchProduct(query);
    res.status(200).json(products);
  }
  catch (error) {
    console.error("Error at search: ", error);
    res.status(500).json({error : "Error at search"});
  }
 }
