import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./partner.css";

const Partner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <section className="section-padding partner-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="paetner-inner">
                <div className="partner-heading">
                  <h2 className="heading mb-0 english-lng">MetaPets</h2>
                  <h2 className="heading mb-0 erabic-lng">ميتابيتس</h2>
                  <h1 className="sub-heading mb-0 english-lng">Partners</h1>
                  <h1 className="sub-heading mb-0 erabic-lng">شركاء</h1>
                  <p className="heading-text english-lng">
                    We are very pleased to show our current partners and excited
                    to announce more in the future.
                  </p>
                  <p className="heading-text erabic-lng">
                  يسعدنا أن نظهر شركائنا الحاليين ومتحمسون للإعلان عن المزيد في المستقبل.
                  </p>
                </div>
                <div className="partner-img-outer">
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://whitebit.com/"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/partner-img1.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://coinmarketcap.com/currencies/metapets/"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/partner-img2.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://www.coingecko.com/en/coins/metapets"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/partner-img3.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://bscscan.com/address/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/partner-img4.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://www.dextools.io/app/bsc/pair-explorer/0xbe41f59d6d558a49ab04a10b479c9a8d6a280105"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/partner-img5.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://poocoin.app/tokens/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/partner-img6.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://www.certik.com/projects/metapetscoin"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/cretik.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://www.pinksale.finance/"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/pinkmoon.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="partner-img-box">
                    <a
                      target="_blank"
                      href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                      rel="noreferrer"
                    >
                      <div className="partner-img-box-outer">
                        <div className="partner-img-box-content">
                          <img src="assets/images/pancakeswap.png" alt="" />
                          <h6>Visit Website</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="partner-round-img">
          <img src="assets/images/metapets-round.svg" alt="" />
        </div>
        <div className="about-line">
          <img src="assets/images/about-line.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Partner;
