import React from "react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import { Button, Row, Col} from 'react-bootstrap'


const ListRow = ({ expense }) => {
  return <div>
    <Row>
      <Col>
        {expense.description}
      </Col>

      <Col>
        {expense.amount}
      </Col>

      <Col>
        <Button variant="warning">Edit</Button>
      </Col>
    </Row>
    <hr />
  </div>
}




export const ExpenseList = () => {
  // useSelector is used to read things in the global store (get), useDispatch is used to change the store (set) 

  const dispatch = useDispatch()
  const expensesArray = useSelector(state => state.expensesReducer.expenses)

  console.log(expensesArray)

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

