import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../app/authenticationSlice";



const Navbar = () => {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice)

  const dispatch = useDispatch()

  return (
    <Nav className="navbar navcss">
      
      <h1 className="nav-title" style={{ fontFamily: 'Pacifico, cursive' }}>X-pensify</h1>

      {
        isLoggedIn
        ?
        <div className="nav-links-div">

          <NavLink
          className="single-nav-link"
          variant="link"
          to="/"
          >
            Home
          </NavLink>

          <NavLink
          className="single-nav-link"
          variant="link"
          to="/statistics"
          >
            Statistics
          </NavLink>
          
          <Button
          className="single-nav-link"
          variant="link"
          href="/"
          onClick={ () => dispatch(logout()) }>
            Log out
          </Button>

        </div>

        :
        <div style={{ display: "flex" }}>
          <NavLink
          className="single-nav-link"
          to="/signup"
          >
            Sign Up
          </NavLink>

          <NavLink
          className="single-nav-link"
          to="/signin"
          >
            Sign In
          </NavLink>
        </div>
      }

    </Nav>
  )
}

export default Navbar