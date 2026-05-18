import { createSlice } from "@reduxjs/toolkit";
import { coffeeData } from "../data/CoffeeData";

const initialState = {
    input: "",
    cate: coffeeData,
    showCart: false,
    cartItems: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {

        // Search

        setInput: (state, action) => {

            state.input = action.payload;

            state.cate = coffeeData.filter((item) =>
                item.title
                    .toLowerCase()
                    .includes(action.payload.toLowerCase())
            );
        },

        // Cart Sidebar

        openCart: (state) => {
            state.showCart = true;
        },

        closeCart: (state) => {
            state.showCart = false;
        },

        // Add To Cart

        addToCart: (state, action) => {

            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {

                existingItem.quantity += 1;

            } else {

                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        // Increase Quantity

        increaseQty: (state, action) => {

            const item = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },

        // Decrease Quantity

        decreaseQty: (state, action) => {

            const item = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        // Delete Item

        removeItem: (state, action) => {

            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        }
    }
})

export const {
    setInput,
    openCart,
    closeCart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem
} = cartSlice.actions;

export default cartSlice.reducer;