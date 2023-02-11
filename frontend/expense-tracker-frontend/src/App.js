import React from "react";
import { ToastContainer } from "react-toastify";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { SignIn } from "./services/authentication";



const App = () => {
  return (
    <div style={{width: '60%', margin: 'auto'}}
    >

      <ToastContainer />

      <h3>New Expenses</h3>
      <ExpenseForm />

      <hr style={{ border: '1px solid grey' }}/>

      <h3>Your Expenses</h3>
      <ExpenseList />

    </div>
  )
}

export default App;