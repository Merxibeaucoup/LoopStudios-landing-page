import React, { useState } from "react";
import { navItems } from "../data/navItems";

const Header = () => {
  const [state] = useState({
    logo: "images/logo.svg",
  });

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={state.logo} alt={state.logo} />
        </div>

        {/* Navs */}
        <nav className="header__nav">
          {navItems.map((item, index) => (
            <ul key={index}>
              <li>
                <button>{item.name}</button>
              </li>
            </ul>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="header__menu-btn">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-2"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
