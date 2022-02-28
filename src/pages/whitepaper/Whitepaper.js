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
                <h2 className="heading mb-0">Numquam Eius </h2>
                <h1 className="sub-heading mb-0">Whitepaper</h1>
                <p className="heading-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
          </div>
          <div className="whitepaper content">
            <div className="whitepaper content-box">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <div style={{ height: "850px", width: "90%" }}>
                  <Viewer
                    fileUrl={"assets/pdf/1.pdf"}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker>
            </div>
            <div className="whitepaper content-box">
              <img src="assets/images/whitepaper1.png" alt="" />
            </div>
            <div className="whitepaper content-box">
              <img src="assets/images/whitepaper1.png" alt="" />
            </div>
            <div className="team-round-circul">
              <img src="assets/images/team-round.png" alt="" />
            </div>
          </div>
        </div>
        <div className="whitepaper-circel-img">
          <img src="assets/images/whitepaper-circul.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Whitepaper;
