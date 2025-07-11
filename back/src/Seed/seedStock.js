import Stock from "../Models/Stock.js";
import sequelize from "../DB/database.js";

async function createsStocks() {
  const stocksData = [
    { quantity: 5, ProductId: 1 },
    { quantity: 2, ProductId: 2 },
    { quantity: 3, ProductId: 3 },
    { quantity: 1, ProductId: 4 },
    { quantity: 6, ProductId: 5 },
    { quantity: 9, ProductId: 6 },
    { quantity: 3, ProductId: 7 },
    { quantity: 4, ProductId: 8 },
    { quantity: 3, ProductId: 9 },
    { quantity: 8, ProductId: 10 },
    { quantity: 4, ProductId: 11 },
    { quantity: 5, ProductId: 12 },
    { quantity: 6, ProductId: 13 },
    { quantity: 5, ProductId: 14 },
    { quantity: 10, ProductId: 15 },
    { quantity: 9, ProductId: 16 },
    { quantity: 3, ProductId: 17 },
    { quantity: 19, ProductId: 18 },
    { quantity: 2, ProductId: 19 },
    { quantity: 8, ProductId: 20 },
    { quantity: 3, ProductId: 21 },
    { quantity: 9, ProductId: 22 },
  ];

  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await Stock.bulkCreate(stocksData);

    console.log("✅ Stock created successfully");
  } catch (err) {
    console.error("❌ Error creating stocks", err);
  }
}

createsStocks();
