import React, { useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase/app";
import { firebaseConfig } from "../../Libs/firebase";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
firebase.initializeApp(firebaseConfig);


const SignUp = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (setState) => (e) => setState(e.target.value);

  const _submit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        debugger;
        // send verification mail.
        console.log(userCredential.user);
        userCredential.user.sendEmailVerification();
        auth.signOut();
        alert("Email sent");
      })
      .catch(alert);
  };

  return (
    <div>
      Sign Up
      <form onSubmit={_submit}>
        <label htmlFor="">Email</label>
        <input type="email" onChange={changeHandler(setEmail)} />
        <br />
        <label htmlFor="">Password</label>
        <input type="text" onChange={changeHandler(setPassword)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
