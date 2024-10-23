import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/features/auth/authSlice";
import productSlice from "@/features/product/productSlice"




const store = configureStore({
    reducer:{
        auth:authSlice,
        product:productSlice
    }
})


export  default store