import express from "express";
import {
  fetchFilteredProducts,
  fetchProductByID,
} from "../../controllers/shop/shopController.js";

const router = express.Router();

router.get("", fetchFilteredProducts);
router.get("/:id", fetchProductByID);

export default router;
