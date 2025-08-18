import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingSlide = createSlice({
  name: "loading",
  initialState,

  reducers: {
    loadingAuth: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const loadingReducer = loadingSlide.reducer;

export const { loadingAuth } = loadingSlide.actions;

export const loadingSelector = (state) => state.loadingReducer.loading;
