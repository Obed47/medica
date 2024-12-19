import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./formLogin.css";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import eye from "../assets/eye.png";
import hiddenEye from "../assets/hidden.png";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSetVisible = () => {
    setVisible(!visible);
  };

  const handlePost = () => {
    console.log(name, surname, pass);
    axios
      .post("http://192.168.1.101:8001/register", {
        first_name: name,
        last_name: surname,
        date_naissance: "2000-02-23",
        add_email: email,
        username: username,
        password: pass,
        password1: confirmPass,
      })
      .then((response) => {
        console.log("success sent" + response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="formLogin">
      <h1>Create an account</h1>
      <h5>
        Already have an account ?<NavLink>Log in</NavLink>
      </h5>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="firstName"
          id="firstName"
          placeholder="First name"
        />
        <input
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          className="lastName"
          id="lastName"
          placeholder="Last name"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="email"
          id="email"
          placeholder="Email"
        />

        <span>
          <input
            onChange={(e) => setPass(e.target.value)}
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
        <span>
          <input
            onChange={(e) => setConfirmPass(e.target.value)}
            type={visible ? "text" : "password"}
            className="password"
            id="password2"
            placeholder="Confirm Password"
          />
          <img
            onClick={() => handleSetVisible()}
            src={visible ? eye : hiddenEye}
            alt="eyeState"
          />
        </span>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="userName"
          id="userName"
          placeholder="Choose a username"
        />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <input
          type="text"
          className="diseases"
          id="diseases"
          placeholder="Inherited diseases"
        />
        <input
          type="text"
          className="illness"
          id="illness"
          placeholder="illness"
        />
        <button
          type="button"
          onClick={() => {
            handlePost();
            navigate("/illnesses");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
