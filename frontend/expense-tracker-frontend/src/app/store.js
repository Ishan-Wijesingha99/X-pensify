import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";
import ToastMiddleware from "../middleware/ToastMiddleware";



export default configureStore({
  reducer: {
    expensesSlice: expensesSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ToastMiddleware)
})