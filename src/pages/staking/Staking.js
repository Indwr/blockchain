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
                <h2 className="heading mb-0 english-lng">Stake your MetaPets and earn</h2>
                <h2 className="heading mb-0 erabic-lng">ربط  حصة ميتابيتس لكسب</h2>
                <h1 className="sub-heading mb-0 english-lng">MetaPets Coin </h1>
                <h1 className="sub-heading mb-0 erabic-lng">عملة ميتاتس </h1>
                <p className="heading-text english-lng">
                  Stake your MetaPets tokens and earn MetaPets coins
                </p>
                <p className="heading-text erabic-lng">
                قم بربط ميتابيتس واكسب عملات ميتابيتس
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
                    <h3 className="english-lng">
                      APY <span>*</span>{" "}
                    </h3>
                    <h3 className="erabic-lng">
                    تخزين <span>*</span>{" "}
                    </h3>
                    <p className="mb-0 english-lng">Flexible no lock up</p>
                    <p className="mb-0 erabic-lng">مرن بدون قفل</p>
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
                    <h3 className="english-lng">
                      APY <span>*</span>{" "}
                    </h3>
                    <h3 className="erabic-lng">
                    تخزين <span>*</span>{" "}
                    </h3>
                    <p className="mb-0 english-lng">30 Days</p>
                    <p className="mb-0 erabic-lng">30 يوما</p>
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
                    <h3 className="english-lng">
                      APY <span>*</span>{" "}
                    </h3>
                    <h3 className="erabic-lng">
                    تخزين <span>*</span>{" "}
                    </h3>
                    <p className="mb-0 english-lng">90 Days</p>
                    <p className="mb-0 erabic-lng">90 يومًا</p>
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
                    <h3 className="english-lng">
                      APY <span>*</span>{" "}
                    </h3>
                    <h3 className="erabic-lng">
                    تخزين <span>*</span>{" "}
                    </h3>
                    <p className="mb-0 english-lng">180 Days</p>
                    <p className="mb-0 erabic-lng">180 يوم</p>
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
                    <h3 className="english-lng">
                      APY <span>*</span>{" "}
                    </h3>
                    <h3 className="erabic-lng">
                    تخزين <span>*</span>{" "}
                    </h3>
                    <p className="mb-0 english-lng">360 Days</p>
                    <p className="mb-0 erabic-lng">360 يوم</p>
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
                    <h3 className="english-lng">
                      APY <span>*</span>{" "}
                    </h3>
                    <h3 className="erabic-lng">
                    تخزين <span>*</span>{" "}
                    </h3>
                    <p className="mb-0 english-lng">720 Days</p>
                    <p className="mb-0 erabic-lng">720 يوم</p>
                  </div>
                </div>
              </div>
              <div className="stalking-heading">
                <p className="mb-0 english-lng">APY VALUES TBA*</p>
                <p className="mb-0 erabic-lng">قيم التخزين سوف يتم الإعلان عنها</p>
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
