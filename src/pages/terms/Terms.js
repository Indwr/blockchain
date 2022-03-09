import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./terms.css";

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
                  <h1 className="sub-heading">Terms and Conditions</h1>
                  <p>
                    These terms and conditions (the "Terms and Conditions")
                    govern the use of{" "}
                    <a href="www.metapetscoin.com">www.metapetscoin.com</a> .
                    This Site is owned and operated by Liam Hayne. This Site is
                    an ecommerce website.
                  </p>
                  <p>
                    By using this Site, you indicate that you have read and
                    understand these Terms and Conditions and agree to abide by
                    them at all times.
                  </p>
                  <h5>Intellectual Property</h5>
                  <p>
                    All content published and made available on our Site is the
                    property of Liam Hayne and the Site's creators. This
                    includes, but is not limited to images, text, logos,
                    documents, downloadable files and anything that contributes
                    to the composition of our Site.
                  </p>
                  <h5>Sale of Goods And Services</h5>
                  <p>
                    These Terms and Conditions govern the sale of goods and
                    services available on our Site.
                  </p>
                  <p>The following goods are available on our Site:</p>
                  <p className="ms-4">- NFT Pets.</p>
                  <p>The following services are available on our Site:</p>
                  <p className="ms-4">- Gaming.</p>
                  <p>
                    The services will be paid for in full when the services are
                    ordered.
                  </p>
                  <p>
                    These Terms and Conditions apply to all the goods and
                    services that are displayed on our Site at the time you
                    access it. This includes all products listed as being out of
                    stock. All information, descriptions, or images that we
                    provide about our goods and services are as accurate as
                    possible. However, we are not legally bound by such
                    information, descriptions, or images as we cannot guarantee
                    the accuracy of all goods and services we provide. You agree
                    to purchase goods and services from our Site at your own
                    risk.
                  </p>
                  <p>
                    We reserve the right to modify, reject or cancel your order
                    whenever it becomes necessary. If we cancel your order and
                    have already processed your payment, we will give you a
                    refund equal to the amount you paid. You agree that it is
                    your responsibility to monitor your payment instrument to
                    verify receipt of any refund.
                  </p>
                  <h5>Payments</h5>
                  <p>We accept the following payment methods on our Site:</p>
                  <p>- Cryptocurrency listed on website. </p>
                  <p>
                    When you provide us with your payment information, you
                    authorize our use of and access to the payment instrument
                    you have chosen to use. By providing us with your payment
                    information, you authorize us to charge the amount due to
                    this payment instrument.
                  </p>
                  <p>
                    If we believe your payment has violated any law or these
                    Terms and Conditions, we reserve the right to cancel or
                    reverse your transaction.{" "}
                  </p>
                  <h5>Consumer Protection Law</h5>
                  <p>
                    Where any consumer protection legislation in your
                    jurisdiction applies and cannot be excluded, these Terms and
                    Conditions will not limit your legal rights and remedies
                    under that legislation. These Terms and Conditions will be
                    read subject to the mandatory provisions of that
                    legislation. If there is a conflict between these Terms and
                    Conditions and that legislation, the mandatory provisions of
                    the legislation will apply.
                  </p>
                  <h5>Limitation of Liability</h5>
                  <p>
                    Liam Hayne and our directors, officers, agents, employees,
                    subsidiaries, and affiliates will not be liable for any
                    actions, claims, losses, damages, liabilities and expenses
                    including legal fees from your use of the Site.
                  </p>
                  <h5>Indemnity</h5>
                  <p>
                    Except where prohibited by law, by using this Site you
                    indemnify and hold harmless Liam Hayne and our directors,
                    officers, agents, employees, subsidiaries, and affiliates
                    from any actions, claims, losses, damages, liabilities and
                    expenses including legal fees arising out of your use of our
                    Site or your violation of these Terms and Conditions.
                  </p>
                  <h5>Applicable Law</h5>
                  <p>
                    These Terms and Conditions are governed by the laws of the
                    State of Ohio.
                  </p>
                  <h5>Severability</h5>
                  <p>
                    If at any time any of the provisions set forth in these
                    Terms and Conditions are found to be inconsistent or invalid
                    under applicable laws, those provisions will be deemed void
                    and will be removed from these Terms and Conditions. All
                    other provisions will not be affected by the removal and the
                    rest of these Terms and Conditions will still be considered
                    valid.
                  </p>
                  <h5>Changes </h5>
                  <p>
                    These Terms and Conditions may be amended from time to time
                    in order to maintain compliance with the law and to reflect
                    any changes to the way we operate our Site and the way we
                    expect users to behave on our Site. We will notify users by
                    email of changes to these Terms and Conditions or post a
                    notice on our Site.{" "}
                  </p>
                  <h5>Contact Details </h5>
                  <p>
                    Please contact us if you have any questions or concerns. Our
                    contact details are as follows:
                  </p>
                  <p>
                    <a href="tel:1916633095 ">(191) 663-3095 </a>
                    <br />
                    <a href="mailto:support@metapetscoin.com  ">
                      support@metapetscoin.com{" "}
                    </a>
                    <br />
                    8731 Tanager Woods Dr.
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
          <img src="assets/images/about-img2.png" alt="" />
        </div>
        <div className="about-full-round-img ">
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
