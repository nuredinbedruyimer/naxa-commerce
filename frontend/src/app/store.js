import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/features/auth/authSlice";
import productSlice from "@/features/product/productSlice";
import shoppingProductSlice from "@/features/shop/shopSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    shoppingProducts: shoppingProductSlice,
  },
});

export default store;
