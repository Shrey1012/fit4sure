import React, { useState, useEffect } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { signin } from "../actions/auth";
import signin_left from "../assets/signin_left.svg";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCredentialResponse = (response) => {
    if (response.credential) {
      // Success scenario
      const credential = jwtDecode(response.credential);

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
      theme: "outline",
      width: "350px",
      height: "48px",
      shape: "rectangular",
      text: "signin_with",
    });
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const userObject = { email, password };
    dispatch(signin(userObject, navigate));
  };

  return (
    <div className="Signin-main">
      <div className="Signin-left">
        <img src={signin_left} alt="Sign in" />
      </div>
      <div className="Signin-right">
        <h2>Welcome back!</h2>
        <h3>Sign in to continue.</h3>
        <div className="Signin-right-mid">
          <div className="Input-part">
            <label htmlFor="email">Email</label>
            <input className="email-input"
              id="email"
              type="text"
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
              <input className="email-input"
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
        </div>
        <button className="S-button" onClick={handleSignIn}>
          Signin
        </button>
        <p>-or-</p>
        <button id="g-button"></button>
        <div className="Signin-switch">
          Haven't registered yet?{" "}
          <span
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;