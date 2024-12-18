import { createSlice } from "@reduxjs/toolkit";




export const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: 0
    },
    reducers: {
        addProducts: (_, action) => {
            return action.payload;
        }
    }
})

export const {addProduct} = productsSlice.actions;