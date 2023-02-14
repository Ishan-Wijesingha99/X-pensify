import React, { useState } from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SignUp } from "../services/authentication";



const SignUpPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()



  const submitFunction = event => {
    event.preventDefault()

    SignUp(dispatch, {
      id: 0,
      username: username,
      password: password,
      email: email
    })
  }

  return (
    <div>
      <Form
      className="sign-form"
      onSubmit={submitFunction}
      >

        <h4 className="create-an-account">Create an Account to Use X-pensify!</h4>

        <InputGroup className="mb-4">
          <FormControl
          className="form-input-class"
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
          ></FormControl>
        </InputGroup>

        <InputGroup className="mb-4">
          <FormControl
          className="form-input-class"
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
          ></FormControl>
        </InputGroup>

        <InputGroup className="mb-4">
          <FormControl
          className="form-input-class"
          placeholder="Password"
          type="password"
          onChange={event => setPassword(event.target.value)}
          ></FormControl>
        </InputGroup>

        <InputGroup className="mb-4">
          <FormControl
          className="form-input-class"
          placeholder="Confirm Password"
          type="password"
          onChange={event => setConfirmPassword(event.target.value)}
          ></FormControl>
        </InputGroup>

        <Button
        className="sign-up-button"
        type="submit"
        style={{ margin: "auto", display: "block", width: "10rem"}}
        disabled={ password !== confirmPassword || password.length <= 0 || confirmPassword <= 0 || username <= 0 || email <= 0 }
        >
          Sign Up
        </Button>

      </Form>
    </div>
  )
}

export default SignUpPage