import React, { useState } from "react";

import Header from "../../components/header/Header";
import "./network.css";

const Network = () => {
  const [active, setActive] = useState(false);
  const [autoplayy, setAutoPlay] = useState(false);
  const changeStyle = (e) => {
    setActive(true);
    setAutoPlay(true);
  };
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
              <div className="ecosystem-img-box">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <div className="ecosystem-img">
                  <div
                    className="ecosystem-img-box-outer"
                    onClick={(e) => changeStyle(e.target)}
                    style={{ display: active ? "none" : "block" }}
                  >
                    <img
                      src="assets/images/ecosystem-video-thumbnail.png"
                      alt=""
                    />
                    <div className="play-btn">
                      <img src="assets/images/play-btn2.svg" alt="" />
                    </div>
                  </div>
                  {autoplayy && (
                    <video
                      style={{ display: active ? "block" : "none" }}
                      src="assets/images/metapets-video.mp4"
                      width="750"
                      height="500"
                      controls
                      autoPlay
                    ></video>
                  )}
                  {!autoplayy && (
                    <video
                      style={{ display: active ? "block" : "none" }}
                      src="assets/images/metapets-video.mp4"
                      width="750"
                      height="500"
                      controls
                    ></video>
                  )}
                </div>
              </div>
            </div>
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
