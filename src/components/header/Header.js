import React from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ThemeContext, themes } from "../themes/ThemeContext";

import "../../assets/css/common.css";
import "./header.css";

const Header = () => {
  // const [darkMode, setDarkMode] = useState(true);
  // const [themeMode, setThemeMode] = useState(true);
  // const changeThemeMode = () => {
  //   if (themeMode === true) {
  //     setThemeMode(false);
  //   } else {
  //     setThemeMode(true);
  //   }
  // };
  return (
    <div>
      <header>
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <Link to={"/home"}>
                <img src="assets/images/logo.svg" alt="logo" />
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
                      className="menu-logo"
                      src="assets/images/menu-logo.svg"
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
                        <img
                          className="menu-close-icon"
                          src="assets/images/close.svg"
                          alt="icon"
                        />
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
                  {/* <label className="toggle">
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
                  </label> */}
                  <img
                    src="assets/images/theme-toggle.svg"
                    alt="theme-toggle"
                  />
                </div>
                <div className="dropdown">
                  <div className="flag-img">
                    <img src="assets/images/flag-bg.png" alt="" />
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
