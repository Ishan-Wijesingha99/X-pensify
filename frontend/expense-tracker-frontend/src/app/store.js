import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";
import authenticationSlice from "./authenticationSlice";
import ToastMiddleware from "../middleware/ToastMiddleware";



export default configureStore({
  reducer: {
    authenticationSlice: authenticationSlice,
    expensesSlice: expensesSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ToastMiddleware)
})