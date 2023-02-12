import React from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { userAuthenticated } from "./app/authenticationSlice";
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";



const App = () => {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice)

  const dispatch = useDispatch()

  useEffect(() => {
    const token = sessionStorage.getItem("token")

    if(token !== undefined && token !== null) {
      dispatch(userAuthenticated({ token }))
    }
  }, [])

  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" render={() => (isLoggedIn ? <HomePage /> : <SignInPage />)} />
        <Route exact path="/signup" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
        <Route exact path="/signin" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;