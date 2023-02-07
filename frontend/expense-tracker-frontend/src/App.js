import React from "react";
import { ExpenseList } from "./components/ExpenseList";


const App = () => {
  return (
    <div style={
      {width: '60%', margin: 'auto'}
    }
    >
      <h3>Your Expenses</h3>
      <ExpenseList />
    </div>
  )
}

export default App;