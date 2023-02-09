// this file is responsible for making the http requests to the database, all CRUD

import { ActionCreators } from "../app/expensesReducer"
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: 'https://localhost:44397/Expenses',
})


export const GetExpenses = async (dispatch) => {
  try {

    // make API call
    const { data } = await axiosInstance.get();

    dispatch(ActionCreators.setExpenses(data))

  } catch (error) {
    console.log(error)
  }
}



export const NewExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    const { data } = await axiosInstance.post("", expenseObject);

    dispatch(ActionCreators.NewExpense(data))

  } catch (error) {
    console.log(error)
  }
}



export const EditExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    await axiosInstance.put("", expenseObject)

    dispatch(ActionCreators.editExpense(expenseObject))

  } catch (error) {
    console.log(error)
  }
}



export const DeleteExpense = async (dispatch, expenseObject) => {
  try {
    // api call
    await axiosInstance.delete("", expenseObject);

    dispatch(ActionCreators.deleteExpense(expenseObject));

  } catch (error) {
    console.log(error)
  }
}