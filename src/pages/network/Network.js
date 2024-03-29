import React, { useState, useEffect } from "react";

import Header from "../../components/header/Header";
import "./network.css";

const Network = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <h2 className="heading mb-0 english-lng">Smart contract</h2>
                <h2 className="heading mb-0 turkish-lng">Akıllı sözleşme</h2>
                <h2 className="heading mb-0 erabic-lng">عقد ذكي</h2>
                <h1 className="sub-heading mb-0 english-lng">MetaPets Supported Blockchain</h1>
                <h1 className="sub-heading mb-0 turkish-lng">Binance Akıllı Zincir Ağı</h1>
                <h1 className="sub-heading mb-0 erabic-lng">البلوكتشين المدعومة من Meta Pets</h1>
                <p className="heading-text english-lng">
                MetaPets is now supported solely by the Binance Smart Chain blockchain. Since its inception on November 22, 2021, this project has been steadily expanding its crew and progressing along its roadmap. The MetaPets ecosystem will continue to grow, and we will need to use other blockchains like Ethereum and the Polygon network to complete our roadmap ambitions.
                </p>
                <p className="heading-text turkish-lng">Binance Akıllı Zincir Ağı son derece güvenli ve garantilidir. Düşük işlem ücretleri ve süper hızlı onaylamalar alın.  En önemlisi ise, Binance Akıllı Zincir Ağı, Metamask ve diğer çevrimiçi cüzdanlarla sorunsuz bir şekilde bağlanmaktadır</p>
                <p className="heading-text erabic-lng">
                يتم الآن دعم Meta Pets فقط من خلال سلسلة بلوك تشين الذكية من Binance. منذ بدايته في 22 نوفمبر 2021 ، عمل هذا المشروع على توسيع طاقمه بشكل مطرد والمضي قدمًا على طول خارطة الطريق الخاصة به. سيستمر النظام البيئي Meta Pets في النمو ، وسنحتاج إلى استخدام سلاسل كتل أخرى مثل Ethereum وشبكة Polygon لإكمال طموحاتنا في خريطة الطريق.
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
                      <img src="assets/images/ethereum-1.png" alt="" />
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
                      <img src="assets/images/polygon-matic-logo.png" alt="" />
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
                      <img src="assets/images/solana-sol-logo.png" alt="" />
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
