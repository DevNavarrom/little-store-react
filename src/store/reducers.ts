import { combineReducers } from '@reduxjs/toolkit'
import { productSlice } from './features/products/products.slice'
import { cartSlice } from './features/cart/cart.slice'

export const rootReducer = combineReducers({
  products: productSlice.reducer,
  cart: cartSlice.reducer
})