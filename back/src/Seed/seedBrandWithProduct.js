import sequelize from "../DB/database.js";
import setupAssociation from "../Models/association.js";
import Brand from "../Models/Brand.js";
import Product from "../Models/Product.js";

setupAssociation();

async function seedBrandWithProduct() {
  const brands = [
    { brand_name: "Decathlon" },
    { brand_name: "Specialized" },
    { brand_name: "Scott" },
    { brand_name: "Cube" },
    { brand_name: "Trek" },
    { brand_name: "Giant" },
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
  ];

  const productData = [
    {
      product_name: "Rockrider ST 100",
      model_year: 2023,
      price: "499.99",
      is_available: true,
      BrandId: 19,
      CategoryId: 1,
    },
    {
      product_name: "Rockhopper Comp 29",
      model_year: 2022,
      price: "1200.00",
      is_available: true,
      BrandId: 18,
      CategoryId: 2,
    },
    {
      product_name: "Scale 960",
      model_year: 2023,
      price: "999.99",
      is_available: true,
      BrandId: 17,
      CategoryId: 3,
    },
    {
      product_name: "Attention SL",
      model_year: 2022,
      price: "899.00",
      is_available: false,
      BrandId: 16,
      CategoryId: 4,
    },
    {
      product_name: "Marlin 5",
      model_year: 2023,
      price: "749.99",
      is_available: true,
      BrandId: 15,
      CategoryId: 5,
    },
    {
      product_name: "Talon 4",
      model_year: 2023,
      price: "699.99",
      is_available: true,
      BrandId: 14,
      CategoryId: 6,
    },
    {
      product_name: "Big Nine 300",
      model_year: 2022,
      price: "799.00",
      is_available: true,
      BrandId: 13,
      CategoryId: 7,
    },
    {
      product_name: "Octane 26T",
      model_year: 2023,
      price: "249.99",
      is_available: true,
      BrandId: 12,
      CategoryId: 8,
    },
    {
      product_name: "Trailblazer 27.5",
      model_year: 2022,
      price: "549.00",
      is_available: false,
      BrandId: 11,
      CategoryId: 9,
    },
    {
      product_name: "Xtrada 6",
      model_year: 2023,
      price: "899.99",
      is_available: true,
      BrandId: 10,
      CategoryId: 10,
    },
    {
      product_name: "XDS Cross 300",
      model_year: 2023,
      price: "599.99",
      is_available: true,
      BrandId: 9,
      CategoryId: 11,
    },
    {
      product_name: "XDS MTB 29er Pro",
      model_year: 2023,
      price: "899.00",
      is_available: true,
      BrandId: 8,
      CategoryId: 12,
    },
    {
      product_name: "Yongjiu Forever 28",
      model_year: 2023,
      price: "199.99",
      is_available: true,
      BrandId: 7,
      CategoryId: 13,
    },
    {
      product_name: "Yongjiu Roadster",
      model_year: 2023,
      price: "179.99",
      is_available: true,
      BrandId: 6,
      CategoryId: 14,
    },
    {
      product_name: "Toyo Ultralight 700C",
      model_year: 2023,
      price: "349.99",
      is_available: true,
      BrandId: 5,
      CategoryId: 15,
    },
    {
      product_name: "Toyo Mountain Master",
      model_year: 2022,
      price: "299.99",
      is_available: true,
      BrandId: 4,
      CategoryId: 16,
    },
    {
      product_name: "Miyata 910",
      model_year: 2023,
      price: "2499.99",
      is_available: true,
      BrandId: 3,
      CategoryId: 13,
    },
    {
      product_name: "Miyata CrossRunner",
      model_year: 2023,
      price: "1799.99",
      is_available: true,
      BrandId: 2,
      CategoryId: 12,
    },
    {
      product_name: "Bridgestone Anchor",
      model_year: 2023,
      price: "1299.99",
      is_available: true,
      BrandId: 1,
      CategoryId: 14,
    },
    {
      product_name: "Bridgestone MB-3",
      model_year: 2023,
      price: "1599.99",
      is_available: true,
      BrandId: 1,
      CategoryId: 11,
    },
    {
      product_name: "Asama City Commuter",
      model_year: 2023,
      price: "399.99",
      is_available: true,
      BrandId: 2,
      CategoryId: 12,
    },
    {
      product_name: "Asama Roadlite",
      model_year: 2023,
      price: "499.99",
      is_available: true,
      BrandId: 3,
      CategoryId: 4,
    },
  ];

  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // use { force: true } cautiously
    console.log("✅ Database synced");

    // Insert brands
    const createdBrands = await Brand.bulkCreate(brands, {
      validate: true,
      ignoreDuplicates: true,
      returning: true,
    });
    console.log(`✅ Inserted ${createdBrands.length} brands successfully`);

    // Create a map from Brand_name to brand.id
    const brandMap = {};
    createdBrands.forEach((brand) => {
      brandMap[brand.brand_name] = brand.id;
    });

    // Map product data to actual product records with correct BrandId
    const products = productData.map((p) => ({
      product_name: p.product_name,
      model_year: p.model_year,
      price: p.price,
      is_available: p.is_available,
      BrandId: p.BrandId,
      CategoryId: p.CategoryId,
    }));

    // Insert products
    const createdProducts = await Product.bulkCreate(products, {
      validate: true,
    });
    console.log(`✅ Inserted ${createdProducts.length} products successfully`);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await sequelize.close();
  }
}

// Run the seed function
seedBrandWithProduct();
