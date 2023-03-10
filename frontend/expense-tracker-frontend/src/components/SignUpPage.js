import React, { useState } from "react";
import { Form, FormControl, InputGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SignUp } from "../services/authentication";
import { useForm } from "react-hook-form";



const SignUpPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("yeet")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [passwordsNotMatching, setPasswordsNotMatching] = useState(false)
  const [usernameAlreadyExists, setUsernameAlreadyExists] = useState(false)
  const [signUpFailed, setSignUpFailed] = useState(false)

  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitFunction = () => {

    if(password !== confirmPassword) {
      setPasswordsNotMatching(true)
    } else {
      
      SignUp(dispatch, {
        id: 0,
        username: username,
        password: password,
        email: email
      }).then(res => {
        if(res === "Username already exists") {
          setUsernameAlreadyExists(true)
        } else if(res === "Sign Up Failed") {
          setSignUpFailed(true)
        } else {
          setUsernameAlreadyExists(false)
          setSignUpFailed(false)
        }
      })

    }
  }

  return (
    <div>
      <Form
      className="sign-form"
      onSubmit={handleSubmit(submitFunction)}
      >

        <h4 className="create-an-account">Create an Account to Use X-pensify!</h4>

        <InputGroup className="mt-4">
          <FormControl
          type="text"
          className="form-input-class"
          placeholder="Username"
          {...register("uname", {
            required: true,
            minLength: 5
          })}
          onChange={event => setUsername(event.target.value)}
          />
        </InputGroup>
        {errors.uname && (<p className="form-err-message">Must be at least 5 characters</p>)}


        <InputGroup className="mt-4">
          <FormControl
          type="text"
          className="form-input-class"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          onChange={event => setEmail(event.target.value)}
          />
        </InputGroup>
        {errors.email && (<p className="form-err-message">Must be a valid email address</p>)}


        <InputGroup className="mt-4">
          <FormControl
          type="password"
          className="form-input-class"
          placeholder="Password"
          {...register("pword", {
            required: true,
            minLength: 5
          })}
          onChange={event => setPassword(event.target.value)}
          />
        </InputGroup>
        {errors.pword && (<p className="form-err-message">Must be at least 5 characters</p>)}


        <InputGroup className="mt-4">
          <FormControl
          type="password"
          className="form-input-class"
          placeholder="Confirm Password"
          onChange={event => setConfirmPassword(event.target.value)}       
          />
        </InputGroup>
        {passwordsNotMatching && (<p className="form-err-message">Passwords not matching</p>)}


        <Button
        className="sign-up-button"
        type="submit"
        style={{ margin: "auto", display: "block", width: "10rem"}}
        >
          Sign Up
        </Button>

        {usernameAlreadyExists && (<p className="form-err-message">Username already exists</p>)}
        {signUpFailed && (<p className="form-err-message">Sign Up failed</p>)}

      </Form>
    </div>
  )
}

export default SignUpPage