// this file is responsible for making the http requests to the database, all CRUD

import { ActionCreators } from "../app/expensesReducer"





export const GetExpenses = async (dispatch) => {
  try {

    // make API call
    const expenses = [
      {
        id: 1,
        description: "Groceries",
        amount: 22.99
      },
      {
        id: 2,
        description: "Gas",
        amount: 62.99
      },
      {
        id: 3,
        description: "Student loans",
        amount: 54.00
      },
      {
        id: 4,
        description: "Travel",
        amount: 210.00
      },
    ]

    dispatch(ActionCreators.setExpenses(expenses))

  } catch (error) {
    console.log(error)
  }
}



export const NewExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    dispatch(ActionCreators.NewExpense(
      { 
        id: 10,
        description: expenseObject.description,
        amount: expenseObject.amount
      }
    ))
  } catch (error) {
    console.log(error)
  }
}



export const EditExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    dispatch(ActionCreators.editExpense(expenseObject))

    // if the api call to edit the expense is successful, instead of making another api call to get the entire list of expenses again, we can just edit/change that expense in the frontend, and next time the user reloads, the updated expense list will be retrieved from the database
  } catch (error) {
    console.log(error)
  }
}



export const DeleteExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    dispatch(ActionCreators.deleteExpense(expenseObject))

    // if the api call to delete the expense is successful, instead of making another api call to get the entire list of expenses again, we can just delete that expense in the frontend, and next time the user reloads, the updated expense list will be retrieved from the database
  } catch (error) {
    console.log(error)
  }
}