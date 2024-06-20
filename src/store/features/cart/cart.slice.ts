import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemCart } from "../../../@types/ItemCard";


interface CartState {
    items: ItemCart[];
    total: number;
}

const initialState: CartState = {
    items: [],
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ItemCart>) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item)
                item.quantity += action.payload.quantity;
            else
                state.items.push(action.payload);

            state.total += action.payload.price * action.payload.quantity;
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
        increment: (state, action: PayloadAction<ItemCart>) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                state.total += action.payload.price;
            }
        },
        decrement: (state, action: PayloadAction<ItemCart>) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity -= 1;
                state.total -= action.payload.price;
            }

            const itemIndex = state.items.findIndex((i) => i.id === item?.id && item.quantity===0);
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemIndex = state.items.findIndex((i) => i.id === action.payload);
            if (itemIndex !== -1) {
              state.total -= state.items[itemIndex].price * state.items[itemIndex].quantity;
              state.items.splice(itemIndex, 1);
            }
        },
        updateQuantity: (state, action: PayloadAction<{id: string, qty: number}>) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.qty;

                state.total = 0;
                state.items.forEach(it => {
                    state.total += it.price * it.quantity
                });
            }
        }
    }
});

export const { addToCart, clearCart, increment, decrement, removeFromCart, updateQuantity } = cartSlice.actions;