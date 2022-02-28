import React from "react";
import Header from "../../components/header/Header";
import "./ecosystem.css";
// import video from '../../../../public/assets/images/metapets-video.mp4'

const Ecosystem = () => {
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
                <div className="ecosystem box"></div>
                <div className="ecosystem-content">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/5a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/marketcap.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/1a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/2a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/3a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/4a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* </div>
                                <div className="row cosystem-content1"> */}
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/5a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/marketcap.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/1a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/2a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/3a.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div className="partner-box">
                        <img src="assets/images/parner-box.png" alt="" />
                        <div className="partner-box-img">
                          <img src="assets/images/4a.png" alt="" />
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
                  <div className="ecosystem-img-box">
                    <img
                      src="assets/images/christin-hume-slbqShqAhEo-unsplash.jpg"
                      alt=""
                    />
                    <div className="play-btn">
                      <img src="assets/images/play-btn2.svg" alt="" />
                    </div>
                  </div>
                  <video
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
