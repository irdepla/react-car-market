import { createSlice } from "@reduxjs/toolkit";




export const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProducts: (_, action) => {
            return action.payload;
        }
    }
})

export const {addProducts} = productsSlice.actions;