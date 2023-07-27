import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Calls</NavLink>
          </li>
          <li>
            <NavLink to="archived">Archived</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
