import Brand from "../Models/Brand.js";
import Product from "../Models/Product.js";

export async function getAllBrands() {
  try {
    // await sequelize.authenticate(); //

    const brands = await Brand.findAll({
      include: {
        model: Product,
        attributes: ["id", "product_name", "model_year", "price"],
      },
    });
    return brands;
  } catch (res) {
    console.error("Failed to fetch brands:", err.message);
  }
}

export async function getBrandById(id) {
  try {
    const brand = await Brand.findByPk(id, {
      attributes: ["id", "brand_name"],
      include: {
        model: Product,
        attributes: ["id", "product_name", "model_year", "price"],
      },
    });
    return brand;
  } catch (err) {
    console.log("Error fetching brand", err);
  }
}

export async function createBrand(brands) {
  const { brand_name } = brands;
  try {
    const newBrands = await Brand.create({
      brand_name,
    });
    return newBrands;
  } catch (error) {
    console.log("Error creating brand", error);
  }
}

export async function updateBrand(id, brand_name) {
  try {
    const [update] = await Brand.update({ brand_name }, { where: { id } });
    return update;
  } catch (error) {
    console.error("Error updating brand:", error.message);
  }
}

export async function deleteBrand(id) {
  try {
    const brands = await Brand.destroy({ where: { id } });
    return brands;
  } catch (error) {
    console.error("Error delete brand:", error.message);
  }
}
export async function getBrandByName(brandname) {
  try {
    const brand = await Brand.findOne({
      where: { brand_name: brandname },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: { brand_name: brandname },
      include: {
        model: Product,
        attributes: ["id", "product_name", "model_year", "price"],
      },
    });
    return brand;
  } catch (err) {
    console.error("Error fetching brand:", err.message);
    throw err;
  }
}

// // giantBrand();
// export async function asumaBrand() {
//   try {
//     const polygon = await Brand.findOne({ where: { brand_name: "Asama" } });
//     console.log(`Item:`, JSON.stringify(polygon, null, 2));
//   } catch (err) {
//     console.log("Brand not found");
//   }
// }
// // asumaBrand();
// export async function trekBrand() {
//   try {
//     const trek = await Brand.findOne({ where: { brand_name: "Trek" } });
//     console.log(`Item:`, JSON.stringify(trek, null, 2));
//   } catch (err) {
//     console.log("Brand not found");
//   }
// }
// // trekBrand();
// export async function meridaBrand() {
//   try {
//     const merida = await Brand.findOne({ where: { brand_name: "Merida" } });
//     console.log(`Item:`, JSON.stringify(merida, null, 2));
//   } catch (err) {
//     console.log("Brand not found");
//   }
// }
// // meridaBrand();
// export async function polygonBrand() {
//   try {
//     const polygon = await Brand.findOne({ where: { brand_name: "Polygon" } });

//     console.log(`Item:`, JSON.stringify(polygon, null, 2));
//   } catch (err) {
//     console.log("Brand not found");
//   }
// }
// // polygonBrand();
