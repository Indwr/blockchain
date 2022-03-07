import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./cookies.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col12">
              <div className="about-inner">
                <div className="about-inner-box">
                  <h2 className="heading">MetaPets</h2>
                  <h1 className="sub-heading">Cookies Policy</h1>
                  <p>
                    A cookie is a small file, stored on a user's hard drive by a
                    website. Its purpose is to collect data relating to the
                    user's browsing habits. You can choose to be notified each
                    time a cookie is transmitted. You can also choose to disable
                    cookies entirely in your internet browser, but this may
                    decrease the quality of your user experience.
                  </p>
                  <p>We use the following types of cookies on our Site:</p>
                  <ul>
                    <li>1. Functional cookies</li>
                  </ul>
                  <p>
                    Functional cookies are used to remember the selections you
                    make on our Site so that your selections are saved for your
                    next visits.
                  </p>
                  <h5>Modifications</h5>
                  <p>
                    This Privacy Policy may be amended from time to time in
                    order to maintain compliance with the law and to reflect any
                    changes to our data collection process. When we amend this
                    Privacy Policy we will update the "Effective Date" at the
                    top of this Privacy Policy. We recommend that our users
                    periodically review our Privacy Policy to ensure that they
                    are notified of any updates. If necessary, we may notify
                    users by email of changes to this Privacy Policy.
                  </p>
                  <h5>Complaints</h5>
                  <p>
                    If you have any complaints about how we process your
                    personal data, please contact us through the contact methods
                    listed in the Contact Information section so that we can,
                    where possible, resolve the issue. If you feel we have not
                    addressed your concern in a satisfactory manner you may
                    contact a supervisory authority. You also have the right to
                    directly make a complaint to a supervisory authority.
                  </p>
                  <p>
                    You can lodge a complaint with a supervisory authority by
                    contacting the Information Commissioner's Office in the UK.
                  </p>
                  <h5>Contact Information</h5>
                  <p>
                    If you have any questions, concerns or complaints, you can
                    contact our privacy officer, Liam Hayne, at:
                  </p>
                  <p>
                    <a href="mailto:www.metapetscoin1@gmail.com">
                      www.metapetscoin1@gmail.com
                    </a>
                    <br />
                    <a href="tel:5121107975">(512) 110-7975</a>
                    <br />
                    8731 Tanager Woods Dr. Cincinnati, Ohio 45249
                  </p>

                  <div className="about-main-img">
                    <img src="assets/images/about-main.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-half-round">
          <img src="assets/images/metapets-round.svg" alt="" />
        </div>
        <div className="about-full-round-img">
          <img
            className="rotating"
            src="assets/images/home-team-cercul.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default About;
