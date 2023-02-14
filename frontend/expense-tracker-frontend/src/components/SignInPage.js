import React, { useState } from "react";
import { Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SignIn } from "../services/authentication";



const SignInPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [incorrectCredentials, setIncorrectCredentials] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)

  const dispatch = useDispatch()

  const submitFunction = event => {
    event.preventDefault()

    SignIn(dispatch, {
      id: 0,
      username: username,
      password: password,
      email: "string"
    }).then(res => {
      console.log(res)

      if(res === "Username and/or password incorrect") {
        console.log('this should be executed')
        setIncorrectCredentials(true)
      } else if(res === "Login Failed") {
        setLoginFailed(true)
      } else {
        setIncorrectCredentials(false)
        setLoginFailed(false)
      }
    })
  }

  return (
    <div>
      <Form
      className="sign-form"
      onSubmit={submitFunction}
      >

        <h4 className="sign-in-to-continue">Sign In to Continue!</h4>

        <InputGroup className="mt-4">
          <FormControl
          type="text"
          className="form-input-class"
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
          />
        </InputGroup>

        <InputGroup className="mt-4">
          <FormControl
          type="password"
          className="form-input-class"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
          />
        </InputGroup>

        <Button
        className="sign-in-button"
        type="submit"
        style={{ margin: "auto", display: "block", width: "10rem"}}
        disabled={ password.length <= 0 || username <= 0 }
        >
          Sign In
        </Button>

        {incorrectCredentials && (<p className="form-err-message">Username and/or password incorrect</p>)}
        {loginFailed && (<p className="form-err-message">Login Failed</p>)}

      </Form>
    </div>
  )
}

export default SignInPage