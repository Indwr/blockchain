import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
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
                        <nav className="navbar navbar-expand-xl  ">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                    <a className="nav-link active ms-0" aria-current="page" href="#">About us</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Ecosystem</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Network</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Partners</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Team</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Whitepaper</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Tokenomics</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Staking</a>
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
    </div>
  );
};

export default Header;
