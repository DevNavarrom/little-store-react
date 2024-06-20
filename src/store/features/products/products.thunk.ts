import { Product, Products } from "../../../@types/Product"
import request from "../../../common/request"
import { setProducts } from "./products.slice"
import {type AppDispatch } from "../../store"
import { Response } from "../../../@types/Response"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProducts = () => async(dispatch: AppDispatch) => {
    try {
      const response = await request.get<Products>('/data.json');
      const res = await response;
      
      dispatch(setProducts(res.products));
    } catch (error) {
      console.log('ERROR_FETCH_PRODUCTS',error);
    }
  }

  export const fetchAllProducts = createAsyncThunk<Response<Product>>(
    'products/fetchProducts',
    async () => {
      const response = await fetch('/data.json');
      return (await response.json()) as Response<Product>;
    }
  );