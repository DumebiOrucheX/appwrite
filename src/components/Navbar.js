import React from 'react';

import "../styles/nav.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles={
    textDecoration: 'none',
    color: 'black',
  }
  var styles2={
    textDecoration: 'none',
    color: 'white',
  }
  return (
    <nav>
        <h1 id="logo"><Link style={styles} to="/">Beta Thread</Link></h1>

        <div id="nav-beta">
            <button id="nav-beta2"><Link style={styles2} to="/login">Login</Link></button>
            <button id="nav-beta2"><Link style={styles2} to="/signup">Sign Up</Link></button>
        </div>
    </nav>
  )
}

export default Navbar
