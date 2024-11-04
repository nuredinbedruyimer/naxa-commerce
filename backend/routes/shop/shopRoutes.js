import express from "express";
import { fetchFilteredProducts } from "../../controllers/shop/shopController.js";

const router = express.Router();

router.get("", fetchFilteredProducts);

export default router;
