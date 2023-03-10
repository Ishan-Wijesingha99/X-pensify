import React, {useState, useEffect} from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { DeleteExpense, EditExpense, NewExpense } from "../services/expenses";
import { useDispatch } from "react-redux";



export const ExpenseForm = ({ expense, setIsEditing }) => {

  const descriptions = ['Rent', 'Mortgage', 'Transport', 'Food', 'Utilities', 'Insurance', 'Medical/Healthcare', 'Investments', 'Debt Payments', 'Gifts', 'Subscriptions', 'Recreation', 'Miscellaneous', 'Grooming/Self-care', 'Fuel', 'Education', 'Pets', 'Retirement Contributions', 'Clothing', 'Household Items', 'Charity']

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
  <>
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

        {/* this is where we conditionally render which button, remember, we are using this component for adding a new expense at the top but also editing an expense in the expense list */}
        <div className="mt-4">
          {
            isNewExpense
            ?
            <Button
            className="submit-button"
            type="submit"
            disabled = { amount <= 0 }
            >
              Add
            </Button>
            :
            <div>
              <Button
              variant="danger"
              style={{ marginRight: '0.5rem'}}
              onClick={() => DeleteExpense(dispatch, expense)}
              >
                Delete
              </Button>

              <Button
              variant="success"
              type="submit"
              style={{ marginRight: '0.5rem'}}
              disabled = { amount <= 0 }
              >
                Save
              </Button>

              <Button
              variant="secondary"
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
  </>
  )
}