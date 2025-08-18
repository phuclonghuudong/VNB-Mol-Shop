import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { loadingReducer } from "./reducers/loadingReducer";

export const store = configureStore({
  reducer: {
    authReducer,
    loadingReducer,
  },
});
