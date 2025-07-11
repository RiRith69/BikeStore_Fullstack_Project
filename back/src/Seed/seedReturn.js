import Return from "../Models/Return.js";
import sequelize from "../DB/database.js";
import setupAssociation from "../Models/association.js";

async function createReturn() {
  const ReturnData = [
    {
      ProductId: 1,
      OrderId: 2,
      return_date: "2025-07-01",
      reason: "Damaged item",
      refund_amount: 120.0,
    },
    {
      ProductId: 3,
      OrderId: 4,
      return_date: "2025-07-05",
      reason: "Wrong size",
      refund_amount: 75.5,
    },
    {
      ProductId: 2,
      OrderId: 1,
      return_date: "2025-07-03",
      reason: "Late delivery",
      refund_amount: 50.0,
    },
    {
      ProductId: 4,
      OrderId: 3,
      return_date: "2025-07-06",
      reason: "Item not as described",
      refund_amount: 200.0,
    },
    {
      ProductId: 2,
      OrderId: 5,
      return_date: "2025-07-08",
      reason: "Duplicate order",
      refund_amount: 100.0,
    },
  ];
  try {
    setupAssociation();
    await sequelize.authenticate();
    await sequelize.sync();
    await Return.bulkCreate(ReturnData);
    console.log("Insert successfully");
  } catch (err) {
    console.log("Insert error");
  }
}
createReturn();
