import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./tokenomics.css";

const Tokenomics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <section className="section-padding tokenomics">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tokenomics-inner">
                <div className="tokenomics-heading">
                  <h2 className="heading mb-0 english-lng">MetaPets</h2>
                  <h2 className="heading mb-0 erabic-lng">ميتابيتس</h2>
                  <h3 className="sub-heading mb-0 english-lng">Tokenomics</h3>
                  <h3 className="sub-heading mb-0 erabic-lng">رموز</h3>
                  <div className="tokenomics-main-heading">
                    <h1 className="english-lng"> 13% Total Tax </h1>
                    <h1 className="erabic-lng">13٪ إجمالي الضرائب</h1>
                    <p className="mb-0 heading-text english-lng">
                      According to our Bubble Map partners: we have a healthy
                      project.
                    </p>
                    <p className="mb-0 heading-text erabic-lng">
                    وفقًا لشركائنا في Bubble Map: لدينا مشروع صحي.
                    </p>
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
                    <p className="english-lng">Redistributed to our amazing holders</p>
                    <p className="erabic-lng">أعيد توزيعها على أصحابنا المذهلين</p>
                    <div className="token-box-img">
                      <img
                        className="token-box-black"
                        src="assets/images/token-box-img.png"
                        alt=""
                      />
                      <img
                        className="token-box-white"
                        src="assets/images/token-box-white.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="tokenomics-content-box tokenomics-content-box-bg">
                    <h4>3%</h4>
                    <p className="english-lng">To Liquidity to maintain stability</p>
                    <p className="erabic-lng">للسيولة للحفاظ على الاستقرار</p>
                    <div className="token-box-img">
                      <img
                        className="token-box-black"
                        src="assets/images/token-box-img.png"
                        alt=""
                      />
                      <img
                        className="token-box-white"
                        src="assets/images/token-box-white.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="tokenomics-content-box">
                    <h4>5%</h4>
                    <p className="english-lng">PrizeFund wallet for community games with cash prizes</p>
                    <p className="erabic-lng">محفظة PrizeFund للألعاب المجتمعية بجوائز نقدية</p>
                    <div className="token-box-img">
                      <img
                        className="token-box-black"
                        src="assets/images/token-box-img.png"
                        alt=""
                      />
                      <img
                        className="token-box-white"
                        src="assets/images/token-box-white.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="tokenomics-content-box">
                    <h4>1%</h4>
                    <p className="english-lng">Towards Marketing & Development</p>
                    <p className="erabic-lng"> نحو التسويق والتنمية</p>
                    <div className="token-box-img">
                      <img
                        className="token-box-black"
                        src="assets/images/token-box-img.png"
                        alt=""
                      />
                      <img
                        className="token-box-white"
                        src="assets/images/token-box-white.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="tokenomics-content-box">
                    <h4>2%</h4>
                    <p className="english-lng">
                      Used by AI technology to strategically buy back tokens and
                      kick out paper hands
                    </p>
                    <p className="erabic-lng">
                    تستخدم بواسطة تقنية الذكاء الاصطناعي لإعادة شراء الرموز بشكل استراتيجي وطرد الأيدي الورقية

                    </p>
                    <div className="token-box-img">
                      <img
                        className="token-box-black"
                        src="assets/images/token-box-img.png"
                        alt=""
                      />
                      <img
                        className="token-box-white"
                        src="assets/images/token-box-white.png"
                        alt=""
                      />
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
