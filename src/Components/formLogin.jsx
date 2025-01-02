import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./formLogin.css";
import eye from "../assets/eye.png";
import hiddenEye from "../assets/hidden.png";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../assets/calendar.svg";
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
  const [startDate, setStartDate] = useState(new Date(2000, 9, 1));
  const [allergies, setAllergies] = useState("");
  const [illnesses, setIllnesses] = useState("");

  const handleSetVisible = () => {
    setVisible(!visible);
  };

  const handlePost = async () => {
    try {
      await axios
        .post(
          "http://medica.smartcloudservices.cloud/auth/register",
          {
            first_name: name,
            last_name: surname,
            date_naissance: startDate,
            maladie_hereditaire: illnesses || null,
            allergies: allergies || null,
            add_email: email,
            username: username,
            password: pass,
            password1: confirmPass,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((succ) => {
          console.log("Success posting data ", succ.data);
          //localStorage.setItem("user", `${succ.data.user_id + "," + username}`);
          localStorage.setItem("userId", JSON.stringify(succ.data.user_id));
          navigate("/welcome");
        });
    } catch (error) {
      console.error("Error response:", error);
    }
  };

  // useEffect(() => {
  //   localStorage.getItem("user") !== null ? navigate("/welcome") : pass;
  // },[]);

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
        <div className="calendarBox">
          <img src={calendarIcon} alt="" />
          <DatePicker
            selected={new Date(startDate)}
            onChange={(date) =>
              setStartDate(new Date(date).toISOString().split("T")[0])
            }
          />
          <h3>DOB</h3>
        </div>
        <div className="deseases-illness">
          <input
            onChange={(e) => setIllnesses(e.target.value)}
            type="text"
            className="illness"
            id="illness"
            placeholder="Allergies"
          />
          <input
            onChange={(e) => setAllergies(e.target.value)}
            type="text"
            className="deseases"
            id="deseases"
            placeholder="Deseases"
          />
        </div>

        <button
          type="button"
          onClick={() => {
            handlePost();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
