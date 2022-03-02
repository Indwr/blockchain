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

      }
  },
};

export default class Carousal extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme"  nav {...options1}>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/team1.png" alt="" />
              <h4>Dee Norris</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/team1.png" alt="" />
              <h4>Dee Norris</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/team1.png" alt="" />
              <h4>Dee Norris</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/team1.png" alt="" />
              <h4>Dee Norris</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/team1.png" alt="" />
              <h4>Dee Norris</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
        <div>
          <div className="team-box mt-0">
            <img src="assets/images/team-img-box.png" alt="" />
            <div className="team-content">
              <img src="assets/images/team1.png" alt="" />
              <h4>Dee Norris</h4>
              <p>CEO </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
