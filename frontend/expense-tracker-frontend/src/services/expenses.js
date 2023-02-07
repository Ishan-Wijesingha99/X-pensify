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