import React from "react";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import { Button, Row, Col} from 'react-bootstrap'
import { ExpenseForm } from "./ExpenseForm";



const ListRow = ({ expense }) => {

  const [isEditing, setIsEditing] = useState(false)

  return (
    isEditing
    ?
    (
      <ExpenseForm
      expense={expense}
      setIsEditing={setIsEditing}
      />
    )
    :
    (
      <div>
        <Row>
          <Col>
            {expense.description}
          </Col>
    
          <Col>
            ${expense.amount}
          </Col>
    
          <Col>
            <Button
            variant="warning"
            onClick={() => setIsEditing(!isEditing)}
            >
              Edit
            </Button>
          </Col>
        </Row>

        <hr />
      </div>
    )
  )
  
}



export const ExpenseList = () => {
  // useSelector is used to read things in the global store (get), useDispatch is used to change the store (set) 

  const dispatch = useDispatch()
  const expensesArray = useSelector(state => state.expensesSlice.expenses)

  useEffect(() => {
    GetExpenses(dispatch)
  }, [])

  return (
    expensesArray.map(object => (
      <div key={object.id} className="mb-4">
        <ListRow expense={object} />
      </div>
    ))
  )

}

