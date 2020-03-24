import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">ResourceManagement</NavLink>

  </nav> 
  );
}

export default NavBar;
