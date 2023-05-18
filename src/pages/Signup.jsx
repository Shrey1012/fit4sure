import React, { useState, useEffect } from "react";
import "./Signup.css";
import googleLogo from "../assets/googleLogo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { signup } from "../actions/auth";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCredentialResponse = (response) => {
    if (response.credential) {
      // Success scenario
      const credential = jwtDecode(response.credential);

      console.log(credential);

      // Send the Google authentication response to the server
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential }),
      };

      fetch("http://localhost:3001/app/user/google_auth", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          dispatch({ type: "AUTH", data });
          navigate("/userhome");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else if (response.error) {
      // Failure scenario
      console.error(response.error);
    }
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "1002107096117-rfrnaeb8hkdc1b38dkd1i636lelr2oib.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(document.getElementById("g-button"), {
      theme: "filled_blue",
      size: "large",
      shape: "rectangular",
    });
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const userObject = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };
      dispatch(signup(userObject, navigate));
    }
  };

  return (
    <div className="Signup-main">
      <div className="Signup-left"></div>
      <div className="Signup-right">
        <h2>Create an account</h2>
        <div className="Input-part">
          <label htmlFor="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="Input-part">
          <label htmlFor="lastname">Last Name</label>
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="Input-part">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="Input-part">
          <label htmlFor="password">Password</label>
          <div className="Password-input">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {showPassword ? (
              <FaEyeSlash
                className="Password-toggle"
                onClick={handleTogglePassword}
              />
            ) : (
              <FaEye
                className="Password-toggle"
                onClick={handleTogglePassword}
              />
            )}
          </div>
        </div>
        <div className="Input-part">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            id="confirm"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button className="S-button" onClick={handleSignUp}>
          Sign Up
        </button>
        <p>-or-</p>
        <button id="g-button"></button>
        <div className="Signup-switch">
          Already have an account?{" "}
          <span
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
