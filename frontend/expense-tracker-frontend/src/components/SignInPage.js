import React, { useState } from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SignIn } from "../services/authentication";



const SignInPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const submitFunction = event => {
    event.preventDefault()

    SignIn(dispatch, {
      id: 0,
      username: username,
      password: password,
      email: "string"
    })
  }

  return (
    <div>
      <Form
      className="sign-form"
      onSubmit={submitFunction}
      >

        <h4 className="sign-in-to-continue">Sign In to Continue!</h4>

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
          placeholder="Password"
          type="password"
          onChange={event => setPassword(event.target.value)}
          ></FormControl>
        </InputGroup>

        <Button
        className="sign-in-button"
        type="submit"
        style={{ margin: "auto", display: "block", width: "10rem"}}
        disabled={ password.length <= 0 || username <= 0 }
        >
          Sign In
        </Button>

      </Form>
    </div>
  )
}

export default SignInPage