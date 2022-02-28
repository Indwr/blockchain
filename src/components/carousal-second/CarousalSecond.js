import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class CarousalSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ["assets/images/team1.png"],
    };
  }

  render() {
    const { images } = this.state;
    return (
      <OwlCarousel className="owl-theme" loop margin={10} items={5} nav>
        <div>
          <div className="team-box">
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