// this file is responsible for making the http requests to the database, all CRUD
import { setExpenses, newExpense, editExpense, deleteExpense, setExpensesError, newExpenseError, editExpenseError, deleteExpenseError } from "../app/expensesSlice"
import axios from "axios"



const axiosInstance = axios.create({
  baseURL: `https://api-expense-tracker.azurewebsites.net/Expenses`
})

// for all these http request, you need to send the token with it or the backend won't be able to process it, so do this
axiosInstance.interceptors.request.use(config => {
  config.headers = { authorization: `Bearer ${sessionStorage.getItem("token")}`}
  return config
})


export const GetExpenses = async (dispatch) => {
  try {

    // make API call
    const { data } = await axiosInstance.get();

    dispatch(setExpenses(data.reverse()))

  } catch (error) {
    dispatch(setExpensesError())
    console.log(error)
  }
}



export const NewExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    const { data } = await axiosInstance.post("", expenseObject);

    dispatch(newExpense(data))

  } catch (error) {
    dispatch(newExpenseError())
    console.log(error)
  }
}



export const EditExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    await axiosInstance.put("", expenseObject)

    dispatch(editExpense(expenseObject))

  } catch (error) {
    dispatch(editExpenseError())
    console.log(error)
  }
}



export const DeleteExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    await axiosInstance.delete("", { 
      data: { ...expenseObject } 
    });

    dispatch(deleteExpense(expenseObject));

  } catch (error) {
    dispatch(deleteExpenseError())
    console.log(error)
  }
}