import React from 'react';
import './App.css'
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/mailer">Mail us </Link>
            </li>
          </ul>
        </nav>
  )
}

export default Nav