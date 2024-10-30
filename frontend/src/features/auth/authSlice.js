import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";






export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (formData, {rejectWithValue}) =>{
        try {
            const response = await axios.post("http://localhost:8000/api/auth/register", formData,{
                withCredentials:true,
            })

            return response.data
            
        } catch (error) {
            return rejectWithValue(error.response ? error.message : "An error occurred")
            
        }
    }
)

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async(formData, {rejectWithValue})=>{
        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", formData, {
                withCredentials:true
            })


            return response.data
            
        } catch (error) {
            rejectWithValue(error.response ? error.messge:"An error occurred")

            
        }
    }
)
export const logout = createAsyncThunk(
    "auth/logout", 
    async()=> {
        const response = await axios.post("http://localhost:8000/api/auth/logout",{}, {
            withCredentials:true
        })
        return response
    }
)

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (_, { rejectWithValue }) => {  // Pass `_` since you don't use arguments
        try {
            const response = await axios.get("http://localhost:8000/api/auth/check-auth", {
                withCredentials: true,
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                },
            });

            console.log(response)
            return response.data; // Return the response data as the payload
        } catch (error) {
            // Return the error message with `rejectWithValue` to handle it properly in the reducer
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(registerUser.pending, (state)=>{
            state.isLoading = true
        }).addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.user = action.payload.data
            state.isAuthenticated = false
        }).addCase(registerUser.rejected, (state)=>{
            state.isLoading = false,
            state.user = null
            state.isAuthenticated = false
            

        }).addCase(loginUser.pending, (state)=>{
            state.isLoading = true
            state.isAuthenticated = false
        }).addCase(loginUser.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isAuthenticated= action?.payload?.success ? true:false
            state.user = action?.payload?.success ? action?.payload?.user: null
        }).addCase(loginUser.rejected, (state, error)=>{
            state.isLoading = false,
            state.isAuthenticated = false
            state.user = null
        }).addCase(checkAuth.pending, (state)=>{
            state.isLoading = true
            state.isAuthenticated = false
        }).addCase(checkAuth.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isAuthenticated= action?.payload?.success ? true:false
            state.user = action?.payload?.success ? action?.payload?.user: null
        }).addCase(checkAuth.rejected, (state, error)=>{
            state.isLoading = false,
            state.isAuthenticated = false
            state.user = null
        }).addCase(logout.pending, (state)=>{
            state.isLoading = true
        }).addCase(logout.fulfilled, (state, _)=>{
            state.isAuthenticated = false
            state.isLoading = false
            state.user = null

        }).addCase(logout.rejected, (state)=>{
            state.isLoading = false
            
        })
    }
})


// export const {login} = authSlice.actions;
export default authSlice.reducer;