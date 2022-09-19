import "./styles.scss";
import { NavLink } from "react-router-dom";
import { useState } from 'react';

function Nav() {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
      setShowLinks(!showLinks);
    };

    return (
    <nav className={`navbar ${showLinks ? 'show-nav' : ''} `}>
    <div className="navBar">
      <ul className="navBar-lists">
          <li className="navBar-list" onClick={handleShowLinks}>
            <NavLink to="/">Home</NavLink> 
          </li>
          <li className="navBar-list" onClick={handleShowLinks}>
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="navBar-list" onClick={handleShowLinks}>
            <NavLink to="/Skills">Skills</NavLink>
          </li>
          <li className="navBar-list" onClick={handleShowLinks}>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
      </ul>
      <button className="navBar-btn" onClick={handleShowLinks}>
        <span className="navBar-burger" />
      </button>
    </div>
    </nav>
  );
}

export default Nav;
