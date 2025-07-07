import Brand from "../Models/Brand.js";

async function createBrand() {
  // Assuming this is part of an async function
  try {
    const brand1 = await Brand.create({
      brand_name: "Giant",
    });

    console.log("Brand created successfully:", brand1.toJSON()); // Use .toJSON() to log the plain data
    // Or just log the instance if you want to see its methods too
    // console.log("Brand created successfully:", brand1);

    // If you need to access properties of the created brand:
    console.log("Created Brand ID:", brand1.id);
    console.log("Created Brand Name:", brand1.brand_name);
  } catch (error) {
    console.error("Error creating brand:", error);
  }
}

// Call the async function if this is the entry point
createBrand();
