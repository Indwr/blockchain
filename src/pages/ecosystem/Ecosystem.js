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
                  <h2 className="heading mb-0">Lorem Ipsum</h2>
                  <h1 className="sub-heading mb-0">EcoSystem</h1>
                  <p className="heading-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
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
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem1.svg" alt="" />
                          <h5>Sed ut perspic</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem2.svg" alt="" />
                          <h5>atis unde omnis</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem3.svg" alt="" />
                          <h5>iste natus error</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem4.svg" alt="" />
                          <h5>sit voluptatem</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem5.svg" alt="" />
                          <h5>accusantium</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem6.svg" alt="" />
                          <h5>doloremque</h5>
                        </div>
                      </div>
                    </div>
                    {/* </div>
                                <div className="row cosystem-content1"> */}
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem7.svg" alt="" />
                          <h5> laudantium totam</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem8.svg" alt="" />
                          <h5>laudantium totam</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem9.svg" alt="" />
                          <h5> ipsa quae ab illo </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem10.svg" alt="" />
                          <h5>inventore itatis</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem11.svg" alt="" />
                          <h5>et quasi archit</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/ecosystem12.svg" alt="" />
                          <h5>beatae vitae dicta</h5>
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
                      src="assets/images/christin-hume-slbqShqAhEo-unsplash.jpg"
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
      </section>
    </div>
  );
};

export default Ecosystem;
