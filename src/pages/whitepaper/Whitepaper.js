import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "./whitepaper.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Header from "../../components/header/Header";

const Whitepaper = () => {
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
                <h2 className="heading mb-0">MetaPets</h2>
                <h1 className="sub-heading mb-0">Whitepaper</h1>
                <p className="heading-text">
                A project's whitepaper is a team's vision and plan for where the project will go. The more creative, well-written a whitepaper is, the better the vision. Check ours out and see if we got it right. To satisfy the needs of some of our international communities, we have translated it into a few languages. More to come.
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
                      style={{ height: "845px" }}
                    >
                      <Viewer
                        fileUrl={"assets/pdf/1.pdf"}
                        plugins={[defaultLayoutPluginInstance]}
                      />
                    </div>
                  </Worker>
                  <button>
                    <img className="black-pdf-icon" src="assets/images/pdf-icon.svg" alt="icon" />
                    <img className="white-pdf-icon" src="assets/images/pdf-white.svg" alt="icon" />
                    <a className="alink" href={"assets/pdf/1.pdf"} download>
                      Download PDF File
                    </a>
                  </button>
                </div>
                <div className="whitepaper content-box">
                  <img src="assets/images/whitepaper1.png" alt="" />
                  <button>
                  <img className="black-pdf-icon" src="assets/images/pdf-icon.svg" alt="icon" />
                    <img className="white-pdf-icon" src="assets/images/pdf-white.svg" alt="icon" />
                    <span>Download PDF File</span>
                  </button>
                </div>
                <div className="whitepaper content-box">
                  <img src="assets/images/whitepaper1.png" alt="" />
                  <button>
                  <img className="black-pdf-icon" src="assets/images/pdf-icon.svg" alt="icon" />
                    <img className="white-pdf-icon" src="assets/images/pdf-white.svg" alt="icon" />
                    <span>Download PDF File</span>
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
