import Payment from "../Models/Payment.js";
import sequelize from "../DB/database.js";

async function createPayment() {
  const paymentData = [
    {
      payment_status: "Pending",
      payment_type: "Credit Card",
      amount: 150.0,
      payment_date: "2025-07-05",
      OrderId: 1,
    },
    {
      payment_status: "Completed",
      payment_type: "PayPal",
      amount: 299.99,
      payment_date: "2025-06-06",
      OrderId: 2,
    },
    {
      payment_status: "Completed",
      payment_type: "Credit Card",
      amount: 120.5,
      payment_date: "2025-06-09",
      OrderId: 3,
    },
    {
      payment_status: "Pending",
      payment_type: "Bank Transfer",
      amount: 75.0,
      payment_date: "2025-07-05",
      OrderId: 4,
    },
    {
      payment_status: "Completed",
      payment_type: "Credit Card",
      amount: 200.0,
      payment_date: "2025-07-07",
      OrderId: 5,
    },
    {
      payment_status: "Completed",
      payment_type: "PayPal",
      amount: 180.0,
      payment_date: "2025-07-10",
      OrderId: 6,
    },
    {
      payment_status: "Pending",
      payment_type: "Credit Card",
      amount: 90.0,
      payment_date: "2025-07-11",
      OrderId: 7,
    },
    {
      payment_status: "Completed",
      payment_type: "Bank Transfer",
      amount: 110.0,
      payment_date: "2025-07-08",
      OrderId: 8,
    },
    {
      payment_status: "Completed",
      payment_type: "Credit Card",
      amount: 85.0,
      payment_date: "2025-07-05",
      OrderId: 9,
    },
    {
      payment_status: "Pending",
      payment_type: "PayPal",
      amount: 160.0,
      payment_date: "2025-07-11",
      OrderId: 10,
    },
  ];
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await Payment.bulkCreate(paymentData);
    console.log("Payment create successfully");
  } catch (err) {
    console.log("Error create payment", err);
  }
}
createPayment();
