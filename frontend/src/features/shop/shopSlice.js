import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,

  products: [],
  product: null,
};

export const fetchProductDetail = createAsyncThunk(
  "/products/fetch-product-detail",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/shop/products/${id}`
      );

      console.log("Product Detail Response : ", response);

      return response.data?.product;
    } catch (error) {
      console.log("Error In Fetching Product Detail Axios : ", error);
    }
  }
);

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetch-all-filted-products",
  async ({ filterParams, sortParams }) => {
    try {
      const queryString = new URLSearchParams({
        ...filterParams,
        sort: sortParams,
      });
      const response = await axios.get(
        `http://localhost:8000/api/shop/products?${queryString}`
      );
      console.log("I am Fetched Here : ", response.data);

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
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("Produt Payload Here : ", action.payload);
        state.product = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state) => {
        state.isLoading = false;
        state.products = null;
      });
  },
});

export default shoppingProductSlice.reducer;
