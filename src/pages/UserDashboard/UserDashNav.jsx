import React,{useState, useEffect} from 'react'
import './UserDashNav.css'
import home_icon from '../../assets/home_icon.svg';
import explore from '../../assets/explore.svg';
import Community from '../../assets/Community.svg';
import star_circle from '../../assets/star_circle.svg';
import Tools from '../../assets/Tools.svg';
import fflogo_white from '../../assets/fflogo_white.svg';
import { NavLink,useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Avatar from 'react-avatar';

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
        <img className='nav-logo' src={fflogo_white} alt="Fit4sure logo" />
        {user?.result ? (
          <div className='user-nav-profile'>
            {user?.result?.image ? (
            <img src={user?.result?.image} alt="profile"/> ) : (
            <Avatar name={user?.result?.name} size="50" round={true} />
            )}
            <p style={{color:"white"}}>{user?.result?.name}</p>
          </div>
        ) : (null)}
        <img src="" alt="" />
        <NavLink to='/userhome' className={`Userdash-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
            <img src={home_icon} alt="home" />
        </NavLink>
        <NavLink to='/UserCommunity'  className={`Userdash-nav-link ${({isActive}) => (isActive ? 'active' : '')}`}>
          <img src={Community} alt="Community" />
        </NavLink>
        {/* <img src={home_icon} alt="home" /> */}
        
        <img src={explore} alt="explore" />
        <img src={Community} alt="Community" />
        <img src={Tools} alt="Tools" />
        <img src={explore} alt="logout" onClick={logout} />
    </nav>
    </div>

  )
}

export default UserDashNav