import * as cartRepo from "../Repository/CartAPI.js"

export const getCart = async (req, res) => {
  try {
    const userId  = 4; // = req.user?.id || req.user_id || req.id || 1;
    const cartItems = await cartRepo.getCartItems(userId);
    res.json(cartItems);
  } 
  catch (error) {
    console.error(" Error at getCart function: ", error);
    res.status(404).json({ error: "Something went wrong"})
  }
};

export const addToCart = async (req, res) => {
  try {
    const { userId, productID, quantity } = req.body;
    const item = await cartRepo.addToCart({userId, productID, quantity });
    res.json(item);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(404).json({ error: "Something went wrong" });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const item = await cartRepo.updateCartItem(id, quantity);
    if (item) {
      res.json(item);
    } 
    else {
      res.status(404).json({ error: "Item not found" });
    }
  }
  catch (error) {
    console.error("Error at updateCartItem func :", error)
    res.status(404).json({ error : "Something went wrong"})
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    await cartRepo.deleteCartItem(id);
    res.json({ message: "Deleted" });
  }
  catch ( error) {
    console.error("Error at deleteCartItem func: ", error);
    res.status(404).json({ error : "Something went wrong"})
  }
};