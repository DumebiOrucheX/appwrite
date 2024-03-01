import React from 'react';

import "../styles/nav.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <h1 id="logo"><Link style={{textDecoration:"none", color:"black"}} to="/">Beta Thread</Link></h1>

        <div id="nav-beta">
            <button id="nav-beta2"><Link style={{textDecoration:"none", color:"white"}} to="login">Login</Link></button>
            <button id="nav-beta2"><Link style={{textDecoration:"none", color:"white"}} to="signup">Sign Up</Link></button>
        </div>
    </nav>
  )
}

export default Navbar