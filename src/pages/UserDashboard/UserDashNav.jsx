import React,{useState, useEffect} from 'react'
import './UserDashNav.css'
import home_icon from '../../assets/home_icon.svg';
import explore from '../../assets/explore.svg';
import Community from '../../assets/Community.svg';
import star_circle from '../../assets/star_circle.svg';
import Tools from '../../assets/Tools.svg';
import fflogo_white from '../../assets/fflogo_white.svg';
import settings from '../../assets/settings.svg';
import logout_icon from '../../assets/logout_icon.svg';
import { NavLink,useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

const UserDashNav = () => {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if(token){
      const decodedToken = jwtDecode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);

  return (
    <div className='user-dash-navbar'>
      <nav className='user-nav'> 
          <div className='Nav-mid'>
            <img className='nav-logo' src={fflogo_white} alt="Fit4sure logo" />
            <NavLink to='/userhome' title='Home' className={`Userdash-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
              <img src={home_icon} alt="home" />
            </NavLink>
            <NavLink to='/usercommunity' title='Community'  className={`Userdash-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
              <img src={Community} alt="Community" />
            </NavLink>
            <NavLink to='/coaches' title='Explore Coaches'  className={`Userdash-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
            <img src={explore} alt="explore" />
            </NavLink>
            <NavLink to='/showplans' title='Plans'  className={`Userdash-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
            <img src={star_circle} alt="Plans" /> 
            </NavLink>
            <NavLink to='/trackers/bmi' title='Trackers'  className={`Userdash-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
            <img src={Tools} alt="Tools" />
            </NavLink>
          </div>
          <div className='Nav-bottom'>
            <NavLink to='/usersettings/personal-details' title='Settings'  className={`Userdash-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
              <img src={settings} alt="Settings" />
            </NavLink>
            <img className='logout-icon' title='Logout' src={logout_icon} alt="logout" onClick={logout} />
          </div>
    </nav>
    </div>

  )
}

export default UserDashNav