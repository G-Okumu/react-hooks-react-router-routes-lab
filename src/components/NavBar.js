import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function NavBar() {
  return <div className="nav">

    <NavLink
      to="/"
      exact="true"
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      exact="true"
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
      Movies
    </NavLink>


    <NavLink
      to="/directors"
      exact="true"
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}

    > Directors</NavLink>


    <NavLink
      to="/actors"
      exact="true"
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}

    >
      Actors
    </NavLink>



  </div>;
}

export default NavBar;
