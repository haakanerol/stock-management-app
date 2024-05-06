import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user.username;
      state.token = action.payload.token;
    },
    registerSuccess: (state, action) => {},
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    
  },
});

export const { fetchStart, loginSuccess, fetchFail,registerSuccess } = authSlice.actions;
export default authSlice.reducer;
