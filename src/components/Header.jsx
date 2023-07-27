import React from "react";
import { NavLink } from "react-router-dom";
import AircallLogo from "../icons/aircall.svg";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <div id="logo">
        <img src={AircallLogo} />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Calls
            </NavLink>
          </li>
          <li>
            <NavLink
              to="archived"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Archived
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
