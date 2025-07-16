import Order from "../Models/Order.js";
import Product from "../Models/Product.js";
import OrderProduct from "../Models/Order_Product.js";
import User from "../Models/User.js";

export const getCartItems = async ( userId) => {
    const myCart = await Order.findOne({
        where: {
            UserId: userId,
            order_status: "Incart"
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

    return myCart;
};

export const addToCart = async (userId, productID, quantity) => {
    let myCart = await Order.findOne({
        where: { 
            UserId: userId,
            order_status: "Incart"
        }
    })

    if (!myCart) {
        myCart = await Order.create({
            UserId: userId,
            order_status: "Incart"
        })
    }

    const [ cartProduct, created] = await OrderProduct.findOrCreate({
        where: {
            OrderId: myCart.id,
            ProductId: productID
        },
        defaults: { quantity}
    });

    if (!created) {
        cartProduct.quantity += quantity;
        await cartProduct.save();
    }

    return cartProduct;
};

export const updateCartItem = async (userId, cartProductId, quantity) => {
    const myCart = await Order.findOne({
        where: { 
            UserId: userId,
            order_status: "Incart"
        }
    })
    if (myCart) {
        const item = await OrderProduct.findOne({
            where: {
                OrderId: myCart.id, 
                ProductId: cartProductId
            }
        });
        if (item) {
            item.quantity = quantity;
            await item.save();
            return item;
        }
    }
    return null;
};

export const deleteCartItem = async (userId, cartProductId) => {
    const myCart = await Order.findOne({
        where: { 
            UserId: userId,
            order_status: "Incart"
        }
    })
    if (myCart) {
        await OrderProduct.destroy({ 
            where: {
                OrderId: myCart.id,
                ProductId: cartProductId
            }
        })
    }
}

const STATUS_FLOW = {
    Incart: ["Pending, Paid"],
    Pending: ["Paid", "Cancelled"],
    Paid: ["Shipped"],
    Shipped: ["Delivered", "Returned"],
    Delivered: [],
    Cancelled: [],
    Returned: [],
}

export const updateOrderStatus = async ( userId, newStatus) => {
    const myOrder = await Order.findOne({
        where: { 
            UserId: userId,
            order_status: "Incart"
        }
    })
    if ( !myOrder) {
        return { error: "Order Not Found"};
    }

    const currentStatus = myOrder.order_status;
    const nextStatus = STATUS_FLOW[currentStatus] || [];
    if ( !nextStatus.include(newStatus)) {
        return { error: "Invailid Status"}
    }
    myOrder.order_status = newStatus;
    if (newStatus === "Pending" || "Paid") {
        myCart.order_date = new Date();
    }
    await myOrder.save();
}