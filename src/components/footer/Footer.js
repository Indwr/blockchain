import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return <div>
    <footer>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-5">
                <div className="footer-box footer-box-logo">
                  <a href=""><img src="assets/images/logo.svg" alt="logo" /></a>
                  <p>Sed ut perspiciatis unde omnis iste us error sit voluptatem accusantium que laudantium.</p>
                  <div className="metapets-games-icon">
                      <ul className="mb-0">
                          <li><img src="assets/images/footer-tw.svg" alt="" /></li>
                          <li><img src="assets/images/footer-game.svg" alt="" /></li>
                          <li><img src="assets/images/footer-mail.svg" alt="" /></li>
                          <li><img src="assets/images/footer-img4.svg" alt="" /></li>
                          <li><img src="assets/images/footer-img5.svg" alt="" /></li>
                      </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-2 col-md-4 col-sm-6">
                <div className="footer-box footer-box1">
                  <h4 className="footer-heading">Documents</h4>
                  <ul className="footer-link">
                    <li><a href="">Cookies policy</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms and Conditions</a></li>
                  </ul>
                </div>
              </div>
              <div className=" col-xl-2 col-md-3 col-sm-6">
              <div className="footer-box ">
                  <h4 className="footer-heading">Resources</h4>
                  <ul className="footer-link">
                    <li><a href="#">Whitepaper</a></li>
                    <li><a href="#">Litepaper</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Api</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5">
              <div className="footer-box footer-box-mail">
                  <h4 className="footer-heading">Subscribe us</h4>
                  <p>Subscribe to our newsletter</p>
                  <div className="footer-form">
                    <input type="text" placeholder="Enter email address"/>
                    <div className="btn-outer1" >
                    <a className="comman-btn btn-outer" href="#">
                      Subscribe
                      <img src="assets/images/button-border.svg" alt="button-border" />
                    </a>
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
  </div>;
};

export default Footer;
