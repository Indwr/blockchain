import React from "react";
import Header from "../../components/header/Header";
import "./network.css";

const Network = () => {
  return (
    <div>
      <Header />
      <section className="section-padding network">
        <div className="container">
          <div className="row">
            <div className="col12">
              <div className="network-headding">
                <h2 className="heading mb-0">Smart contract</h2>
                <h1 className="sub-heading mb-0">
                Binance Smart Chain Network
                </h1>
                <p className="heading-text">
                The Binance Smart Chain Network is highly safe and secure. Incur low transaction fees and super fast confirmations. And most importantly, the Binance Smart Chain Network connects seamlessly with Metamask and other online wallets!
                </p>
              </div>
              <div className="network-img-box">
                <div className="network-img">
                  <div className="network-img-outer">
                    <img src="assets/images/network-circul.png" alt="" />
                    <div className="network-img-shadow">
                      <img src="assets/images/network-shadow.png" alt="" />
                    </div>
                    <div className="network-icon">
                      <img src="assets/images/network3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="network-img">
                  <div className="network-img-outer">
                    <img src="assets/images/network-circul.png" alt="" />
                    <div className="network-img-shadow">
                      <img src="assets/images/network-shadow.png" alt="" />
                    </div>
                    <div className="network-icon">
                      <img src="assets/images/network2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="network-img">
                  <div className="network-img-outer">
                    <img src="assets/images/network-circul.png" alt="" />
                    <div className="network-img-shadow">
                      <img src="assets/images/network-shadow.png" alt="" />
                    </div>
                    <div className="network-icon">
                      <img src="assets/images/network1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="network-round">
          <img src="assets/images/network-round.png" alt="" />
        </div>
        <div className="about-line">
          <img src="assets/images/about-line.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Network;
