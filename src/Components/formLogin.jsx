import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./formLogin.css";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import eye from "../assets/eye.png";
import hiddenEye from "../assets/hidden.png";

const FormLogin = () => {
  const [visible, setVisible] = useState(false);
  const handleSetVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className="formLogin">
      <h1>Create an account</h1>
      <h5>
        Already have an account ?<NavLink>Log in</NavLink>
      </h5>

      <form action="">
        <input
          type="text"
          className="firstName"
          id="firstName"
          placeholder="First name"
        />
        <input
          type="text"
          className="lastName"
          id="lastName"
          placeholder="Last name"
        />
        <input type="email" className="email" id="email" placeholder="Email" />
        <span>
          <input
            type={visible ? "text" : "password"}
            className="password"
            id="password"
            placeholder="Enter your password"
          />
          <img
            onClick={() => handleSetVisible()}
            src={visible ? eye : hiddenEye}
            alt="eyeState"
          />
        </span>
        <input type="submit" value="Create Account" />
      </form>

      <div className="signUp">
        <hr />
        <span>or sign up with</span>
        <hr />
      </div>

      <div className="options">
        <NavLink>
          <img src={google} alt="google" />
          <span>Google</span>
        </NavLink>
      </div>
    </div>
  );
};

export default FormLogin;
