import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./ecosystem.css";
// import video from '../../../../public/assets/images/metapets-video.mp4'

const Ecosystem = () => {
  const [active, setActive] = useState(false);
  const changeStyle = (e) => {
    setActive(true);
  };
  return (
    <div>
      <Header />
      <section className="ecosystem section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ecoysystem-inner">
                <div className="ecoysystem-inner-heading">
                  <h2 className="heading mb-0">MetaPets</h2>
                  <h1 className="sub-heading mb-0">Ecosystem</h1>
                  <p className="heading-text">
                  For projects to thrive, it is required for many moving parts to work closely together.
                  </p>
                </div>
                <div className="ecosystem box">
                  <img
                    src="assets/images/metapets-plasma-logo-reveal.gif"
                    alt=""
                  />
                </div>
                <div className="ecosystem-content">
                  <div className="row">
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        {/* <img className="partner-box-img1" src="assets/images/parner-box.png" alt="" /> */}
                        <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem1.svg" alt="" />
                          <h5>Charity </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem2.svg" alt="" />
                          <h5>Giveaways</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem3.svg" alt="" />
                          <h5>Cross-Chain</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem4.svg" alt="" />
                          <h5>Dapps</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem5.svg" alt="" />
                          <h5>Metaverse</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem6.svg" alt="" />
                          <h5>Games</h5>
                        </div>
                      </div>
                    </div>
                    {/* </div>
                                <div className="row cosystem-content1"> */}
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 ">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem7.svg" alt="" />
                          <h5>3D Games</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem8.svg" alt="" />
                          <h5>2D Games</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem9.svg" alt="" />
                          <h5>VR/AR Games</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem10.svg" alt="" />
                          <h5>Custom Pets</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem11.svg" alt="" />
                          <h5>NFT</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                      <img className="patner-box-black partner-box-img1" src="assets/images/parner-box.png" alt="" />
                        <img className="patner-box-white partner-box-img1" src="assets/images/partner-box-white.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem12.svg" alt="" />
                          <h5>NFT Games</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <video
                    style={{ display: active ? "block" : "none" }}
                    src="assets/images/metapets-video.mp4"
                    width="750"
                    height="500"
                    controls
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ecosystem half-round">
          <img src="assets/images/half-round.png" alt="" />
        </div>
        <div className="ecosystem round">
          <img src="assets/images/ecosystem-round.png" alt="" />
        </div>
        <div className="about-line">
          <img src="assets/images/about-line.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
