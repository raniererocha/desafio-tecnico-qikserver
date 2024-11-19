import { createSlice } from "@reduxjs/toolkit";
import { ItemsInterface } from "../../types";

interface CartStateInterface {
    cart: Array<ItemsInterface & { quantity: number }>
}
const initialState: CartStateInterface = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productAlreadyInCart = state.cart.some(product => product.id === action.payload.id)
            if (productAlreadyInCart) {
                state.cart = state.cart.map(product => {
                    if (product.id === action.payload.id) {
                        return {...product, quantity: product.quantity + 1}
                    }
                    return {...product, quantity: 1}
                })
            }
            state.cart = [...state.cart, {...action.payload, quantity: 1}]
        }
    }
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer