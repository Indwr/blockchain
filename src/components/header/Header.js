import React from "react";
import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
import "../../assets/css/common.css";
import "./header.css";

const Header = () => {
  return (
    <div>
      <header>
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <a href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
                    </div>
                    <div className="menu">
                        <nav className="navbar navbar-expand-xl p-0 ">
                            <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon">
                                    <span className="toggle-menu" data-toggle-menu>
                                        Toggle menu
                                        <span className="menu__bar"></span>
                                        <span className="menu__bar"></span>
                                        <span className="menu__bar"></span>
                                    </span>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                    <Link className="nav-link active ms-0" aria-current="page" to={"/about"}>About us</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link " to={"/ecosystem"}>Ecosystem</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link " to={"/network"}>Network</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link " to={"/partners"}>Partners</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link " to={"/team"}>Team</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link " to={"/whitepaper"}>Whitepaper</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link " to={"/tokenomics"}>Tokenomics</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link " to={"/staking"}>Staking</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="menu-left">
                            <div className="theme-toggle">
                                <img src="assets/images/theme-toggle.svg" alt="theme-toggle" />
                            </div>
                            <div className="dropdown">
                                <div className="flag-img">
                                    <img src="assets/images/flag-bg.png" alt="" />
                                </div>
                                <button className=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                   <img src="assets/images/flag.svg" alt="flag" />
                                   
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                  <li><a className="dropdown-item" href="#">Action</a></li>
                                  <li><a className="dropdown-item" href="#">Another action</a></li>
                                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
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
