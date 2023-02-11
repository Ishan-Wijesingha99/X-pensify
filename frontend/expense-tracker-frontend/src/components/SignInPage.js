import React from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";



const SignInPage = () => {
  return (
    <div>
      <Form style={{ width: "30rem", margin: "auto", paddingTop: "8px" }}>

        <h4 style={{ textAlign: 'center' }}>Welcome back!</h4>

        <InputGroup classname="mb-3">
          <FormControl placeholder="Username"></FormControl>
        </InputGroup>

        <InputGroup classname="mb-3">
          <FormControl placeholder="Password" type="password"></FormControl>
        </InputGroup>

        <Button
        type="submit"
        variant="primary"
        style={{ margin: "auto", display: "block", width: "10rem"}}
        >
          Sign In
        </Button>

      </Form>
    </div>
  )
}

export default SignInPage