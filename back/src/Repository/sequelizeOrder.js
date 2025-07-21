import Order from "../Models/Order.js";
import Product from "../Models/Product.js";
import OrderProduct from "../Models/Order_Product.js";
import Payment from "../Models/Payment.js";
import User from "../Models/User.js";

export const getOrders = async (userId) => {
    const myOrders = await Order.findOne({
        where: {
            UserId: userId,
        },
        include: [
            {
                model: Product,
                through: {
                    model: OrderProduct,
                    as: 'orderProduct',
                    attributes: ['quantity']
                }
            }
        ]
    })

    return myOrders;
}

export const createOrder = async ({
    userId,
    status,
    products,
    paymentMethod,
    total,
  }) => {
    try {
      const newOrder = await Order.create({
        UserId: userId,
        order_date: new Date(),
        order_status: status,
        total_price: total,
      });
      await Payment.create({
        OrderId: newOrder.id,
        payment_type: paymentMethod,
        payment_status: "Paid",
        amount: total,
        payment_date: new Date(),
      });
      console.log(products)
      await OrderProduct.bulkCreate(
        products.map((item) => ({
          OrderId: newOrder.id,
          ProductId: item.id,
          quantity: item.quantity,
        }))
      );
  
      return newOrder;
    } 
    catch (err) {
      console.error("Failed to create order:", err);
      throw err;
    }
  };
  