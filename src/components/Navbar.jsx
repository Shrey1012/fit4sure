import React, { useState } from "react";
import "./Navbar.css";
import fflogo from "../assets/fflogo.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
    <nav className='nav'>
        <div className='left_nav'><a href='/'><img src={fflogo} alt="Fit4sure logo" /></a></div>
        <ul>
          <li>
            <NavLink
              to="/getcoach"
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              Get a coach
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plans"
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              Plans
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              Career
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactus"
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
        <button
          className="btn"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign in
        </button>
      </nav>
      <hr className="line" />
    </div>
  );
};

export default Navbar;
