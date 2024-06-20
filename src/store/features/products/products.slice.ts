import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "../../../@types/Product";
import type { RootState } from "../../store";
import { fetchAllProducts } from "./products.thunk";
import { Response, ResponseProducts } from "../../../@types/Response";



const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProductStock: (state, action: PayloadAction<{ id: string; quantity: number; }>) => {
            const product = state.products.find((prod) => prod.id === action.payload.id);
            if (product) {
                product.amount -= action.payload.quantity;
            }
        },
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action?.payload;
        },
        addProducts: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action?.payload?.data?.products;
          })
          .addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? 'Failed to fetch products';
          });
      }
});

export const selectProducts = (state: RootState) => state.products.products;

export const { setProducts, updateProductStock, addProducts } = productSlice.actions;