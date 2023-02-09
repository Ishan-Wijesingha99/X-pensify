import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";

export default configureStore({
  reducer: {
    expensesSlice: expensesSlice
  }
})