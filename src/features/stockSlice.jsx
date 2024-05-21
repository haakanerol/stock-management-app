import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases:[],
  sales:[],
  firms: [],
  brands: [],
  products:[],
  categories:[],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getStockSuccess:(state,{payload:{path,stockData}})=>{
      state.loading=false
      state.error = false;
      state[path]=stockData
    },
    
    // firmsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.firms = payload;
    // },
    // brandsSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.brands = payload;
    // },
    getStockForPurchSuccess:(state,{payload})=>{
      state.loading=false
      state.error = false;
      state.products=payload.products
      state.purchases=payload.purchases
      state.brands=payload.brands
      state.firms=payload.firms
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getStockSuccess, fetchFail,getStockForPurchSuccess } = stockSlice.actions;

export default stockSlice.reducer;
