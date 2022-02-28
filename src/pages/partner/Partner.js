import React from "react";
import "./partner.css";

const Partner = () => {

    return <div>
        <section className="section-padding partner-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="paetner-inner">
                            <div className="partner-heading">
                                <h2 className="heading mb-0">Numquam Eius </h2>
                                <h1 className="sub-heading mb-0">Partners</h1>
                                <p className="heading-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                            <div className="partner-img-outer">
                                <div className="partner-img-box">
                                <div className="partner-img-box-content">
                                    <img src="assets/images/partner-img1.png" alt="" />
                                    <h6>Visit Website</h6>
                                </div>
                                </div>
                                <div className="partner-img-box">
                                <div className="partner-img-box-content">
                                    <img src="assets/images/partner-img2.png" alt="" />
                                    <h6>Visit Website</h6>
                                </div>
                                </div>
                                <div className="partner-img-box">
                                <div className="partner-img-box-content">
                                    <img src="assets/images/partner-img3.png" alt="" />
                                    <h6>Visit Website</h6>
                                </div>
                                </div>
                            </div>
                            <div className="partner-img-outer partner-img-outer">
                                <div className="partner-img-box">
                                <div className="partner-img-box-content">
                                    <img src="assets/images/partner-img4.png" alt="" />
                                    <h6>Visit Website</h6>
                                </div>
                                </div>
                                <div className="partner-img-box">
                                <div className="partner-img-box-content">
                                    <img src="assets/images/partner-img5.png" alt="" />
                                    <h6>Visit Website</h6>
                                </div>
                                </div>
                                <div className="partner-img-box">
                                    <div className="partner-img-box-content">
                                        <img src="assets/images/partner-img6.png" alt="" />
                                        <h6>Visit Website</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="partner-round-img">
                <img src="assets/images/metapets-round.svg" alt="" />
            </div>
        </section>
    </div>;

};

export default Partner;