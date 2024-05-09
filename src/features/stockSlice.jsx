import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  brands: [],
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
    firmsSuccess: (state, { payload }) => {
      state.loading = false;
      state.firms = payload;
    },
    brandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.brands = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, firmsSuccess,brandsSuccess, fetchFail } = stockSlice.actions;

export default stockSlice.reducer;
