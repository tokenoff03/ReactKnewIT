import '../App.css';
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <img  className="Header_logo" src="./images/logoMovie.jpg"  alt="logo"/>
      <ul className="Header_ul header_text">
      <NavLink to="/" className={(navData) => (navData.isActive ? "active" : "")}><li>Home</li></NavLink>
      <NavLink to="/profile"><li>Profile</li></NavLink>
      <NavLink to="/favorites"><li>Favorites</li></NavLink>
      <NavLink to="/films"><li>Films</li></NavLink>
      <NavLink to="/serials"><li>Serials</li></NavLink>
        
      </ul>
    </div>
  );
}

export default Header;