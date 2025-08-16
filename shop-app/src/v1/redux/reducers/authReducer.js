import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../configs/appInfo";

const savedData = localStorage.getItem(localDataNames.authData);

const initialData = {
  token: "",
  account: "",
  user: "",
  role: "",
  fullname: "",
};

const initialState = {
  data: savedData ? JSON.parse(savedData) : initialData,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    addAuth: (state, action) => {
      const { USER, TOKEN } = action.payload;

      state.data = {
        account: USER.accountId,
        user: USER.userId,
        role: USER.role,
        fullname: USER.fullname,
        token: TOKEN,
      };
      syncLocal(state.data);
    },
    clearAuth: (state, action) => {
      state.data = initialState;
      syncLocal({});
    },
    refreshToken: (state, action) => {
      state.data.token = action.payload.TOKEN;
      syncLocal(state.data);
    },
  },
});

export const authReducer = authSlice.reducer;

export const { addAuth, clearAuth, refreshToken } = authSlice.actions;

export const authSelector = (state) => state.authReducer.data;

const syncLocal = (data) => {
  localStorage.setItem(localDataNames.authData, JSON.stringify(data));
};
