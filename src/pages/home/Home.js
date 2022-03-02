import { React, useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Carousal from "../../../src/components/carousal/Carousal";
import CarousalSecond from "../../../src/components/carousal-second/CarousalSecond";
import Header from "../../components/header/Header";
import "./home.css";

const Home = () => {
  const [address, setAddress] = useState(
    "0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
  );

  const copyAddress = (e) => {
    alert("Copied");
    setAddress("0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d");
  };
  return (
    <div>
      <Header />
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-inner">
                <h2 className="heading">Metapets</h2>
                <h1 className="sub-heading">A new world, a new pet</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit luptatem
                  santium doloremque laudantium, totam rem aperiam.
                </p>
                <div className="copy">
                  <div className="copy-addres">
                    <p className="copy-text mb-0">{address}</p>
                    <div className="btn-outer1">
                      <CopyToClipboard
                        text={address}
                        onCopy={(e) => copyAddress(e)}
                      >
                        <button className="comman-btn btn-outer">
                          Copy Address
                          <img
                            src="assets/images/button-border.svg"
                            alt="button-border"
                          />
                        </button>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <img src="assets/images/banner-logo1.svg" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/banner-logo2.svg" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/banner-logo3.svg" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/banner-logo4.svg" alt="" />
                  </li>
                  {/* <li>
                    <img src="assets/images/tether-(usdt).svg" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/cardano-(ada).svg" alt="" />
                  </li> */}
                </ul>
                <div className="banner-img">
                  <img src="assets/images/banner-img2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="metapets-games">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="metapets-games-icon">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={"https://twitter.com/Metapetscoin"}
                    >
                      <img src="assets/images/twitter.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://discord.com/invite/NQKR42dVmm"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src="assets/images/games.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://t.me/metapets"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="assets/images/mail.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://www.reddit.com/user/Metapets"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src="assets/images/games2.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://linktr.ee/metapets"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="assets/images/games3.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="metapets-games-left">
                <img
                  className="metapets-games-left-img"
                  src="assets/images/metapets-games.png"
                  alt=""
                />
                <div className="metapats-bg">
                  <img src="assets/images/metapets-game-bg2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="metapets-games-right">
                <h2 className="heading mb-0">Lorem Ipsum</h2>
                <h3 className="sub-heading mb-0">MetaPets Games</h3>
                <p>
                  MetaPets Games will be a way to engage the comnmuniity and
                  help them build relationship in a fun and competitive way. NFT
                  games where you can train your MetaPets, dress them, and breed
                  them are some of the many ways you will be able to constantly
                  give love and care to your new friend.
                </p>
                <div className="btn-outer1">
                  <Link className="comman-btn btn-outer" to={"/"}>
                    Learn More
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-round">
          <img src="assets/images/metapets-round.svg" alt="" />
        </div>
      </section>

      <section className="custom-pets">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="custom-pets-inner">
                <div className="custom-pets-inner-box">
                  <h2 className="heading mb-0">
                    Custom Pet Builder ...Coming soon
                  </h2>
                  <h3 className="sub-heading mb-0">Custom Pets</h3>
                  <p>
                    Architecto beatae vitae dicta sunt explicabo. Nemo enim ip
                    sam voluptatem quia voluptas sit aspernatur aut odit.{" "}
                  </p>
                  <div className="btn-outer1">
                    <a
                      className="comman-btn btn-outer"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                    >
                      Buy Now
                      <img
                        src="assets/images/button-border.svg"
                        alt="button-border"
                      />
                    </a>
                  </div>
                </div>
                <img
                  className="custom-pets-main-img"
                  src="assets/images/custom-pets-img.png"
                  alt=""
                />
                <div className="custom-pets-circul">
                  <img
                    className="rotating"
                    src="assets/images/round-circul.png"
                    alt=""
                  />
                </div>
                <div className="custom-pets-circul2">
                  <img
                    className="rotating"
                    src="assets/images/round-circul.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="numquam-eius">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center order-md-1 order-2">
              <div className="numquam-eius-left">
                <h2 className="heading mb-0">Numquam Eius </h2>
                <h3 className="sub-heading mb-0">Customizable Pets</h3>
                <p>
                  Use your imagination to custommize your loving friend! Launch
                  your own custom MetaPets, adopt any traits you want to make
                  them unique, brag about your pet MetaPets social media, and
                  sell r swap it on the marketplace.
                </p>
                <div className="btn-outer1">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    Buy Now
                    <img 
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <div className="numquam-eius-right">
                <img className="fadeinout" src="assets/images/about-home.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="numquam-eius numquam-eius2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="numquam-eius-right">
                <img className="fadeinout" src="assets/images/about-home.png" alt="" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="numquam-eius-left">
                <h2 className="heading mb-0">Future Plans</h2>
                <h3 className="sub-heading mb-0">Customizable Pets</h3>
                <p>
                  MetaPets aims to make your MetaPet adaptable to the virtual
                  designs of the metaverse. Interperable into other worlds, you
                  can show your dog off in a dog show, have your prize cow
                  produce milk to sell, and race your trophy-winning horse in a
                  competition, all while earning a passive income from your
                  MetaPets investment
                </p>
                <div className="btn-outer1">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    Buy Now
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner">
        <div className="container">
          <div className="partner-outer">
            <div className="row">
              <div className="col-12">
                <div className="parner-text">
                  <h2 className="heading mb-0">Numquam Eius </h2>
                  <h3 className="sub-heading mb-0">Partners</h3>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box">
                  <div className="partner-box-outer">
                    <img src="assets/images/parner-box.png" alt="" />
                    <div className="partner-box-img">
                      <img src="assets/images/5a.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer ">
                  <div className="partner-box partner-box2">
                    <img src="assets/images/parner-box.png" alt="" />
                    <div className="partner-box-img">
                      <img src="assets/images/marketcap.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <div className="partner-box">
                    <img src="assets/images/parner-box.png" alt="" />
                    <div className="partner-box-img">
                      <img src="assets/images/1a.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <div className="partner-box">
                    <img src="assets/images/parner-box.png" alt="" />
                    <div className="partner-box-img">
                      <img src="assets/images/2a.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <div className="partner-box">
                    <img src="assets/images/parner-box.png" alt="" />
                    <div className="partner-box-img">
                      <img src="assets/images/3a.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <div className="partner-box">
                    <img src="assets/images/parner-box.png" alt="" />
                    <div className="partner-box-img">
                      <img src="assets/images/4a.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parnter-btn">
              <div className="btn-outer1">
                <a
                  className="comman-btn btn-outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                >
                  Buy Now
                  <img
                    src="assets/images/button-border.svg"
                    alt="button-border"
                  />
                </a>
              </div>
            </div>
            <div className="parner-main-round">
              <img src="assets/images/parner-main-round.png" alt="" />
            </div>
          </div>
        </div>
        <div className="parner-round-img">
          <img src="assets/images/half-round.png" alt="" />
        </div>
      </section>

      <section className="home-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-1 order-2">
              <div className="home-about-left">
                <h2 className="heading mb-0">Our Vision</h2>
                <h3 className="sub-heading mb-0">About Us</h3>
                <p>
                  Our vision is to see that our peoject adds to the growth and
                  value of the metaverse. It will indeed be interoperable and
                  open - meaning that down the road, an owner will be able to
                  use their MetaPets in other games/metaworlds that we, or
                  anyone else out there create.{" "}
                </p>
                <p>
                  so, for example, your pet from MetaPets could be pulled into a
                  training camp, a dog park, or any other type of game someone
                  wants to build on different worlds in the metaverse without
                  necessarily needing permissions. Our community happiness is
                  our number one priority and everything we build will be to
                  reward our loyal community.
                </p>
                <div className="btn-outer1">
                  <Link className="comman-btn btn-outer" to={"/"}>
                    Read Whitepapers
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <div className="home-about-right">
                <img className="fadeinout" src="assets/images/about-home.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home-team-heading">
                <h2 className="heading mb-0">Numquam Eius </h2>
                <h3 className="sub-heading mb-0">Team</h3>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Carousal />
        <div className="home-team-circul">
          <img src="assets/images/home-team-cercul.png" alt="" />
        </div>
      </section>

      <section className="roadmap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="roadmap-text">
                <div className="roadmap-text-box">
                  <h2 className="heading mb-0">Roadmap</h2>
                  <h3 className="sub-heading mb-0">Explore Our Roadmap</h3>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam.
                  </p>
                </div>
                <div className="btn-outer1">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    Buy Now
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarousalSecond />
      </section>
    </div>
  );
};

export default Home;
