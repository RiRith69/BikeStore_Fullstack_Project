import Order from "../Models/Order.js";
import Product from "../Models/Product.js";
import OrderProduct from "../Models/Order_Product.js";
import User from "../Models/User.js";

export const getCartItems = async ( userId) => {
    const myCart = await Order.findOne({
        // where: {
        //     userId,
        //     order_status: "Incart"
        // },
        include: [
            {
                model: Product,
                through: {
                    model: OrderProduct,
                    attributes: ['quantity']
                }
            }
        ]
    })

    return myCart;
};

export const addToCart = async (userId, ProductID, quantity) => {
    let myCart = await Order.findOne({
        where: { 
            userId,
            order_status: "Incart"
        }
    })

    if (!myCart) {
        myCart = await Order.create({
            userId,
            order_status: "Incart"
        })
    }

    const [ cartProduct, created] = await OrderProduct.findOrCreate({
        where: {
            order_id: Order.id,
            product_id: ProductID
        },
        defaults: { quantity}
    });

    if (!created) {
        cartProduct.quantity += quantity;
        await cartProduct.save();
    }

    return cartProduct;
};

export const updateCartItem = async ( cartProductId, quantity) => {
    const item = await OrderProduct.findByPk(cartProductId);
    if (item) {
        item.quantity = quantity;
        await item.save();
        return item;
    }
    return null;
};

export const deleteCartItem = async ( cartProductId) => {
    await OrderProduct.destroy({ 
        where: {
            id: cartProductId
        }
    })
}