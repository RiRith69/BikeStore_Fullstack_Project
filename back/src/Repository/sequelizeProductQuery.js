import Product from "../Models/Product.js";
import { Op } from "sequelize";

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

export async function createProduct(product) {
  const { product_name, model_year, price, is_available, CategoryId, BrandId } =
    product;
  try {
    const newProduct = await Product.create({
      product_name,
      model_year,
      price,
      is_available,
      CategoryId,
      BrandId,
    });
    return newProduct;
  } catch (error) {
    console.log("Error creating products");
  }
}

export async function updateProduct(
  id,
  product_name,
  model_year,
  price,
  is_available,
  CategoryId,
  BrandId
) {
  try {
    const [updateProduct] = await Product.update(
      {
        product_name,
        model_year,
        price,
        is_available,
        CategoryId,
        BrandId,
      },
      {
        where: { id },
      }
    );
    return updateProduct;
  } catch (err) {
    console.error("Error updating product:", err);
    throw err;
  }
}

export async function deleteProduct(id) {
  try {
    const product = await Product.destroy({ where: { id } });
    return product;
  } catch (err) {
    console.error("Error delete product:", err.message);
  }
}

export const searchProduct = async ( query) => {
  const products = await Product.findAll({
    where: {
      product_name: {
        [Op.iLike]: `%${query}%`,
      }
    }
  })
  if ( !products) {
    console.log("Product Not found")
    return;
  }
  return products;
}
