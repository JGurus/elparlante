import React from "react";
import { NavLink } from "react-router-dom"
import lupa from "../../images/icons/buscar.svg"
import "./Buscar.css";

const Buscar = () => {
  return <div>
    <NavLink><img src={lupa} alt="buscar" /></NavLink>
  </div>;
};

export default Buscar;
