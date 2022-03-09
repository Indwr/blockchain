import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./staking.css";
const Staking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <section className="section-padding staking">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="staking-heading">
                <h2 className="heading mb-0">Stake your MetaPets and earn</h2>
                <h1 className="sub-heading mb-0">MetaPets Coin </h1>
                <p className="heading-text">
                  Stake your MetaPets tokens and earn MetaPets coins
                </p>
              </div>
              <div className="staking-content">
                <div className="staking-box">
                  <img
                    className="staking-black"
                    src="assets/images/staking-frame.png"
                    alt=""
                  />
                  <img
                    className="staking-white"
                    src="assets/images/staking-white-bg.png"
                    alt=""
                  />
                  <div className="staking frame-img">
                    <img src="assets/images/meta-coin.svg" alt="" />
                    <h3>
                      APY <span>*</span>{" "}
                    </h3>
                    <p className="mb-0">Flexible no lock up</p>
                  </div>
                </div>
                <div className="staking-box staking-box-bg">
                  <img
                    className="staking-black"
                    src="assets/images/staking-frame.png"
                    alt=""
                  />
                  <img
                    className="staking-white"
                    src="assets/images/staking-white-bg.png"
                    alt=""
                  />
                  <div className="staking frame-img">
                    <img src="assets/images/meta-coin.svg" alt="" />
                    <h3>
                      APY <span>*</span>{" "}
                    </h3>
                    <p className="mb-0">30 Days</p>
                  </div>
                </div>
                <div className="staking-box">
                  <img
                    className="staking-black"
                    src="assets/images/staking-frame.png"
                    alt=""
                  />
                  <img
                    className="staking-white"
                    src="assets/images/staking-white-bg.png"
                    alt=""
                  />
                  <div className="staking frame-img">
                    <img src="assets/images/meta-coin.svg" alt="" />
                    <h3>
                      APY <span>*</span>{" "}
                    </h3>
                    <p className="mb-0">90 Days</p>
                  </div>
                </div>
                {/* </div>
                            <div className="staking-content"> */}
                <div className="staking-box">
                  <img
                    className="staking-black"
                    src="assets/images/staking-frame.png"
                    alt=""
                  />
                  <img
                    className="staking-white"
                    src="assets/images/staking-white-bg.png"
                    alt=""
                  />
                  <div className="staking frame-img">
                    <img src="assets/images/meta-coin.svg" alt="" />
                    <h3>
                      APY <span>*</span>{" "}
                    </h3>
                    <p className="mb-0">180 Days</p>
                  </div>
                </div>
                <div className="staking-box">
                  <img
                    className="staking-black"
                    src="assets/images/staking-frame.png"
                    alt=""
                  />
                  <img
                    className="staking-white"
                    src="assets/images/staking-white-bg.png"
                    alt=""
                  />
                  <div className="staking frame-img">
                    <img src="assets/images/meta-coin.svg" alt="" />
                    <h3>
                      APY <span>*</span>{" "}
                    </h3>
                    <p className="mb-0">360 Days</p>
                  </div>
                </div>
                <div className="staking-box">
                  <img
                    className="staking-black"
                    src="assets/images/staking-frame.png"
                    alt=""
                  />
                  <img
                    className="staking-white"
                    src="assets/images/staking-white-bg.png"
                    alt=""
                  />
                  <div className="staking frame-img">
                    <img src="assets/images/meta-coin.svg" alt="" />
                    <h3>
                      APY <span>*</span>{" "}
                    </h3>
                    <p className="mb-0">720 Days</p>
                  </div>
                </div>
              </div>
              <div className="stalking-heading">
                <p className="mb-0">APY VALUES TBA*</p>
              </div>
            </div>
          </div>
        </div>
        <div className="stakin-circul">
          <img src="assets/images/staking-circul.png" alt="" />
        </div>
        <div className="about-line">
          <img src="assets/images/about-line.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Staking;
