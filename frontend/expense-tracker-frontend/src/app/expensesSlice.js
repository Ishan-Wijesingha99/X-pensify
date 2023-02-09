import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: []
  },
  reducers: {
    setExpenses: (state, action) => {
      return { ...state, expenses: [...action.payload] }
    },
    newExpense: (state, action) => {
      return { ...state, expenses: [action.payload, ...state.expenses] }
    },
    editExpense: (state, action) => {

      const expenses = state.expenses.map(expenseObject => {
        if(expenseObject.id === action.payload.id) {
          expenseObject = action.payload
        }
        return expenseObject
      })

      return { ...state, expenses: [...expenses] }
    },
    deleteExpense: (state, action) => {
      const expenses = state.expenses.filter(expenseObject => expenseObject.id !== action.payload.id)

      return { ...state, expenses: [...expenses] }
    }
  }
})

export const { setExpenses, newExpense, editExpense, deleteExpense } = expensesSlice.actions

export default expensesSlice.reducer