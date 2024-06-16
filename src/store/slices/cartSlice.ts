import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    total: number;
}

const initialState: CartState = {
    items: [],
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
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
        }
    }
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;