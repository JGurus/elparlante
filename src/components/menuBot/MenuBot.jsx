import React from 'react'
import { NavLink } from "react-router-dom"
import home from "../../images/icons/home.svg"
import notas from "../../images/icons/notas-adhesivas.svg"
import podcast from "../../images/icons/habla.svg"
import "./MenuBot.css"

const MenuBot = () => {
  return (
    <footer>
      <NavLink to="/"><img src={home} alt="Inicio"></img></NavLink>
      <NavLink to="/notas"><img src={notas} alt="Notas"></img></NavLink>
      <NavLink to="/pdcast"><img src={podcast} alt="Podcast"></img></NavLink>
    </footer>
  )
}

export default MenuBot
