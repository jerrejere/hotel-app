import React from "react";
import{NavLink} from "react-router-dom";
export function NavBar ()
{
  const navStyle = {
    color:'beige'
  }
    return (
      <nav>
        <ul className="navlink">
        <NavLink style={navStyle} to="/home">
           Home
          </NavLink>
          <NavLink style={navStyle} to="/about">
            About
          </NavLink>
         
          <NavLink style={navStyle} to="/contact">
            Contact
          </NavLink>
        </ul>
      </nav>
    );
}

export default NavBar;