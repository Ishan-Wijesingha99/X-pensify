import axios from "axios"
import { userAuthenticated } from "../app/authenticationSlice"



const axiosInstance = axios.create({
  baseURL: `https://api-expense-tracker.azurewebsites.net/Authentication`
})



export const SignUp = async (dispatch, credentials) => {
  try {
    // api call
    const { data } = await axiosInstance.post("/signup", credentials) // if this line of code fails, the catch block will be executed

    dispatch(userAuthenticated(data))
  } catch (error) {
    console.log(error)
  }
}

export const SignIn = async (dispatch, credentials) => {
  try {
    // api call
    const { data } = await axiosInstance.post("/signin", credentials) // if this line of code fails, the catch block will be executed
    
    dispatch(userAuthenticated(data))
  } catch (error) {
    console.log(error)
  }
}