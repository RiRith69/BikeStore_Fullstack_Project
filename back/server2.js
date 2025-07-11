import express, { json } from "express";
import cors from "cors";
import brandRouter from "./src/Routes/brandRouter.js";
import productRouter from "./src/Routes/productRouter.js";

const app = express();

app.use(cors());
app.use(json());
app.use("/api/brands", brandRouter);
app.use("/api/products", productRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
