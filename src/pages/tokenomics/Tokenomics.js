import React from "react";
import Header from "../../components/header/Header";
import "./tokenomics.css";

const Tokenomics = () => {
  return (
    <div>
      <Header />
      <section className="section-padding tokenomics">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tokenomics-inner">
                <div className="tokenomics-heading">
                  <h2 className="heading mb-0">MetaPets</h2>
                  <h3 className="sub-heading">Tokenomics</h3>
                  <div className="tokenomics-main-heading">
                    <h1>100 Quadrillion</h1>
                    <p className="mb-0 heading-text">According to our Bubble Map partners: we have a healthy project.</p>
                    {/* <img src="assets/images/token-text.png" alt="" /> */}
                  </div>
                  <div className="tokenomics-iframe">
                  <iframe
                    title="tokenomicsiframe"
                    src="https://bubbles.moonlighttoken.com/bsc/token/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d?iframe=true"
                  />
                </div>
                </div>
                <div className="tokenomics-content">
                  <div className="tokenomics-content-box">
                    <h4>2%</h4>
                    <p>Redistributed to our amazing holders</p>
                    <div className="token-box-img">
                      <img className="token-box-black" src="assets/images/token-box-img.png" alt="" />
                      <img className="token-box-white" src="assets/images/token-box-white.png" alt="" />
                    </div>
                  </div>
                  <div className="tokenomics-content-box tokenomics-content-box-bg">
                    <h4>3%</h4>
                    <p>To Liquidity to maintain stability</p>
                    <div className="token-box-img">
                    <img className="token-box-black" src="assets/images/token-box-img.png" alt="" />
                      <img className="token-box-white" src="assets/images/token-box-white.png" alt="" />
                    </div>
                  </div>
                  <div className="tokenomics-content-box">
                    <h4>5%</h4>
                    <p>PrizeFund wallet for community games with cash prizes</p>
                    <div className="token-box-img">
                    <img className="token-box-black" src="assets/images/token-box-img.png" alt="" />
                      <img className="token-box-white" src="assets/images/token-box-white.png" alt="" />
                    </div>
                  </div>
                  <div className="tokenomics-content-box">
                    <h4>1%</h4>
                    <p>Towards aggressive marketing</p>
                    <div className="token-box-img">
                    <img className="token-box-black" src="assets/images/token-box-img.png" alt="" />
                      <img className="token-box-white" src="assets/images/token-box-white.png" alt="" />
                    </div>
                  </div>
                  <div className="tokenomics-content-box">
                    <h4>2%</h4>
                    <p>
                      Used by AI technology to strategically buy back tokens and
                      kick out paper hands
                    </p>
                    <div className="token-box-img">
                    <img className="token-box-black" src="assets/images/token-box-img.png" alt="" />
                      <img className="token-box-white" src="assets/images/token-box-white.png" alt="" />
                    </div>
                  </div>
                </div>
                
                <div className="tokenomics-round">
                  <img src="assets/images/token-round.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-line">
          <img src="assets/images/about-line.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
