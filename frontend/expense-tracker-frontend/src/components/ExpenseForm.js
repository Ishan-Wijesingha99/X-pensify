import React, {useState, useEffect} from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { DeleteExpense, EditExpense, NewExpense } from "../services/expenses";
import { useDispatch } from "react-redux";



export const ExpenseForm = ({ expense, setIsEditing }) => {

  const descriptions = ['Groceries', 'Credit Card Payments', 'Student loans', 'Gas']
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState(descriptions[0])
  const [isNewExpense, setIsNewExpense] = useState(true)

  const dispatch = useDispatch()

  const formSubmit = event => {
    event.preventDefault()

    if(isNewExpense) {
      // create new expense
      NewExpense(dispatch, { description, amount: Number(amount) })
    } else {
      // edit expense
      EditExpense(dispatch, { id: expense.id, description, amount: Number(amount) })
      setIsEditing(false)
    }
  }

  useEffect(() => {
    
    if(expense !== undefined) {
      setIsNewExpense(false)
      setAmount(expense.amount)
    } else {
      setIsNewExpense(true)
    }

  }, [expense])

  return (
  <Form onSubmit={formSubmit}>
    <Row>
      <Col>
        <Form.Label>Description</Form.Label>
        <Form.Control
        as="select"
        onChange={event => setDescription(event.target.value)}
        >
          {descriptions.map((singleDesc, i) => <option key={i}>{singleDesc}</option>)}
        </Form.Control>
      </Col>

      <Col>
        <Form.Label>Amount</Form.Label>
        <Form.Control
        type="number"
        step="0.01"
        placeholder={amount}
        onChange={event => setAmount(event.target.value)}
        />
      </Col>

      {/* this is where we conditionally render the button */}
      <div className="mt-4">
        {
          isNewExpense
          ?
          <Button variant="primary" type="submit">
            Add
          </Button>
          :
          <div>
            <Button
            variant="danger"
            style={{ marginRight: '4px'}}
            onClick={() => DeleteExpense(dispatch, expense)}
            >
              Delete
            </Button>

            <Button
            variant="success"
            type="submit"
            style={{ marginRight: '4px'}}
            >
              Save
            </Button>

            <Button
            variant="default"
            onClick={() => setIsEditing(false)}
            style={{ marginRight: '4px'}}
            >
              Cancel
            </Button>
          </div>
        }
      </div>
    </Row>
  </Form>
  )
}