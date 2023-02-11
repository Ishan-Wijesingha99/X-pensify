import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";



const App = () => {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => (isLoggedIn ? <HomePage /> : <SignInPage />)} />
        <Route exact path="signup" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
        <Route exact path="signin" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;