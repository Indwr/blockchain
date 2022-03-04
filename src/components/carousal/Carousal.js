import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options1 = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  loop: true,
  navText: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
      margin: 20,
    },
    576: {
      items: 2,
      margin: 20,
    },
    767: {
      items: 3,
      margin: 20,
    },
    991: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

export default class Carousal extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" nav {...options1}>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/DEE.png" alt="" />
              <h4>DEE</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/APRIL.png" alt="" />
              <h4>APRIL</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/BRIAN.png" alt="" />
              <h4>BRIAN</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/CHING.png" alt="" />
              <h4>CHING</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/DAVID.png" alt="" />
              <h4>DAVID</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/GERALT.png" alt="" />
              <h4>GERALT</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/GUSTO.png" alt="" />
              <h4>GUSTO</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/HERO.png" alt="" />
              <h4>HERO</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/KOOL.png" alt="" />
              <h4>KOOL</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/LIAM.png" alt="" />
              <h4>LIAM</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/LUCKY.png" alt="" />
              <h4>LUCKY</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/MATT.png" alt="" />
              <h4>MATT</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/PEABODY.png" alt="" />
              <h4>PEABODY</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/PHIL.png" alt="" />
              <h4>PHIL</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/RAY.png" alt="" />
              <h4>RAY</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/SCOTT.png" alt="" />
              <h4>SCOTT</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/SEMI.png" alt="" />
              <h4>SEMI</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/TAJ.png" alt="" />
              <h4>TAJ</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/TINAS_HUBBY.png" alt="" />
              <h4>TINAS_HUBBY</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/TONY.png" alt="" />
              <h4>TONY</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/Z.png" alt="" />
              <h4>Z</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
