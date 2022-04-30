import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import "./Login.css";
import { login } from "./features/userSlice"

function Login() {

    const dispatch = useDispatch();
    const signIn = () => {
       auth.signInWithPopup(provider).then(({user}) => {
           dispatch(login({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoURL,
           }))
       })
       .catch(error => alert(error.message))
    }

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png"
          alt="logo"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
            Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
