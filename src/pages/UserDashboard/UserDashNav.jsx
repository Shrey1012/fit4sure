import React, { useState, useEffect } from "react";
import "./UserDashNav.css";
import home_icon from "../../assets/home_icon.svg";
import explore from "../../assets/explore.svg";
import Community from "../../assets/Community.svg";
import star_circle from "../../assets/star_circle.svg";
import Tools from "../../assets/Tools.svg";
import fflogo_white from "../../assets/fflogo_white.svg";
import settings from "../../assets/settings.svg";
import logout_icon from "../../assets/logout_icon.svg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { AiOutlineClose } from "react-icons/ai";

const UserDashNav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className={`user-dash-navbar ${isMenuOpen ? "open" : ""}`}>
      <nav className={`user-nav ${isMenuOpen ? "open" : ""}`}>
        <div className={`Nav-mid ${isMenuOpen ? "open" : ""}`}>
          <img className="nav-logo" src={fflogo_white} alt="Fit4sure logo" />
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose />
            ) : (
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.995C0 0.445 0.446 0 0.995 0H9.005C9.26889 7.86455e-09 9.52197 0.10483 9.70857 0.291429C9.89517 0.478027 10 0.731109 10 0.995C10 1.25889 9.89517 1.51197 9.70857 1.69857C9.52197 1.88517 9.26889 1.99 9.005 1.99H0.995C0.731109 1.99 0.478028 1.88517 0.291429 1.69857C0.10483 1.51197 0 1.25889 0 0.995ZM0 7C0 6.45 0.446 6.005 0.995 6.005H19.005C19.2689 6.005 19.522 6.10983 19.7086 6.29643C19.8952 6.48303 20 6.73611 20 7C20 7.26389 19.8952 7.51697 19.7086 7.70357C19.522 7.89017 19.2689 7.995 19.005 7.995H0.995C0.731109 7.995 0.478028 7.89017 0.291429 7.70357C0.10483 7.51697 0 7.26389 0 7ZM0.995 12.01C0.731109 12.01 0.478028 12.1148 0.291429 12.3014C0.10483 12.488 0 12.7411 0 13.005C0 13.2689 0.10483 13.522 0.291429 13.7086C0.478028 13.8952 0.731109 14 0.995 14H13.005C13.2689 14 13.522 13.8952 13.7086 13.7086C13.8952 13.522 14 13.2689 14 13.005C14 12.7411 13.8952 12.488 13.7086 12.3014C13.522 12.1148 13.2689 12.01 13.005 12.01H0.995Z"
                  fill="#464646"
                />
              </svg>
            )}
          </div>
          <ul>
            <li>
              <NavLink
                to="/userhome"
                title="Home"
                className={`Userdash-nav-link ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <img src={home_icon} alt="home" />
                <p className={`nav-text ${isMenuOpen ? "open" : ""}`}>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/usercommunity"
                title="Community"
                className={`Userdash-nav-link ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <img src={Community} alt="Community" />
                <p className={`nav-text ${isMenuOpen ? "open" : ""}`}>
                  Community
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/coaches"
                title="Explore Coaches"
                className={`Userdash-nav-link ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <img src={explore} alt="explore" />
                <p className={`nav-text ${isMenuOpen ? "open" : ""}`}>
                  {" "}
                  Explore Coaches
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/showplans"
                title="Plans"
                className={`Userdash-nav-link ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <img src={star_circle} alt="Plans" />
                <p className={`nav-text ${isMenuOpen ? "open" : ""}`}>Plans</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trackers/bmi"
                title="Trackers"
                className={`Userdash-nav-link ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <img src={Tools} alt="Tools" />
                <p className={`nav-text ${isMenuOpen ? "open" : ""}`}>
                  Trackers
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`Nav-bottom ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/usersettings/personal-details"
                title="Settings"
                className={`Userdash-nav-link ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <img src={settings} alt="Settings" />
                <p className={`nav-text ${isMenuOpen ? "open" : ""}`}>
                  Settings
                </p>
              </NavLink>
            </li>
            <li>
              <img
                className={`logout-icon ${isMenuOpen ? "open" : ""}`}
                title="Logout"
                src={logout_icon}
                alt="logout"
                onClick={logout}
              />
              <p className={`nav-text ${isMenuOpen ? "open" : ""}`}>Logout</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default UserDashNav;
