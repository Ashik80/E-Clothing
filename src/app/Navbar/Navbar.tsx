import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const toggle = () => setNavToggle(!navToggle);

  return (
    <div style={{ position: "fixed", width: "100%", top: 0 }}>
      <nav>
        <div className="logo"></div>
        <h2 className="nav-brand">Brand</h2>
        <div className={navToggle ? "active-nav" : "collapse"}>
          <ul className="nav-list">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="nav-toggler" onClick={toggle}>
          <i className="fa fa-bars" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
