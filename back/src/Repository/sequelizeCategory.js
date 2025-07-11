import sequelize from "../DB/database.js";
import Category from "../Models/Category.js";
import Product from "../Models/Product.js";
import setupAssociation from "./../Models/association.js";
export async function mountainbike() {
  try {
    setupAssociation();
    await sequelize.authenticate();
    const mountain = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Category,
          where: { category_name: "Mountain Cycle" },
          attributes: ["category_name"],
        },
      ],
    });
    console.log("Mountain bike:", JSON.stringify(mountain, null, 2));
  } catch (err) {
    console.log("Mountain bike not found", err);
  }
}

mountainbike();

export async function roadbike() {
  try {
    setupAssociation();
    await sequelize.authenticate();
    const road = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Category,
          where: { category_name: "Road Cycle" },
          attributes: ["category_name"],
        },
      ],
    });
    console.log("Road bike:", JSON.stringify(road, null, 2));
  } catch (err) {
    console.log("Road bike not found", err);
  }
}
roadbike();

export async function hybridbike() {
  try {
    setupAssociation();
    await sequelize.authenticate();
    const road = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Category,
          where: { category_name: "Hybrid Cycle" },
          attributes: ["category_name"],
        },
      ],
    });
    console.log("Hybrid bike:", JSON.stringify(road, null, 2));
  } catch (err) {
    console.log("Hybrid bike not found", err);
  }
}
hybridbike();

export async function touringbike() {
  try {
    setupAssociation();
    await sequelize.authenticate();
    const touring = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Category,
          where: { category_name: "Touring Cycle" },
          attributes: ["category_name"],
        },
      ],
    });
    console.log("Touring Cycle:", JSON.stringify(touring, null, 2));
  } catch (err) {
    console.log("Touring Cycle not found", err);
  }
}
touringbike();

export async function electricbike() {
  try {
    setupAssociation();
    await sequelize.authenticate();
    const electric = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Category,
          where: { category_name: "Electric Cycle" },
          attributes: ["category_name"],
        },
      ],
    });
    console.log("Electric Cycle:", JSON.stringify(electric, null, 2));
  } catch (err) {
    console.log("Electric Cycle not found", err);
  }
}
electricbike();

export async function kidbike() {
  try {
    setupAssociation();
    await sequelize.authenticate();
    const kids = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Category,
          where: { category_name: "Kids Cycle" },
          attributes: ["category_name"],
        },
      ],
    });
    console.log("Kids Cycle:", JSON.stringify(kids, null, 2));
  } catch (err) {
    console.log("Kids Cycle not found", err);
  }
}
kidbike();
