import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options1 = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: false,
  center: true,
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
              <h4>Dee Norris</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/adora.jpg" alt="" />
              <h4>Adora</h4>
              <p>Organizer </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/APRIL.png" alt="" />
              <h4>APRIL</h4>
              <p>MOD</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/BRIAN.png" alt="" />
              <h4>Brian Hoffeman</h4>
              <p>VC Mod</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/CHING.png" alt="" />
              <h4>CHING</h4>
              <p>MOD </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/DAVID.png" alt="" />
              <h4>David Fransis</h4>
              <p>Discord Manager</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/GERALT.png" alt="" />
              <h4>Geralt</h4>
              <p>Technician</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/GUSTO.png" alt="" />
              <h4>Nathan</h4>
              <p>Creative Director</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/HERO.png" alt="" />
              <h4>HERO</h4>
              <p>MOD</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/KOOL.png" alt="" />
              <h4>Kool Clipz</h4>
              <p>VC MOD</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/lauren.png" alt="" />
              <h4>Lauren</h4>
              <p>Head of research</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/LIAM.png" alt="" />
              <h4>Liam Hayne</h4>
              <p>PR Manager</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/LUCKY.png" alt="" />
              <h4>LUCKY</h4>
              <p>MOD Team</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/MATT.png" alt="" />
              <h4>MATT</h4>
              <p>Event Coordinator</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/nad-king.jpg" alt="" />
              <h4>Nad King</h4>
              <p>Meta MOD</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/PEABODY.png" alt="" />
              <h4>Peabody</h4>
              <p>CFO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/PHIL.png" alt="" />
              <h4>Phil Kennedy</h4>
              <p>Social Media Manager</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/RAY.png" alt="" />
              <h4>Ray</h4>
              <p>CFO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/SCOTT.png" alt="" />
              <h4>Scott</h4>
              <p>Meta MOD</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/SEMI.png" alt="" />
              <h4>Semi</h4>
              <p>Discord Manager </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/TAJ.png" alt="" />
              <h4>Taj Zaza</h4>
              <p>Arabic Spokesman</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/TINAS_HUBBY.png" alt="" />
              <h4>Emi</h4>
              <p>MOD Team </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/TONY.png" alt="" />
              <h4>Tony</h4>
              <p>Meta Mod & FUD Killa</p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/Z.png" alt="" />
              <h4>Z</h4>
              <p>Analyst </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
