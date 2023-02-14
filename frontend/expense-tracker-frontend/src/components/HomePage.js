import React from "react";
import { ToastContainer } from "react-toastify";
import { ExpenseForm } from "./ExpenseForm";
import { ExpenseList } from "./ExpenseList";


const HomePage = () => {
  return (
    <div style={{width: '60%', margin: 'auto'}}>

      <ToastContainer />

      <ExpenseForm />

      <hr style={{ border: '1px solid grey', marginBottom: '3rem' }}/>

      <ExpenseList />

    </div>
  )
}

export default HomePage
