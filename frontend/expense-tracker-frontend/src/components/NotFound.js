import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";



const NotFound = () => {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice)

  return (
    <div style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
      <h2>Page Not Found</h2>

      {
        isLoggedIn
        ?
        (
        <Button
        className="sign-in-button"
        style={{ marginTop: '2rem' }}
        href="/"
        >
          Return Home
        </Button>
        )
        :
        (
        <Button
        className="sign-in-button"
        style={{ marginTop: '2rem' }}
        href="/signin"
        >
          Return to Sign In
        </Button>
        )
      }
    </div>
  )
}

export default NotFound