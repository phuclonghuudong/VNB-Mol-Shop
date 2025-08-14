import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../configs/appInfo";

const initialState = {
  token: "",
  account: "",
  customer: "",
  role: "",
  fullname: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: { data: initialState },

  reducers: {
    addAuth: (state, action) => {
      const { USER, TOKEN } = action.payload;

      state.data = {
        account: USER.accountId,
        customer: USER.customerId,
        role: USER.roleId,
        fullname: USER.fullname,
        token: TOKEN,
      };
      syncLocal(action.payload);
    },
    clearAuth: (state, action) => {
      state.data = initialState;
      syncLocal({});
    },
    refreshToken: (state, action) => {
      state.data.token = action.payload.TOKEN;
    },
  },
});

export const authReducer = authSlice.reducer;

export const { addAuth, clearAuth, refreshToken } = authSlice.actions;

export const authSelector = (state) => state.authReducer.data;

const syncLocal = (data) => {
  localStorage.setItem(localDataNames.authData, JSON.stringify(data));
};
