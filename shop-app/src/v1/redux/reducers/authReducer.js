import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../configs/appInfo";

const userFromStorage = localStorage.getItem(localDataNames.authData);
const tokenFromStorage = localStorage.getItem(localDataNames.tokenData);

const initialValue = {
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  token: tokenFromStorage || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,

  reducers: {
    addAuth: (state, action) => {
      const { USER, TOKEN } = action.payload;

      state.user = USER;
      state.token = TOKEN;
      syncLocal(action.payload);
    },
    clearAuth: (state, action) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem(localDataNames.authData);
      localStorage.removeItem(localDataNames.tokenData);
    },
  },
});

export const authReducer = authSlice.reducer;

export const { addAuth, clearAuth } = authSlice.actions;

export const authSelector = (state) => state.authReducer;

const syncLocal = (data) => {
  const { USER, TOKEN } = data;
  localStorage.setItem(localDataNames.authData, JSON.stringify(USER));
  localStorage.setItem(localDataNames.tokenData, TOKEN);
};
