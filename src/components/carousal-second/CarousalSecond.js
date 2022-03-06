import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 40,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: true,
  loop: true,
  // center: true,
  navText: false,
  // autoHeight: true,
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
            <div className="road-test-icon road-test-icon-black">
                <img className="road-test-icon1" src="assets/images/road-test1.png" alt="" />
                <img className="road-test-icon2" src="assets/images/road-test-2.png" alt="" />
              </div>
              <div className="road-test-icon road-test-icon-white">
                <img className="road-test-icon1" src="assets/images/roadmap2.png" alt="" />
                <img className="road-test-icon2" src="assets/images/roadmap2.png" alt="" />
              </div>
              <h4>[Q1 2022]</h4>
              <ul className="mb-0">
                <li>-Merch Store</li>
                <li>- Merch Giveaways</li>
                <li>- CertiK Audit</li>
                <li>- NFT Merch </li>
                <li>- Website Revamp</li>
                <li>- MetaPets Swap</li>
                <li>- Staking</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
            <div className="road-test-icon road-test-icon-black">
                <img className="road-test-icon1" src="assets/images/road-test1.png" alt="" />
                <img className="road-test-icon2" src="assets/images/road-test-2.png" alt="" />
              </div>
              <div className="road-test-icon road-test-icon-white">
                <img className="road-test-icon1" src="assets/images/roadmap2.png" alt="" />
                <img className="road-test-icon2" src="assets/images/roadmap2.png" alt="" />
              </div>
              <h4>[Q2 2022]</h4>
              <ul className="mb-0">
                <li>- Reflection Tracker</li>
                <li>- Preparation for Ethereum Bridge</li>
                <li>- Augmented Reality Merch</li>
                <li>- Game Development</li>
                <li>- NFT Release (BSC)</li>
                <li>- Ethereum Bridge</li>
                <li>- 3D NFT Development</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
            <div className="road-test-icon road-test-icon-black">
                <img className="road-test-icon1" src="assets/images/road-test1.png" alt="" />
                <img className="road-test-icon2" src="assets/images/road-test-2.png" alt="" />
              </div>
              <div className="road-test-icon road-test-icon-white">
                <img className="road-test-icon1" src="assets/images/roadmap2.png" alt="" />
                <img className="road-test-icon2" src="assets/images/roadmap2.png" alt="" />
              </div>
              <h4>[Q3 2022]</h4>
              <ul className="mb-0">
                <li>- 3D NFT Development</li>
                <li>- 3D NFT Release</li>
                <li>- NFT Staking</li>
                <li>- Gamification integration and testing</li>
                <li>- BETA Game Release</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
            <div className="road-test-icon road-test-icon-black">
                <img className="road-test-icon1" src="assets/images/road-test1.png" alt="" />
                <img className="road-test-icon2" src="assets/images/road-test-2.png" alt="" />
              </div>
              <div className="road-test-icon road-test-icon-white">
                <img className="road-test-icon1" src="assets/images/roadmap2.png" alt="" />
                <img className="road-test-icon2" src="assets/images/roadmap2.png" alt="" />
              </div>
              <h4>[Q4 2022]</h4>
              <ul className="mb-0">
                <li>- NFT Integration to Games</li>
                <li>- Polygon Bridge</li>
                <li>- Custom NFT Pets</li>
                <li>- NFT Marketplace</li>
                <li>- BSC Contract Migration</li>
                <li>- Developing NFT Breeding dAPP</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="road-test-box">
            <div className="road-text-box-content">
            <div className="road-test-icon road-test-icon-black">
                <img className="road-test-icon1" src="assets/images/road-test1.png" alt="" />
                <img className="road-test-icon2" src="assets/images/road-test-2.png" alt="" />
              </div>
              <div className="road-test-icon road-test-icon-white">
                <img className="road-test-icon1" src="assets/images/roadmap2.png" alt="" />
                <img className="road-test-icon2" src="assets/images/roadmap2.png" alt="" />
              </div>
              <h4>[Q1/Q2 2023]</h4>
              <ul className="mb-0">
                <li>- Avax Bridge</li>
                <li>- NFT Breeding</li>
                <li>- Multi-chain mainnet</li>
                <li>- Multi-Chain Breeding</li>
                <li>- New Feature & Utilities</li>
              </ul>
            </div>
          </div>
        </div>
        
      </OwlCarousel>
    );
  }
}
