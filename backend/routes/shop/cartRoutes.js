import express from "express";
import {
  addToCartController,
  deleteCartItemController,
  fetchCartItemsController,
  updateCartItemController,
} from "../../controllers/shop/cartController.js";

const router = express.Router();

router.post("", addToCartController);
router.get("/:userId", fetchCartItemsController);
router.put("", updateCartItemController);
router.delete("/:userId/:productId", deleteCartItemController);

export default router;
