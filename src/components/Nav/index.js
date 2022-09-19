import "./styles.scss";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
  <div className="navBar">
    <ul className="navBar-lists">
        <li className="navBar-list">
           <NavLink to="/">Home</NavLink> 
        </li>
        <li className="navBar-list">
          <NavLink to="/About">About</NavLink>
        </li>
        <li className="navBar-list">
          <NavLink to="/Skills">Skills</NavLink>
        </li>
        <li className="navBar-list">
          <NavLink to="/Contact">Contact</NavLink>
        </li>
    </ul>
  </div>
  );
}

export default Nav;
