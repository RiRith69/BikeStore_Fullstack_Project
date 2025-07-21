import * as orderRepo from "../Repository/sequelizeOrder.js";

export const getOrders = async (req, res) => {
    const { userId} = req.params;
    try {
        const orders = await orderRepo.getOrders(userId);
        res.status(200).json(orders);
    }
    catch (error) {
        console.error("Error : ", error);
        res.status(500).json({ error: "Error at controller"})
    }
}

export const createOrder = async (req, res) => {
    const { userId} = req.params;
    const { status, products, paymentMethod, total} = req.body;
    console.log(products);
    console.log("Received Status:", status);
    try {
        const newOrder = await orderRepo.createOrder({
            userId,
            status,
            products, 
            paymentMethod,
            total});
        res.status(200).json(newOrder);
    }
    catch (error) {
        res.status(500).json({ error : "Error at create controller"})
    }
}