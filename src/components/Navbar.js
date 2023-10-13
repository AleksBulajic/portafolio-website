import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar-container">
        <ul className="nav-bar">
          <li>
            <NavLink to="/" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" activeClassName="active-link">
              Work
            </NavLink>
          </li>
          <li>
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
