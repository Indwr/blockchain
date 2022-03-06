// import React from "react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext, themes } from "../themes/ThemeContext";

import "../../assets/css/common.css";
import "../../assets/css/white.css";
import "./header.css";

const Header = () => {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(true);
  const [themeMode, setThemeMode] = useState(true);
  const changeThemeMode = () => {
    if (themeMode === true) {
      setThemeMode(false);
    } else {
      setThemeMode(true);
    }
  };
  if (location.pathname !== "/home") {
    document.body.classList.remove("home-bg");
  } else {
    document.body.classList.add("home-bg");
  }
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <Link to={"/home"}>
                <img
                  className="logo-black"
                  src="assets/images/logo.svg"
                  alt="logo"
                />
                <img
                  className="logo-white"
                  src="assets/images/logo-white.svg"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="menu">
              <nav className="navbar navbar-expand-xl p-0 ">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="menu-close">
                    <img
                      className="menu-logo menu-logo-black"
                      src="assets/images/menu-logo.svg"
                      alt="log"
                    />
                    <img
                      className="menu-logo menu-logo-white"
                      src="assets/images/logo-white.svg"
                      alt="log"
                    />
                    <button
                      className="navbar-toggler p-0 d-xxl-none ms-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 0.666656C6.62667 0.666656 0.666672 6.62666 0.666672 14C0.666672 21.3733 6.62667 27.3333 14 27.3333C21.3733 27.3333 27.3333 21.3733 27.3333 14C27.3333 6.62666 21.3733 0.666656 14 0.666656ZM19.7333 19.7333C19.2133 20.2533 18.3733 20.2533 17.8533 19.7333L14 15.88L10.1467 19.7333C9.62667 20.2533 8.78667 20.2533 8.26667 19.7333C7.74667 19.2133 7.74667 18.3733 8.26667 17.8533L12.12 14L8.26667 10.1467C7.74667 9.62666 7.74667 8.78666 8.26667 8.26666C8.78667 7.74666 9.62667 7.74666 10.1467 8.26666L14 12.12L17.8533 8.26666C18.3733 7.74666 19.2133 7.74666 19.7333 8.26666C20.2533 8.78666 20.2533 9.62666 19.7333 10.1467L15.88 14L19.7333 17.8533C20.24 18.36 20.24 19.2133 19.7333 19.7333Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link active ms-0"
                        aria-current="page"
                        to={"/about"}
                      >
                        About us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to={"/ecosystem"}>
                        Ecosystem
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to={"/network"}>
                        Network
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to={"/partner"}>
                        Partners
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to={"/team"}>
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to={"/whitepaper"}>
                        Whitepaper
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to={"/tokenomics"}>
                        Tokenomics
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to={"/staking"}>
                        Staking
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="menu-left">
                <div className="theme-toggle">
                  <label className="toggle">
                    <ThemeContext.Consumer>
                      {({ changeTheme }) => (
                        <input
                          className="toggle-checkbox"
                          type="checkbox"
                          onChange={() => {
                            changeThemeMode();
                            setDarkMode(!darkMode);
                            changeTheme(darkMode ? themes.light : themes.dark);
                          }}
                          checked={themeMode}
                        />
                      )}
                    </ThemeContext.Consumer>
                    <div className="toggle-switch"></div>
                  </label>
                  <img
                    className="d-none"
                    src="assets/images/theme-toggle.svg"
                    alt="theme-toggle"
                  />
                </div>
                <div className="dropdown">
                  <div className="flag-img">
                    <img
                      className="flag-bg"
                      src="assets/images/flag-bg.png"
                      alt=""
                    />
                    <img
                      className="flag-bg-white"
                      src="assets/images/flag-bg-white.png"
                      alt=""
                    />
                  </div>
                  <button
                    className=" dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="assets/images/flag.svg" alt="flag" />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link to={"/home"} className="dropdown-item">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link to={"/home"} className="dropdown-item">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link to={"/home"} className="dropdown-item">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
                <button
                  className="navbar-toggler p-0 d-xxl-none ms-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <span className="toggle-menu" data-toggle-menu>
                      Toggle menu
                      <span className="menu__bar"></span>
                      <span className="menu__bar"></span>
                      <span className="menu__bar"></span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-space"></div>
    </div>
  );
};

export default Header;
