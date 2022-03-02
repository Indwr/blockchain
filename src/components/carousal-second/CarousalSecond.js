import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 40,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: false,
  loop: true,
  // center: true,
  navText: false,
  stagePadding: 0,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
      margin: 20,
    },
    576: {
      items: 2,
      stagePadding: 0,
      margin: 20,
    },
    767: {
      items: 2,
      stagePadding: 0,
    },
    991: {
      items: 3,
      stagePadding: 0,
    },
    1200: {
      items: 3,
      stagePadding: 0,
    },
    1500: {
      items: 4,
      stagePadding: 0,
    },
    1700: {
      items: 4,
      stagePadding: 150,
    },
  },
};

export default class CarousalSecond extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     images: ["assets/images/team1.png"],
  //   };
  // }

  render() {
    // const { images } = this.state;
    return (
      <OwlCarousel className="owl-theme" nav {...options}>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
              <div className="road-test-icon">
                <img src="assets/images/road-test1.png" alt="" />
              </div>
              <h4>Q1 - 2022</h4>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste us error sit voluptatem
                accusantium que laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
              <div className="road-test-icon">
                <img src="assets/images/road-test1.png" alt="" />
              </div>
              <h4>Q2 - 2022</h4>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste us error sit voluptatem
                accusantium que laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
              <div className="road-test-icon">
                <img src="assets/images/road-test1.png" alt="" />
              </div>
              <h4>Q3 - 2022</h4>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste us error sit voluptatem
                accusantium que laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
              <div className="road-test-icon">
                <img src="assets/images/road-test1.png" alt="" />
              </div>
              <h4>Q4 - 2022</h4>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste us error sit voluptatem
                accusantium que laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
              <div className="road-test-icon">
                <img src="assets/images/road-test1.png" alt="" />
              </div>
              <h4>Q5 - 2022</h4>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste us error sit voluptatem
                accusantium que laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
              <div className="road-test-icon">
                <img src="assets/images/road-test1.png" alt="" />
              </div>
              <h4>Q6 - 2022</h4>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste us error sit voluptatem
                accusantium que laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}
