import React, { useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "./whitepaper.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Header from "../../components/header/Header";

const Whitepaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    Download: () => <></>,
    EnterFullScreen: () => <></>,
    SwitchTheme: () => <></>,
  });

  return (
    <div>
      <Header />
      <section className="section-padding whitepaper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="whitepaper-heading">
                <h2 className="heading mb-0 english-lng">MetaPets</h2>
                <h2 className="heading mb-0 erabic-lng">ميتابيتس</h2>
                <h1 className="sub-heading mb-0 english-lng">Whitepaper</h1>
                <h1 className="sub-heading mb-0 erabic-lng">ورقة معلومات</h1>
                <p className="heading-text english-lng">
                  A project's whitepaper is a team's vision and plan for where
                  the project will go. The more creative, well-written a
                  whitepaper is, the better the vision. Check ours out and see
                  if we got it right. To satisfy the needs of some of our
                  international communities, we have translated it into a few
                  languages. More to come.
                </p>
                <p className="heading-text erabic-lng">
                الورقة البيضاء للمشروع هي رؤية الفريق وخطته للمكان الذي سيذهب إليه المشروع. كلما كانت الورقة البيضاء أكثر إبداعًا وحسنًا ، كانت الرؤية أفضل. تحقق من منتجاتنا ومعرفة ما إذا كنا قد حصلنا عليها بشكل صحيح. لتلبية احتياجات بعض مجتمعاتنا الدولية ، قمنا بترجمتها إلى عدة لغات. المزيد قادم.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="whitepaper content">
                <div className="whitepaper content-box">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <div
                      className="content-box-pdf"
                      style={{ height: "675px" }}
                    >
                      <Viewer
                        fileUrl={"assets/pdf/MetaPets-WhitePaper-V1-2.pdf"}
                        plugins={[defaultLayoutPluginInstance]}
                      />
                    </div>
                  </Worker>
                  <button>
                    <img
                      className="black-pdf-icon"
                      src="assets/images/pdf-icon.svg"
                      alt="icon"
                    />
                    <img
                      className="white-pdf-icon"
                      src="assets/images/pdf-white.svg"
                      alt="icon"
                    />
                    <a
                      className="alink"
                      href={"assets/pdf/MetaPets-WhitePaper-V1-2.pdf"}
                      download
                    >
                      Download PDF File
                    </a>
                  </button>
                </div>
                <div className="whitepaper content-box">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <div
                      className="content-box-pdf"
                      style={{ height: "675px" }}
                    >
                      <Viewer
                        fileUrl={
                          "assets/pdf/MetaPets-Whitepaper-V1-Turkish.pdf"
                        }
                        plugins={[defaultLayoutPluginInstance]}
                      />
                    </div>
                  </Worker>
                  <button>
                    <img
                      className="black-pdf-icon"
                      src="assets/images/pdf-icon.svg"
                      alt="icon"
                    />
                    <img
                      className="white-pdf-icon"
                      src="assets/images/pdf-white.svg"
                      alt="icon"
                    />
                    <a
                      className="alink"
                      href={"assets/pdf/MetaPets-Whitepaper-V1-Turkish.pdf"}
                      download
                    >
                      Download PDF File
                    </a>
                  </button>
                </div>
                <div className="whitepaper content-box">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <div
                      className="content-box-pdf"
                      style={{ height: "675px" }}
                    >
                      <Viewer
                        fileUrl={"assets/pdf/MetaPets-Whitepaper-V1-Arabic.pdf"}
                        plugins={[defaultLayoutPluginInstance]}
                      />
                    </div>
                  </Worker>
                  <button>
                    <img
                      className="black-pdf-icon"
                      src="assets/images/pdf-icon.svg"
                      alt="icon"
                    />
                    <img
                      className="white-pdf-icon"
                      src="assets/images/pdf-white.svg"
                      alt="icon"
                    />
                    <a
                      className="alink"
                      href={"assets/pdf/MetaPets-Whitepaper-V1-Arabic.pdf"}
                      download
                    >
                      Download PDF File
                    </a>
                  </button>
                </div>

                <div className="team-round-circul">
                  <img src="assets/images/team-round.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="whitepaper-circel-img">
          <img src="assets/images/whitepaper-circul.png" alt="" />
        </div>
        <div className="about-line">
          <img src="assets/images/about-line.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Whitepaper;
