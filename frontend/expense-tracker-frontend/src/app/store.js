import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expensesReducer";

export default configureStore({
  reducer: {
    expensesReducer: expensesReducer
  }
})