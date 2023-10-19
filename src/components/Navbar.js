import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar-container">
        <ul className="nav-bar">
          <li className="about-link">
            <NavLink to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li className="work-link">
            <NavLink to="/work" activeClassName="active-link">
              Work
            </NavLink>
          </li>
          <li className="resume-link">
            <NavLink to="/resume" activeClassName="active-link">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
