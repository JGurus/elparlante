import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/elparlante/" exact>
          <h1>El Parlante</h1>
        </NavLink>
        <ul className="lowplus">
          <li>
            <NavLink to="/elparlante/" exact>
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink to="/elparlante/notas">NOTAS</NavLink>
          </li>
          <li>
            <NavLink to="/elparlante/podcast">PODCAST</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
