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

    if(error.response.status === 409) {
      return "Username already exists"
    } else {
      return "Sign Up Failed"
    }

  }
}

export const SignIn = async (dispatch, credentials) => {
  try {
    // api call
    const { data } = await axiosInstance.post("/signin", credentials) // if this line of code fails, the catch block will be executed
    
    dispatch(userAuthenticated(data))
  } catch (error) {
    console.log(error)
    
    if(error.response.status === 401) {
      return "Username and/or password incorrect"
    } else {
      return "Login Failed"
    }
  }
}