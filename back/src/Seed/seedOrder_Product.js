import Order_Product from "../Models/Order_Product.js";
import sequelize from "../DB/database.js";
import setupAssociation from "../Models/association.js";
async function createOrderProduct() {
  const OrderProductData = [
    {
      quantity: 4,
      OrderId: 1,
      ProductId: 2,
    },
    {
      quantity: 5,
      OrderId: 2,
      ProductId: 1,
    },
    {
      quantity: 2,
      OrderId: 3,
      ProductId: 2,
    },
    {
      quantity: 1,
      OrderId: 3,
      ProductId: 1,
    },
    {
      quantity: 5,
      OrderId: 5,
      ProductId: 4,
    },
    {
      quantity: 3,
      OrderId: 2,
      ProductId: 4,
    },
    {
      quantity: 1,
      OrderId: 3,
      ProductId: 6,
    },
    {
      quantity: 2,
      OrderId: 5,
      ProductId: 6,
    },
    {
      quantity: 2,
      OrderId: 5,
      ProductId: 2,
    },
  ];
  try {
    setupAssociation();
    await sequelize.authenticate();
    await sequelize.sync();

    await Order_Product.bulkCreate(OrderProductData);
    console.log("Insert successfully");
  } catch (err) {
    console.log("Error insert", err);
  }
}
createOrderProduct();
