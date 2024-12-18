import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            return {value: state.value + 1};
        },
        decrement: (state) => {
            return {value: state.value -1};
        }
    }
})


export const {increment, decrement} = counterSlice.actions;