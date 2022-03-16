import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ethers } from "ethers";
import Header from "../../components/header/Header";
import "./stakinginner.css";

const Stakinginner = () => {
  const [show, setShow] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [metaPetsBalance, setMetaPetsBalance] = useState(0);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [isConnected, setIsConnected] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          accountChangeHandler(result[0]);
          getBalance();
        });
    } else {
      console.log("Install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    console.log("Adress ", newAccount);
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
    setConnButtonText("Connect Wallet");
  };

  // const getTokens = async (
  //   tokenAddress,
  //   tokenSymbol,
  //   tokenDecimals,
  //   tokenImage
  // ) => {
  //   const wasAdded = await window.ethereum.request({
  //     method: "wallet_watchAsset",
  //     params: {
  //       type: "ERC20", // Initially only supports ERC20, but eventually more!
  //       options: {
  //         address: tokenAddress, // The address that the token is at.
  //         symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
  //         decimals: tokenDecimals, // The number of decimals in the token
  //         image: tokenImage, // A string url of the token logo
  //       },
  //     },
  //   });
  //   console.log(wasAdded);
  //   return wasAdded;
  // };
  const getUserBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  // const checkMetamaskHasDisconnected = () => {
  //   console.log(window.ethereum);
  //   window.ethereum.on("disconnect", () => {
  //     console.log("MetaMask discconnected");
  //   });
  // };

  const handleDisconnect = () => {
    setIsConnected(false);
    setDefaultAccount("");
    setUserBalance(0);
  };

  if (typeof window.ethereum !== "undefined") {
    window.ethereum.on("accountsChanged", accountChangeHandler);
  }

  function getBalance() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contract_address: "0x24cE3d571fBcFD9D81dc0e1a560504636a4D046d",
        address: "0xEcf9a23671a63d2f722f7362ECF6A48b1483b302",
      }),
    };
    fetch("http://127.0.0.1:8080/api/v1/getBebTokenBalance", requestOptions)
      .then((response) => response.json())
      .then((data) => setMetaPetsBalance(abbreviateNumber(data.balance)));
  }

  var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
  function abbreviateNumber(number) {
    // what tier? (determines SI symbol)
    var tier = (Math.log10(Math.abs(number)) / 3) | 0;

    // if zero, we don't need a suffix
    if (tier === 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window.ethereum === "undefined") {
      handleShow();
      console.log("Please install MetaMask");
    } else {
      // setIsConnected(defaultAccount ? true : false);
    }
    // if (!defaultAccount) {
    //   handleShow();
    // }
  }, []);
  return (
    <div>
      <Header />
      <section className="staking-inner">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="inner-heading">
                <h2 className="heading mb-0">Stake your Metapets and earn</h2>
                <h1 className="sub-heading mb-0">MetaPets Coin</h1>
                <div className="stakin-inner-heading-box">
                  <div className="staking-icon">
                    <img src="assets/images/stakin-inner2.svg" alt="icon" />
                    <p>{userBalance}</p>
                  </div>
                  <div className="staking-icon staking-icon1">
                    <img
                      className="first-img"
                      src="assets/images/stakin-inner1.svg"
                      alt="icon"
                    />
                    <p>{metaPetsBalance}</p>
                  </div>
                  <h6>{defaultAccount}kdsjvkdshvkjdsl;vk;dsmvlkdsnvk,m</h6>
                  {isConnected && (
                    <button onClick={handleDisconnect}>Logout</button>
                  )}
                </div>
                <div className="stakin-inner-heading-btn">
                  {defaultAccount === null && (
                    <button
                      // data-bs-toggle="modal"
                      // data-bs-target="#exampleModal1"
                      onClick={connectWalletHandler}
                    >
                      {connButtonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="staking-inner-second">
                <div className="staking-inner-second-box">
                  <h4>
                    <img src="assets/images/stakin-inner1.svg" alt="icon" />{" "}
                    2,403,210,0361.
                  </h4>
                  <p>Total Staked</p>
                </div>
                <div className="staking-inner-second-box staking-inner-second-box1">
                  <h4>$ 44,405.6499</h4>
                  <p>Total Value Locked</p>
                </div>
                <div className="staking-inner-second-box">
                  <h4>$0.000000000223</h4>
                  <p>Price MetaPets</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <div className="inner-staking-locked">
                <ul
                  className="nav nav-pills mb-0 justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      STAKING
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      MY LOCKED STAKING
                    </button>
                  </li>
                </ul>
                <div className="inner-staking-locked-box">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="table-outer">
                        <table className="table table-dark ">
                          <thead>
                            <tr>
                              <th scope="col">Package</th>
                              <th scope="col">APY</th>
                              <th scope="col">Duration</th>
                              <th scope="col">Type</th>
                              <th scope="col">Range Amount </th>
                              <th scope="col"> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="dark-tr">
                              <th>Range Amount </th>
                              <td>
                                <span className="apy-box">21.94%</span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <span
                                    className="btn btn-secondary dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    7 Days
                                  </span>

                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                  >
                                    <li>
                                      <span className="dropdown-item">30</span>
                                    </li>
                                    <li>
                                      <span className="dropdown-item">
                                        90 Days
                                      </span>
                                    </li>
                                    <li>
                                      <span className="dropdown-item">
                                        180 Days
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td>
                                <span className="lock">Lock</span>
                              </td>
                              <td>
                                <span className="range-ammount">
                                  500 - 4,999 MP
                                </span>
                              </td>
                              <td>
                                <button
                                  className="stake"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal2"
                                >
                                  Stake
                                </button>
                              </td>
                            </tr>
                            <tr className="dark-tr">
                              <td colSpan="6">
                                <div className="staking-detail">
                                  <div className="staking-detail-bar-outer">
                                    <div className="staking-detail-bar">
                                      <div className="staking-bar-text">
                                        <p>Total Staked</p>
                                        <h4>2,403,210.0361</h4>
                                      </div>
                                    </div>
                                    <div className="staking-bar">
                                      <p>Pool Limit</p>
                                      <div className="staking-bar-number">
                                        <h5>5%</h5>
                                        <h5>2,500,000</h5>
                                      </div>
                                      <div className="progress">
                                        <div
                                          className="progress-bar"
                                          role="progressbar"
                                          aria-valuenow="25"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="stack-mpc">
                                    <div className="stack-mpc-heading">
                                      <h4>Stake</h4>
                                      <div className="stack-mpcheading-right">
                                        <p>Avilable: 0 MPC</p>
                                        <h3>
                                          Buy MPC{" "}
                                          <img
                                            src="assets/images/mpc1.png"
                                            alt="icon"
                                          />
                                        </h3>
                                      </div>
                                    </div>
                                    <div className="mpc-coin">
                                      <h5>500</h5>
                                      <div className="mpc-coin-right">
                                        <p>MetaPets Coin</p>
                                        <button>MAX</button>
                                      </div>
                                    </div>
                                    <h6>
                                      The amount can not be lower than 500 MPC
                                    </h6>
                                  </div>
                                  <div className="staking-inner-summary">
                                    <h4>Summary</h4>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <p>Stake Date</p>
                                      </div>
                                      <div className="summry-row-right">
                                        <p>
                                          <img
                                            src="assets/images/calendar.png"
                                            alt=""
                                          />
                                          <span>2022-03-08</span>{" "}
                                        </p>
                                        <p className="border-right">
                                          <img
                                            src="assets/images/clock.png"
                                            alt=""
                                          />
                                          <span>02:31:04</span>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <p>Interest End Date</p>
                                      </div>
                                      <div className="summry-row-right">
                                        <p>
                                          <img
                                            src="assets/images/calendar.png"
                                            alt=""
                                          />
                                          <span>2022-03-08</span>{" "}
                                        </p>
                                        <p className="border-right">
                                          <img
                                            src="assets/images/clock.png"
                                            alt=""
                                          />
                                          <span>02:31:04</span>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <p>Withdrawal Delay Time</p>
                                      </div>
                                      <div className="summry-row-right">
                                        <p>
                                          <span>None</span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <h6>APY</h6>
                                      </div>
                                      <div className="summry-row-right">
                                        <h5>21.94%</h5>
                                      </div>
                                    </div>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <h6>Estimated Interests</h6>
                                      </div>
                                      <div className="summry-row-right">
                                        <h5>8.2192 MPC</h5>
                                      </div>
                                    </div>
                                    <div className="stakin-inner-heading-btn text-center">
                                      <button
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal5"
                                      >
                                        Confirm Staking
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="light-tr">
                              <th>Gold</th>
                              <td>
                                <span className="apy-box">21.94%</span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <span
                                    className="btn btn-secondary dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    7 Days
                                  </span>

                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                  >
                                    <li>
                                      <span className="dropdown-item">30</span>
                                    </li>
                                    <li>
                                      <span className="dropdown-item">
                                        90 Days
                                      </span>
                                    </li>
                                    <li>
                                      <span className="dropdown-item">
                                        180 Days
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td>
                                <span className="lock">Lock</span>
                              </td>
                              <td>
                                {" "}
                                <span className="range-ammount">
                                  {" "}
                                  5,000 - 19,999 MP
                                </span>{" "}
                              </td>
                              <td>
                                <button className="stake">Stake</button>
                              </td>
                            </tr>
                            <tr className="dark-tr">
                              <th>Ruby</th>
                              <td>
                                <span className="apy-box">
                                  21.94%{" "}
                                  <span className="apy-box-plush">+</span>{" "}
                                  <span className="apy-box-text">
                                    RANDOM 20 GOT A REWARD
                                  </span>
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <span
                                    className="btn btn-secondary dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    7 Days
                                  </span>

                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                  >
                                    <li>
                                      <span className="dropdown-item">30</span>
                                    </li>
                                    <li>
                                      <span className="dropdown-item">
                                        90 Days
                                      </span>
                                    </li>
                                    <li>
                                      <span className="dropdown-item">
                                        180 Days
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td>
                                <span className="lock">Lock</span>
                              </td>
                              <td>
                                {" "}
                                <span className="range-ammount">
                                  20,000 - 39,999 MP
                                </span>
                              </td>
                              <td>
                                <button
                                  className="stake"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal3"
                                >
                                  Stake
                                </button>
                              </td>
                            </tr>
                            <tr className="light-tr">
                              <th>Diamond</th>
                              <td>
                                <span className="apy-box">21.94% </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <span
                                    className="btn btn-secondary dropdown-toggle"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    7 Days
                                  </span>

                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                  >
                                    <li>
                                      <span className="dropdown-item">30</span>
                                    </li>
                                    <li>
                                      <span className="dropdown-item">
                                        90 Days
                                      </span>
                                    </li>
                                    <li>
                                      <span className="dropdown-item">
                                        180 Days
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td>
                                <span className="lock">Lock</span>
                              </td>
                              <td>
                                {" "}
                                <span className="range-ammount">
                                  40,000 - Unlimited MP
                                </span>
                              </td>
                              <td>
                                <button
                                  className="stake"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal4"
                                >
                                  Stake
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="table-outer2">
                        <table className="table table-dark ">
                          <thead>
                            <tr>
                              <th scope="col">Package</th>
                              <th scope="col">Total Amount</th>
                              <th scope="col">APY</th>
                              <th scope="col">Stake Date</th>
                              <th scope="col">Locked Days</th>
                              <th scope="col">Interest End Date</th>
                              <th scope="col">Accrue Days </th>
                              <th scope="col"> Estimated Interests</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="not-connect-outer">
                              <td colSpan="8">
                                <div className="not-connect">
                                  <img
                                    src="assets/images/MetaMask_Fox1.png"
                                    alt=""
                                  />
                                  <h5>
                                    Please connect to your Metamask wallet
                                  </h5>
                                </div>
                              </td>
                            </tr>
                            <tr className="dark-tr">
                              <td>Silver</td>
                              <td>$200.00</td>
                              <td>7 Days</td>
                              <td>18/09/2021</td>
                              <td>7 Days</td>
                              <td>18/09/2021</td>
                              <td>62</td>
                              <td>20%</td>
                            </tr>
                            <tr className="light-tr">
                              <td>Gold</td>
                              <td>$45.00</td>
                              <td>90 Days</td>
                              <td>12/06/2021</td>
                              <td>90 Days</td>
                              <td>12/06/2021</td>
                              <td>12/06/2021</td>
                              <td>40%</td>
                            </tr>
                            <tr className="dark-tr">
                              <td>Ruby</td>
                              <td>$75.00</td>
                              <td>90 Days</td>
                              <td>08/03/2022</td>
                              <td>7 Days</td>
                              <td>08/03/2022</td>
                              <td>10</td>
                              <td>24%</td>
                            </tr>
                            <tr className="light-tr">
                              <td>Diamond</td>
                              <td>$25.00</td>
                              <td>7 Days</td>
                              <td>16/08/2021</td>
                              <td>180 Days</td>
                              <td>16/08/2021</td>
                              <td>56 </td>
                              <td>32%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-staking-rpund">
          <img src="assets/images/inner-staking'.png" alt="" />
        </div>
      </section>

      {/* <div className="staking-popup1">
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div
                  className="popup-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="assets/images/popup-close.png" alt="" />
                </div>
                <img src="assets/images/popup1.png" alt="" />
                <h5>MetaPets Staking</h5>
                <p>Please connect to your wallet first.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="staking-popup1">
        <Modal
          className="staking-popup1"
          show={show}
          onHide={handleClose}
          backdrop="static"
        >
          {/* <Modal.Header>
            <Modal.Title>MetaPets Staking</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            {" "}
            <div>
              <div className="close popup-close text-center">
                <img src="assets/images/popup-close.png" alt="" />
              </div>
              <img src="assets/images/popup1.png" alt="" />
              <h5>MetaPets Staking</h5>
              <p>MetaMask is not installed</p>
            </div>{" "}
          </Modal.Body>
          {/* <Modal.Footer>
            <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to install
            </a>
          </Modal.Footer> */}
        </Modal>

        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div
                  className="popup-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="assets/images/popup-close.png" alt="" />
                </div>
                <img src="assets/images/popup1.png" alt="" />
                <h5>MetaPets Staking</h5>
                <p>MetaMask is not installed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="staking-popup1">
        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex="-1"
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div
                  className="popup-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="assets/images/popup-close.png" alt="" />
                </div>
                <img src="assets/images/popup2.png" alt="" />
                <h5>MetaPets Staking</h5>
                <p>Connected Successfully</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="staking-popup1">
        <div
          className="modal fade"
          id="exampleModal4"
          tabIndex="-1"
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div
                  className="popup-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="assets/images/popup-close.png" alt="" />
                </div>
                <img src="assets/images/popup2.png" alt="" />
                <h5>MetaPets Staking</h5>
                <p>Logout Successfully</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="staking-popup1 staking-popup1">
        <div
          className="modal fade"
          id="exampleModal5"
          tabIndex="-1"
          aria-labelledby="exampleModal1Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div
                  className="popup-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src="assets/images/popup-close.png" alt="" />
                </div>

                <p>0x8DB14e19d8c235b9556362008b9BE6D02Ca33137</p>
                <div className="stakin-inner-heading-btn">
                  <button>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stakinginner;
