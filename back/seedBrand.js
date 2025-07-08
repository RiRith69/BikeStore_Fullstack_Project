import Brand from "./Brand.js";
const brands = [
  { brand_name: "Decathlon" },
  { brand_name: "Specialized" },
  { brand_name: "Scott" },
  { brand_name: "Cube" },
  { brand_name: "Trek" },
  { brand_name: "Gaint" },
  { brand_name: "Merida" },
  { brand_name: "Hero Cycle" },
  { brand_name: "Waltx" },
  { brand_name: "Polygon" },
  { brand_name: "United Bike" },
  { brand_name: "Flying Pigeon" },
  { brand_name: "Trinx" },
  { brand_name: "Yongjiu" },
  { brand_name: "XDS" },
  { brand_name: "Toyo" },
  { brand_name: "Miyata" },
  { brand_name: "Bridgestone Cycle" },
  { brand_name: "Asama" },
  // Add more items...
];
async function insertBrands() {
  try {
    await Brand.bulkCreate(brands);
    console.log("Brands insert successfully");
  } catch (err) {
    console.log("Error inserting", err);
  }
}
insertBrands();
