import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/database.js";
import authRoutes from "./routes/auth/authRoutes.js";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/admin/adminRoutes.js";
import shopRoutes from "./routes/shop/shopRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "DELETE", "POST"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

//  Routes Handling Here

const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.use("/api/admin/products", adminRoutes);
app.use("/api/shop/products", shopRoutes);

connectDB().then(
  app.listen(PORT, () => {
    console.log(`Server is running on : http://localhost:${PORT}`);
  })
);
