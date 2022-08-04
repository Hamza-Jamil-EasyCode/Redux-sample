import React, { useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { firebaseConfig } from "../../Libs/firebase";
firebase.initializeApp(firebaseConfig);

const Phone = ({}) => {
  const [phone, setPhone] = useState("");

  const changeHandler = (setState) => (e) => setState(e.target.value);

  const _submit = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    e.target.reset();
  };

  return (
    <div>
      Phone Verification
      <form onSubmit={_submit}>
        <label htmlFor="">Phone</label>
        <input type="text" onChange={changeHandler(setPhone)} />
        <br />
        <div id="recaptcha-container"></div>
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};

Phone.propTypes = {};

export default Phone;
