import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Be Better</h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              {item.icon ? <i className={item.icon}></i> : item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
