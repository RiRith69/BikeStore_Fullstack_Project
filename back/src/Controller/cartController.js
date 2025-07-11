import { where } from "sequelize";
import Order from "../Models/Order.js";
import Product from "../Models/Product.js";
import User from "../Models/User.js"

export const getCart = async (req, res) => {
    try {
        const cartItems = await Order.findAll({
            where : {
                order_status: 'Incart',
            },
            include: [ 
                {
                    model: User,
                    where: { id: req.user.id},
                },
                {
                    model: Product
                }
            ]
        });
        res.json(cartItems);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ error: 'Something went wrong'});
    }
};

export const addToCart = async (req, res) => {
    try {
        const { productID, quantity } = req.body;
        const item = await Order.create({ productID, quantity});
        res.json(item);
    } catch {
        console.error('Error fetching cart:', error);
        res.status(500).json({ error: 'Something went wrong'});
    }
}

export const updateCartItem = async ( req, res) => {
    const { id } = req.params;
    const { quantity} = req.body;
    const item = await Order.findByPk(id);
    if (item) {
        item.quantity = quantity;
        await item.save();
        res.json(item);
    } 
    else {
        res.status(404).json({ error: 'Item not found'});
    }
};

export const deleteCartItem = async ( req, res) => {
    const { id} = req.params;
    await Order.destroy({ where : { id}});
    res.json({ message: 'Deleted'});
}

getCart()