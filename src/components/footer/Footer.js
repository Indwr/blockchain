import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-5">
              <div className="footer-box footer-box-logo">
                <Link to={"/home"}>
                  <img src="assets/images/logo.svg" alt="logo" />
                </Link>
                <p>
                  Sed ut perspiciatis unde omnis iste us error sit voluptatem
                  accusantium que laudantium.
                </p>
                <div className="metapets-games-icon-footer">
                  <div className="metapets-games-icon mb-0">
                    <ul className="mb-0">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={"https://twitter.com/Metapetscoin"}
                        >
                          <img src="assets/images/footer-tw.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={"https://discord.com/invite/NQKR42dVmm"}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img src="assets/images/footer-game.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={"https://t.me/metapets"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="assets/images/footer-mail.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={"https://www.reddit.com/user/Metapets"}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img src="assets/images/footer-img4.svg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={"https://linktr.ee/metapets"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="assets/images/footer-img5.svg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-2 col-md-4 col-sm-6">
              <div className="footer-box footer-box1">
                <h4 className="footer-heading">Documents</h4>
                <ul className="footer-link">
                  <li>
                    <Link to={"/cookies"}>Cookies policy</Link>
                  </li>
                  <li>
                    <Link to={"/privacy"}>Privacy</Link>
                  </li>
                  <li>
                    <Link to={"/terms"}>Terms and Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-xl-2 col-md-3 col-sm-6">
              <div className="footer-box ">
                <h4 className="footer-heading">Resources</h4>
                <ul className="footer-link">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://metapetsmerchandise.com"}
                    >
                      Merchandise
                    </a>
                  </li>
                  <li>
                    <Link to={"/whitepaper"}>Whitepaper</Link>
                  </li>
                  <li>
                    <Link to={"/home"}>Litepaper</Link>
                  </li>
                  <li>
                    <Link to={"/home"}>Support</Link>
                  </li>
                  <li>
                    <Link to={"/home"}>Api</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5">
              <div className="footer-box footer-box-mail">
                <h4 className="footer-heading">Subscribe us</h4>
                <p>Subscribe to our newsletter</p>
                <div className="footer-form">
                  <input type="text" placeholder="Enter email address" />
                  <div className="btn-outer1">
                    <button className="comman-btn btn-outer">
                      Subscribe
                      <img
                        src="assets/images/button-border.svg"
                        alt="button-border"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>© Meta Pets 2022, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
