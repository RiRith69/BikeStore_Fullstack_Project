import sequelize from "../DB/database.js";
import Order from "../Models/Order.js";
import setupAssociation from "../Models/association.js";

async function createOrder() {
  const orderData = [
    {
      order_status: "Processing",
      order_date: "2025-07-05",
      shipped_date: null,
      shipping_method: "Standard",
      UserId: 3,
    },
    {
      order_status: "Completed",
      order_date: "2025-06-05",
      shipped_date: "2025-06-06",
      shipping_method: "Express Shipping",
      UserId: 4,
    },
    {
      order_status: "Completed",
      order_date: "2025-06-08",
      shipped_date: "2025-06-09",
      shipping_method: "Express Shipping",
      UserId: 5,
    },
    {
      order_status: "Processing",
      order_date: "2025-07-05",
      shipped_date: null,
      shipping_method: "Standard",
      UserId: 6,
    },
    {
      order_status: "Processing",
      order_date: "2025-07-06",
      shipped_date: "2025-07-07",
      shipping_method: "Standard",
      UserId: 7,
    },
    {
      order_status: "Processing",
      order_date: "2025-07-09",
      shipped_date: "2025-07-10",
      shipping_method: "Standard",
      UserId: 8,
    },
    {
      order_status: "Processing",
      order_date: "2025-07-11",
      shipped_date: null,
      shipping_method: "Standard",
      UserId: 9,
    },
    {
      order_status: "Completed",
      order_date: "2025-07-08",
      shipped_date: null,
      shipping_method: "Curbside Pickup",
      UserId: 10,
    },
    {
      order_status: "Completed",
      order_date: "2025-07-05",
      shipped_date: null,
      shipping_method: "Curbside Pickup",
      UserId: 11,
    },
    {
      order_status: "Processing",
      order_date: "2025-07-11",
      shipped_date: "2025-07-11",
      shipping_method: "Standard",
      UserId: 12,
    },
  ];
  try {
    await sequelize.authenticate();
    setupAssociation();
    await sequelize.sync();

    await Order.bulkCreate(orderData);
    console.log("Order create successfully");
  } catch (err) {
    console.log("Error creating order", err);
  }
}
createOrder();
