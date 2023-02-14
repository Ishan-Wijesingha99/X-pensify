import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { userAuthenticated } from "./app/authenticationSlice";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import StatisticsPage from "./components/StatisticsPage";
import NotFound from "./components/NotFound";



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
        <Route path="/signup" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignUpPage />)} />
        <Route path="/signin" render={() => (isLoggedIn ? <Redirect to='/' /> : <SignInPage />)} />
        <Route path="/statistics" render={() => (isLoggedIn ? <StatisticsPage /> : <SignInPage />)} />
        <Route render={() => <NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;