import React from "react";
import Buscar from "../buscar/Buscar";
import "./MenuTop.css";

const MenuTop = () => {
  return (
    <header className="menutop">
      <nav>
        <h1>El Parlante</h1>
        <Buscar />
      </nav>
    </header>
  );
};

export default MenuTop;
