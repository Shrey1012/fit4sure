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
import closee from "../../assets/closee.svg";
import ham_burger from "../../assets/ham_burger.svg";

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
              <><img src={closee} alt="" /></>
            ) : (
              <><img src={ham_burger} alt="" /></>
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
                to="/schedule"
                title="Schedules"
                className={`Userdash-nav-link ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <img src={Tools} alt="Tools" />
                <p className={`nav-text ${isMenuOpen ? "open" : ""}`}>
                  Schedules
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
