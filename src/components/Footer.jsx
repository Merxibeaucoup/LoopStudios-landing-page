import React, { useState } from "react";
import { footerItems } from "../data/footerItems";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [state] = useState({
    logo: "images/logo.svg",
  });
  return (
    <>
      <footer className="footer">
        <div className="footer__logo">
          <img src={state.logo} alt="" />
        </div>

        <div className="footer__items">
          {footerItems.map((item) => (
            <ul key={item.id}>
              <li>
                <button>{item.name}</button>
              </li>
            </ul>
          ))}
        </div>
        <div>
          <ul className="footer__socials">
            <li>
              <GrFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <div>
            <p className="footer__copyright">
              {" "}
              &copy; {new Date().getFullYear()} Loopstudios. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
