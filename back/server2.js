import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./src/DB/database.js";

import brandRouter from "./src/Routes/brandRouter.js";
import productRouter from "./src/Routes/productRouter.js";
import cartRouter from "./src/Routes/cartRoute.js";
import categoryRouter from "./src/Routes/categoryRoute.js";
import authRouter from "./src/Routes/authRoutes.js"; //ADD THIS
import orderRouter from "./src/Routes/orderRoute.js";
import userRouter from "./src/Routes/userRoute.js";

import setupAssociation from "./src/Models/association.js"; // ✅ IMPORT IT

dotenv.config();
setupAssociation();

await sequelize.sync();

const app = express();

// ✅ Correct CORS setup FIRST
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(json());

// ✅ Now add routes
app.use("/api/brands", brandRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/category", categoryRouter);
app.use("/api/auth", authRouter); //ADD THIS LINE
app.use("/api/order", orderRouter);
app.use("/api/user", userRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
