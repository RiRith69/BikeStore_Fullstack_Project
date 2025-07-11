import Brand from "../Models/Brand.js";

export async function getAllBrands() {
  try {
    // await sequelize.authenticate(); //

    const brands = await Brand.findAll(); //
    return brands;
  } catch (res) {
    console.error("Failed to fetch brands:", err.message);
  }
}

export async function giantBrand() {
  try {
    const giant = await Brand.findOne({ where: { brand_name: "Giant" } });
    console.log(`Item:`, JSON.stringify(giant, null, 2));
  } catch (err) {
    console.log("Brand not found");
  }
}
// giantBrand();
export async function asumaBrand() {
  try {
    const polygon = await Brand.findOne({ where: { brand_name: "Asama" } });
    console.log(`Item:`, JSON.stringify(polygon, null, 2));
  } catch (err) {
    console.log("Brand not found");
  }
}
// asumaBrand();
export async function trekBrand() {
  try {
    const trek = await Brand.findOne({ where: { brand_name: "Trek" } });
    console.log(`Item:`, JSON.stringify(trek, null, 2));
  } catch (err) {
    console.log("Brand not found");
  }
}
// trekBrand();
export async function meridaBrand() {
  try {
    const merida = await Brand.findOne({ where: { brand_name: "Merida" } });
    console.log(`Item:`, JSON.stringify(merida, null, 2));
  } catch (err) {
    console.log("Brand not found");
  }
}
// meridaBrand();
export async function polygonBrand() {
  try {
    const polygon = await Brand.findOne({ where: { brand_name: "Polygon" } });
    console.log(`Item:`, JSON.stringify(polygon, null, 2));
  } catch (err) {
    console.log("Brand not found");
  }
}
// polygonBrand();
