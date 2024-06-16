import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../@types/Product";

const initialState: Product[] = [];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => action.payload,
        updateProductStock: (state, action: PayloadAction<{ id: number; quantity: number; }>) => {
            const product = state.find((prod) => prod.id === action.payload.id);
            if (product) {
                product.amount -= action.payload.quantity;
            }
        }
    }
});

export const { setProducts, updateProductStock } = productSlice.actions;
export default productSlice.reducer;