import React from "react";
import { NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink className="navbar-a" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-a" to="/tomas">
            Tomas
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-a" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-a" to="/users">
            Users
          </NavLink>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Layout;
