import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading:false, 
    products:[],
 }

 export const createProduct = createAsyncThunk(
    "/products/create-product", 
    async(formData)=>{

        try {
            const response = await axios.post("http://localhost:8000/api/admin/products", formData,{
                headers:{
                    "Content-Type":"application/json", 
                }
            })
    
            return response?.data
            
        } catch (error) {
            
            console.log("Error In Creating Product : ", error)
        }

    }
 )   



 export const fetchAllProducts = createAsyncThunk(
    "/products/fetch-all-product", 
    async()=>{
        try {
            const response = await axios.get("http://localhost:8000/api/admin/products")

            return response?.data
            
        } catch (error) {
            
            console.log("Error In Fetch List Of Product : ", error)
        }
    
    }
 )  
 
 
 export const updateProducts = createAsyncThunk(
    "/products/update-product", 
    async(id, formData)=>{

        try {
            const response = await axios.put(`http://localhost:8000/api/admin/products/${id}`, formData,{
                headers:{
                    "Content-Type":"application/json"
                }
            } )
    
            return response?.data
        } catch (error) {
            console.log("Error In Updating Product : ", error)
            
        }

    }
 ) 
 
 
 export const deleteProduct = createAsyncThunk(
    "/products/delete-product", 
    async(id)=>{
        const response = await axios.delete(`http://localhost:8000/api/admin/products/:${id}`)


    }
 )


const producSlice = createSlice({
    name:"product", 
    initialState,
    reducers:{}, 
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending, (state)=>{
            state.isLoading = true
            
        }).addCase(fetchAllProducts.fulfilled, (state, action)=>{
            state.isLoading = false
            console.log("Fetch All Product : ", action.payload.products)
            state.products = action.payload.products
        }).addCase(fetchAllProducts.rejected, (state)=>{
            state.isLoading = false
            state.products = []
        })

    }
})


// export {}  = producSlice.actions


export default producSlice.reducer