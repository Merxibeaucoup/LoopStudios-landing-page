import React, { useState } from "react";
import { navItems } from "../data/navItems";

const Header = () => {
  const [state] = useState({
    logo: "images/logo.svg",
  });

  const showNav = () => {
    const menuBtn = document.querySelector(".header__menu-btn");
    const navBar = document.querySelector(".header__nav");

    menuBtn.addEventListener("click", () => {
      navBar.classList.toggle("open");
      menuBtn.classList.toggle("rotate");
    });
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={state.logo} alt={state.logo} />
        </div>

        {/* Navs */}
        <nav className="header__nav ">
          <div className="header__nav__logo">
            <img src={state.logo} alt={state.logo} />
          </div>
          {navItems.map((item, index) => (
            <ul key={index}>
              <li>
                <button>{item.name}</button>
              </li>
            </ul>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="header__menu-btn " onClick={() => showNav()}>
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
