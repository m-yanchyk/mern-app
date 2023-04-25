import React from "react";
import { Link } from "react-router-dom";
import links from "../../utils/links";
import UserIcon from "../../assets/icons/user.svg";
import BasketIcon from "../../assets/icons/shopping-cart.svg";

export default function Navbar() {
  const auth = localStorage.getItem("auth");
  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="navbar">
          <Link to={links.main} className="navbar-logo">
            комікси
          </Link>
          <div className="navbar-links">
            {auth ? (
              <Link to={links.settings} className="navbar-link">
                User
              </Link>
            ) : (
              <Link to={links.auth} className="navbar-link">
                <div className="navbar-link__circle">
                  <img src={UserIcon} alt="User icon" />
                </div>
              </Link>
            )}
            <Link to={links.basket} className="navbar-link">
              <div className="navbar-link__circle">
                <img src={BasketIcon} alt="User icon" />
              </div>
            </Link>
            <Link to={links.aboutUs} className="navbar-link">
              Про нас
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
