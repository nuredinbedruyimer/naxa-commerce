import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,

  products: [],
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetch-all-filted-products",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/shop/products"
      );
      console.log("Filtered Product Response: ", response);

      return response.data?.products;
    } catch (error) {
      console.log("Error In Fetch Filtered List Of Product : ", error);
    }
  }
);

const shoppingProductSlice = createSlice({
  name: "filteredProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("Filtered Fetched Product : ", action.payload);
        state.products = action.payload;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state) => {
        state.isLoading = false;
        state.products = [];
      });
  },
});

export default shoppingProductSlice.reducer;
