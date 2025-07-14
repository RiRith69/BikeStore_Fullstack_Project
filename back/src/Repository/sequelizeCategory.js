import sequelize from "../DB/database.js";
import Category from "../Models/Category.js";
import Product from "../Models/Product.js";
import setupAssociation from "./../Models/association.js";

setupAssociation();

export const getProductsByCategory = async (categoryName) => {
  await sequelize.authenticate();
  const products = await Product.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [
      {
        model: Category,
        where: { category_name: categoryName},
        attributes: ["category_name"],
      },
    ],
  });
  return products;
}
