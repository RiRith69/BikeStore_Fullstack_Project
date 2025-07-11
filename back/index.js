import express from "express";
import cors from "cors";
import sequelize from "./database.js";
import Products from "./src/Models/Product.js"
import Order from "./src/Models/Order.js"
import orderProducts from "./src/Models/Order_Product.js"

app.use(cors());
app.use