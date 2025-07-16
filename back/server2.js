import express, { json } from "express";
import cors from "cors";
import brandRouter from "./src/Routes/brandRouter.js";
import productRouter from "./src/Routes/productRouter.js";
import cartRouter from "./src/Routes/cartRoute.js";

import dotenv from "dotenv";
import sequelize from "./src/DB/database.js";
import setupAssociation from "./src/Models/association.js";

dotenv.config();
setupAssociation();
await sequelize.sync();

const app = express();

app.use(cors());
app.use(json());

app.use("/api/brands", brandRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter)

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

