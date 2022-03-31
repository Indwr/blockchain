import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ethers } from "ethers";
import axios from "axios";
import fromExponential from "from-exponential";
import Header from "../../components/header/Header";
import "./stakinginner.css";
// import Web3 from "web3";
import Web3 from "web3";

const Stakinginner = () => {
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loaderForConnect, setLoaderForConnect] = useState(false);
  const [baseUrl, setBaseUrl] = useState("http://127.0.0.1:3002/api/v1/");
  const [totalStacked, setTotalStacked] = useState(0);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [metaPetsBalance, setMetaPetsBalance] = useState(0);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [totalLockedValue, setTotalLockedValue] = useState(0);
  const [metaPetsPrice, setMetaPetsPrice] = useState(0);
  const [lockedVolumn, setLockedVolumn] = useState([]);
  const [firstRow, setFirstRow] = useState(false);
  const [secondRow, setSecondRow] = useState(false);
  const [thirdRow, setThirdRow] = useState(false);
  const [browser, setBrowser] = useState("");
  const [metapetaInputValue1, setMetapetaInputValue1] = useState("");
  const [metapetaInputValue2, setMetapetaInputValue2] = useState("");
  const [metapetaInputValue3, setMetapetaInputValue3] = useState("");
  const [metaPetsBalanceTo, setMetaPetsBalanceTo] = useState(0);
  const [finalMonth, setFinalMonth] = useState("");
  const [finalMonth2, setFinalMonth2] = useState("");
  const [finalMonth3, setFinalMonth3] = useState("");
  const [walletAddress, setWalletAddress] = useState(
    "0x4c734A99858A35d08a30BB42CC9636789233eDf8"
  );
  const [contractAdress, setContractAddress] = useState(
    "0x24cE3d571fBcFD9D81dc0e1a560504636a4D046d"
  );
  const [metaPetsTotalStackingGold, setMetaPetsTotalStackingGold] = useState(0);
  const [metaPetsTotalStackingSilver, setMetaPetsTotalStackingSilver] =
    useState(0);
  const [metaPetsTotalStackingDiamond, setMetaPetsTotalStackingDiamond] =
    useState(0);
  const handleClose = () => setShow(false);
  const handleClose3 = () => setLoaderForConnect(true);
  const handleShow = () => setShow(false);
  const closePopup = () => setLoader(false);
  const closePopup3 = () => setLoaderForConnect(false);

  const handleChangeFirst = (e) => {
    setMetapetaInputValue1(e.target.value);
  };
  const handleChangeSecond = (e) => {
    setMetapetaInputValue2(e.target.value);
  };
  const handleChangeThird = (e) => {
    setMetapetaInputValue3(e.target.value);
  };
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
      setLoader(true);
    } else {
      console.log("Install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    console.log("Adress ", newAccount);
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
    setConnButtonText("Connect Wallet");
    getBalance(newAccount);
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
    setDefaultAccount("");
    setUserBalance(0);
  };

  if (typeof window.ethereum !== "undefined") {
    window.ethereum.on("accountsChanged", accountChangeHandler);
  }

  function getBalance(addresss) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contract_address: "0x24cE3d571fBcFD9D81dc0e1a560504636a4D046d",
        address: addresss,
      }),
    };
    fetch(`${baseUrl}getBebTokenBalance`, requestOptions)
      .then((response) => response.json())
      .then((data) => setMetaPetsBalanceFinal(data.balance));
  }

  const setMetaPetsBalanceFinal = (balance) => {
    setMetaPetsBalance(abbreviateNumber(balance));
    setMetaPetsBalanceTo(balance);
  };

  const getLockedVolumn = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address: defaultAccount,
      }),
    };
    fetch(`${baseUrl}getListingLockedToken`, requestOptions)
      .then((response) => response.json())
      .then((data) => setLockedVolumn(data.totalListingLockedToken));
  };

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

  function dateFormater(date, separator) {
    var day = date.getDate();
    // add +1 to month because getMonth() returns month from 0 to 11
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // show date and month in two digits
    // if month is less than 10, add a 0 before it
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    // now we have day, month and year
    // use the separator to join them
    return year + separator + month + separator + day;
  }

  function updateMonth(month2) {
    let date = new Date();
    var day = date.getDate();
    // add +1 to month because getMonth() returns month from 0 to 11
    var month = date.getMonth() + month2;
    var year = date.getFullYear();

    // show date and month in two digits
    // if month is less than 10, add a 0 before it
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    // now we have day, month and year
    // use the separator to join them
    let ff = year + "-" + month + "-" + day;
    setFinalMonth(ff);

    // (new Date().getMonth() + month);
  }

  function updateMonth2(month3) {
    let date = new Date();
    var day = date.getDate();
    // add +1 to month because getMonth() returns month from 0 to 11
    var month = date.getMonth() + month3;
    var year = date.getFullYear();

    // show date and month in two digits
    // if month is less than 10, add a 0 before it
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    // now we have day, month and year
    // use the separator to join them
    let ff = year + "-" + month + "-" + day;
    setFinalMonth2(ff);

    // (new Date().getMonth() + month);
  }

  function updateMonth3(month4) {
    let date = new Date();
    var day = date.getDate();
    // add +1 to month because getMonth() returns month from 0 to 11
    var month = date.getMonth() + month4;
    var year = date.getFullYear();

    // show date and month in two digits
    // if month is less than 10, add a 0 before it
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    // now we have day, month and year
    // use the separator to join them
    let ff = year + "-" + month + "-" + day;
    setFinalMonth3(ff);

    // (new Date().getMonth() + month);
  }

  function timeFormater(date, separator) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return hours + separator + minutes + separator + seconds;
  }

  const totalStackedToken = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${baseUrl}getTotalStackedToken`, requestOptions)
      .then((response) => response.json())
      .then((data) =>
        setTotalStacked(abbreviateNumber(data.totalStackedToken))
      );
  };

  // function updateMetaPrice() {
  //   setTotalLockedValue(fromExponential(totalStacked * metaPetsPrice));
  // }
  const firstClass = () => {
    if (defaultAccount) {
      let response = firstRow === true ? false : true;
      setFirstRow(response);
      updateMonth(3);
    } else {
      handleClose3();
    }
  };
  const secondClass = () => {
    if (defaultAccount) {
      let response = secondRow === true ? false : true;
      setSecondRow(response);
      updateMonth2(5);
    } else {
      handleClose3();
    }
  };
  const thirdClass = () => {
    if (defaultAccount) {
      let response = thirdRow === true ? false : true;
      setThirdRow(response);
      updateMonth3(7);
    } else {
      handleClose3();
    }
  };

  //Start Stacking Code

  //Get ABI data
  const getAbi = async () => {
    return axios
      .post(`${baseUrl}getAbiData`, {
        address: "0x4D1E90aB966ae26c778b2f9f365aA40abB13f53C",
      })
      .then((response) => {
        return response.data.data;
      })
      .catch(function (error) {
        return error;
      });
  };

  const submitFirstPackage = async () => {
    let hasKey = await createTransaction();
    return hasKey;
  };

  const submitSecondPackage = async () => {
    let hasKey = await createTransaction();
    return hasKey;
  };

  const submitThirdPackage = async () => {
    // let hasKey = await createTransaction();
    // let obj = {
    //   tokenAddress: walletAddress,
    //   userAddress: defaultAccount,
    //   package: "diamond",
    //   totalAmount: "",
    //   apy: "",
    //   stackDate: "",
    //   lockedDay: "",
    //   noOfStackedToken: "",
    //   endDate: "",
    //   estimatedInterest: "",
    //   rawData: "",
    // };
    // await insertData(obj);
  };

  // const insertData = async (data) => {
  //   await axios.post(`${baseUrl}createStackRecord`, data);
  // };

  const createTransaction = async () => {
    let data = await getAbi();
    let addr = contractAdress;
    let tokensValue = 0.000002;
    tokensValue = (tokensValue * 1e8).toFixed(0);
    tokensValue = tokensValue.toLocaleString("fullwide", {
      useGrouping: false,
    });

    let web3 = new Web3(window.ethereum);
    const myContract = new web3.eth.Contract(JSON.parse(data), addr);
    console.log(myContract);
    const tx = myContract.methods.transfer(walletAddress, tokensValue);
    const transactionParameters = {
      nonce: "0x00", // ignored by MetaMask
      gasPrice: 0, // customizable by user during MetaMask confirmation.
      gas: 0, // customizable by user during MetaMask confirmation.
      to: contractAdress, // Required except during contract publications.
      from: defaultAccount, // must match user's active address.
      value: "0x00", // Only required to send ether to the recipient from the initiating external account.
      data: tx.encodeABI(), // Optional, but used for defining smart contract creation and interaction.
      chainId: "0x3", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return txHash;
  };

  const fetchBalance = async () => {
    try {
      const resp = await axios.post(`${baseUrl}getTokenPrice`);
      setMetaPetsPrice(fromExponential(resp.data.data));
      setTotalLockedValue(fromExponential(resp.data.totalStackedToken));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStackedDataAccordingToPackages = async () => {
    const resp = await axios.get(`${baseUrl}getTotalStackedAccordingToPackage`);
    let checkGoldPrice =
      resp.data.gold.length > 0 ? resp.data.gold[0].noOfStockedToken : 0;
    let checkSilverPrice =
      resp.data.silver.length > 0 ? resp.data.silver[0].noOfStockedToken : 0;
    let checkDiamondPrice =
      resp.data.diamond.length > 0 ? resp.data.diamond[0].noOfStockedToken : 0;
    setMetaPetsTotalStackingGold(checkGoldPrice);
    setMetaPetsTotalStackingSilver(checkSilverPrice);
    setMetaPetsTotalStackingDiamond(checkDiamondPrice);
  };

  const updateMetaPets = () => {
    setMetapetaInputValue1(metaPetsBalanceTo);
  };

  const updateMetaPets2 = () => {
    setMetapetaInputValue2(metaPetsBalanceTo);
  };

  const updateMetaPets3 = () => {
    setMetapetaInputValue3(metaPetsBalanceTo);
  };

  const checkBrowser = () => {
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== "undefined";

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(
        !window["safari"] ||
          (typeof safari !== "undefined" && window["safari"].pushNotification)
      );

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 79
    var isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") !== -1;

    var output;
    output += "isFirefox: " + isFirefox + ",";
    output += "isChrome: " + isChrome + ",";
    output += "isSafari: " + isSafari + ",";
    output += "isIE: " + isIE + ",";
    output += "isEdge: " + isEdge + ",";
    output += "isEdgeChromium: " + isEdgeChromium + ",";
    // document.body.innerHTML = output;
    output.split(",").forEach((element) => {
      let brow = element.split(":");
      if ("isChrome" === brow[0]) {
        setBrowser(
          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
        );
      }
      if ("isSafari" === brow[0]) {
        setBrowser("https://metamask.io/download/");
      }
      if ("isIE" === brow[0]) {
        setBrowser("https://metamask.io/download/");
      }
      if ("isEdge" === brow[0]) {
        setBrowser(
          "https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm?hl=en-US"
        );
      }
      if ("isEdgeChromium" === brow[0]) {
        setBrowser("https://metamask.io/download/");
      }
      if ("isFirefox" === brow[0]) {
        setBrowser(
          "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/"
        );
      }
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window.ethereum === "undefined") {
      checkBrowser();
      setTimeout(() => {
        handleShow();
      }, 200);
      console.log("Please install MetaMask");
    } else {
      setTimeout(() => {
        totalStackedToken();
        getLockedVolumn();
        fetchBalance();
        fetchStackedDataAccordingToPackages();
        setWalletAddress("0x4c734A99858A35d08a30BB42CC9636789233eDf8");
        setContractAddress("0x24cE3d571fBcFD9D81dc0e1a560504636a4D046d");
      }, 100);
    }

    setBaseUrl("http://127.0.0.1:3002/api/v1/");
  }, []);
  return (
    <div>
      <Header />
      <section className="staking-inner">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="inner-heading">
                <h2 className="heading mb-0">Stake your MetaPets</h2>
                <h1 className="sub-heading mb-0">Earn $MetaPets</h1>
                <p>
                  Stake your MetaPets and grow back while supporting our
                  ecosystem
                </p>
                {defaultAccount && (
                  <span onClick={handleDisconnect}>
                    <div className="stakin-inner-heading-box">
                      <div className="staking-icon">
                        <img src="assets/images/stakin-inner2.svg" alt="icon" />
                        <p className="userBalanceFIrstP">{userBalance}</p>
                      </div>
                      <div className="staking-icon staking-icon1">
                        <img
                          className="first-img"
                          src="assets/images/stakin-inner1.svg"
                          alt="icon"
                        />
                        <p className="metaPetsBalanceSecondP">
                          {metaPetsBalance}
                        </p>
                      </div>
                      <h6>{defaultAccount}</h6>
                    </div>
                  </span>
                )}
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
                    <img src="assets/images/stakin-inner1.svg" alt="icon" />
                    {totalStacked}
                  </h4>
                  <p>Total Staked</p>
                </div>
                <div className="staking-inner-second-box staking-inner-second-box1">
                  <h4>$ {totalLockedValue}</h4>
                  <p>Total Value Locked</p>
                </div>
                <div className="staking-inner-second-box">
                  <h4>$ {metaPetsPrice}</h4>
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
                              <th scope="col"> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="dark-tr">
                              <th>Silver </th>
                              <td>
                                <span className="apy-box">
                                  20% <span className="apy-box-plush">+</span>{" "}
                                  <span className="apy-box-text">
                                    13% Tax Back
                                  </span>
                                </span>
                              </td>
                              <td>
                                <span className="lock">2 Month</span>
                              </td>
                              <td>
                                <span className="lock">Lock</span>
                              </td>

                              <td>
                                <button
                                  className="stake"
                                  // data-bs-toggle="modal"
                                  // data-bs-target="#exampleModal2"
                                  onClick={firstClass}
                                >
                                  Stake
                                </button>
                              </td>
                            </tr>
                            <tr
                              className={
                                "dark-tr " +
                                (firstRow === true ? "" : "firstRowHide")
                              }
                            >
                              <td colSpan="6">
                                <div className="staking-detail">
                                  <div className="staking-detail-bar-outer">
                                    <div className="staking-detail-bar">
                                      <div className="staking-bar-text">
                                        <p>Total Staked</p>
                                        <h4>{metaPetsTotalStackingGold}</h4>
                                      </div>
                                    </div>
                                    <div className="staking-bar">
                                      <p>Pool Limit</p>
                                      <div className="staking-bar-number">
                                        <h5>Unlimited</h5>
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
                                        <p>Avilable: {metaPetsBalance} MPC</p>
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
                                      <input
                                        type="text"
                                        onChange={handleChangeFirst}
                                        value={metapetaInputValue1 || 0}
                                      />
                                      <div className="mpc-coin-right">
                                        <p>MetaPets Coin</p>
                                        <button onClick={updateMetaPets}>
                                          MAX
                                        </button>
                                      </div>
                                    </div>
                                    {/* <h6>
                                      The amount can not be lower than 500 MPC
                                    </h6> */}
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
                                          <span>
                                            {dateFormater(new Date(), "-")}
                                          </span>{" "}
                                        </p>
                                        <p className="border-right">
                                          <img
                                            src="assets/images/clock.png"
                                            alt=""
                                          />
                                          <span>
                                            {timeFormater(new Date(), ":")}
                                          </span>{" "}
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
                                          <span>{finalMonth}</span>{" "}
                                        </p>
                                        <p className="border-right">
                                          <img
                                            src="assets/images/clock.png"
                                            alt=""
                                          />
                                          <span>
                                            {timeFormater(new Date(), ":")}
                                          </span>{" "}
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
                                        <h5>20% + 13% Tax Back</h5>
                                      </div>
                                    </div>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <h6>Estimated Interests</h6>
                                      </div>
                                      <div className="summry-row-right">
                                        <h5>
                                          {(20 / 100) * metapetaInputValue1} MPC
                                        </h5>
                                      </div>
                                    </div>
                                    <div className="stakin-inner-heading-btn text-center">
                                      <button onClick={submitFirstPackage}>
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
                                <span className="apy-box">
                                  45% <span className="apy-box-plush">+</span>{" "}
                                  <span className="apy-box-text">
                                    13% Tax Back
                                  </span>
                                </span>
                              </td>
                              <td>
                                <span className="lock">4 Month</span>
                              </td>
                              <td>
                                <span className="lock">Lock</span>
                              </td>
                              <td>
                                <button onClick={secondClass} className="stake">
                                  Stake
                                </button>
                              </td>
                            </tr>
                            <tr
                              className={
                                "dark-tr " +
                                (secondRow === true ? "" : "secondRowHide")
                              }
                            >
                              <td colSpan="6">
                                <div className="staking-detail">
                                  <div className="staking-detail-bar-outer">
                                    <div className="staking-detail-bar">
                                      <div className="staking-bar-text">
                                        <p>Total Staked</p>
                                        <h4>{metaPetsTotalStackingSilver}</h4>
                                      </div>
                                    </div>
                                    <div className="staking-bar">
                                      <p>Pool Limit</p>
                                      <div className="staking-bar-number">
                                        {/* <h5>5%</h5> */}
                                        <h5>Unlimited</h5>
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
                                        <p>Avilable: {metaPetsBalance} MPC</p>
                                        <a
                                          href="https://swap.metapetscoin.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <h3>
                                            Buy MPC{" "}
                                            <img
                                              src="assets/images/mpc1.png"
                                              alt="icon"
                                            />
                                          </h3>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="mpc-coin">
                                      <input
                                        type="text"
                                        placeholder=""
                                        value={metapetaInputValue2 || 0}
                                        onChange={handleChangeSecond}
                                      />
                                      <div className="mpc-coin-right">
                                        <p>MetaPets Coin</p>
                                        <button onClick={updateMetaPets2}>
                                          MAX
                                        </button>
                                      </div>
                                    </div>
                                    {/* <h6>
                                      The amount can not be lower than 500 MPC
                                    </h6> */}
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
                                          <span>
                                            {dateFormater(new Date(), "-")}
                                          </span>{" "}
                                        </p>
                                        <p className="border-right">
                                          <img
                                            src="assets/images/clock.png"
                                            alt=""
                                          />
                                          <span>
                                            {timeFormater(new Date(), ":")}
                                          </span>{" "}
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
                                          <span>{finalMonth2}</span>{" "}
                                        </p>
                                        <p className="border-right">
                                          <img
                                            src="assets/images/clock.png"
                                            alt=""
                                          />
                                          <span>
                                            {timeFormater(new Date(), ":")}
                                          </span>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <h6>APY</h6>
                                      </div>
                                      <div className="summry-row-right">
                                        <h5>45% + 13% Tax Back</h5>
                                      </div>
                                    </div>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <h6>Estimated Interests</h6>
                                      </div>
                                      <div className="summry-row-right">
                                        <h5>
                                          {(45 / 100) * metapetaInputValue2} MPC
                                        </h5>
                                      </div>
                                    </div>
                                    <div className="stakin-inner-heading-btn text-center">
                                      <button onClick={submitSecondPackage}>
                                        Confirm Staking
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="dark-tr">
                              <th>Diamond</th>
                              <td>
                                <span className="apy-box">
                                  100% <span className="apy-box-plush">+</span>{" "}
                                  <span className="apy-box-text">
                                    13% Tax Back
                                  </span>
                                </span>
                              </td>
                              <td>
                                <span className="lock">6 Month</span>
                              </td>
                              <td>
                                <span className="lock">Lock</span>
                              </td>
                              <td>
                                <button
                                  className="stake"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal3"
                                  onClick={thirdClass}
                                >
                                  Stake
                                </button>
                              </td>
                            </tr>
                            <tr
                              className={
                                "dark-tr " +
                                (thirdRow === true ? "" : "thirdRowHide")
                              }
                            >
                              <td colSpan="6">
                                <div className="staking-detail">
                                  <div className="staking-detail-bar-outer">
                                    <div className="staking-detail-bar">
                                      <div className="staking-bar-text">
                                        <p>Total Staked</p>
                                        <h4>{metaPetsTotalStackingDiamond}</h4>
                                      </div>
                                    </div>
                                    <div className="staking-bar">
                                      <p>Pool Limit</p>
                                      <div className="staking-bar-number">
                                        <h5>Unlimted</h5>
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
                                        <p>Avilable: {metaPetsBalance} MPC</p>
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
                                      <input
                                        type="text"
                                        placeholder=""
                                        value={metapetaInputValue3 || 0}
                                        onChange={handleChangeThird}
                                      />
                                      <div className="mpc-coin-right">
                                        <p>MetaPets Coin</p>
                                        <button onClick={updateMetaPets3}>
                                          MAX
                                        </button>
                                      </div>
                                    </div>
                                    {/* <h6>
                                      The amount can not be lower than 500 MPC
                                    </h6> */}
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
                                          <span>
                                            {dateFormater(new Date(), "-")}
                                          </span>{" "}
                                        </p>
                                        <p className="border-right">
                                          <img
                                            src="assets/images/clock.png"
                                            alt=""
                                          />
                                          <span>
                                            {timeFormater(new Date(), ":")}
                                          </span>{" "}
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
                                          <span>{finalMonth3}</span>{" "}
                                        </p>
                                        <p className="border-right">
                                          <img
                                            src="assets/images/clock.png"
                                            alt=""
                                          />
                                          <span>
                                            {timeFormater(new Date(), ":")}
                                          </span>{" "}
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
                                        <h5>100% + 13% Tax Back</h5>
                                      </div>
                                    </div>
                                    <div className="summry-row">
                                      <div className="summry-row-left">
                                        <h6>Estimated Interests</h6>
                                      </div>
                                      <div className="summry-row-right">
                                        <h5>
                                          {" "}
                                          {(100 / 100) *
                                            metapetaInputValue3}{" "}
                                          MPC
                                        </h5>
                                      </div>
                                    </div>
                                    <div className="stakin-inner-heading-btn text-center">
                                      <button onClick={submitThirdPackage}>
                                        Confirm Staking
                                      </button>
                                    </div>
                                  </div>
                                </div>
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
                            {lockedVolumn.map((item, key) => (
                              <>
                                <tr
                                  className={
                                    key % 2 === 0 ? "dark-tr" : "light-tr"
                                  }
                                >
                                  <td>{item.package}</td>
                                  <td>${item.totalAmount}</td>
                                  <td>{item.lockedDay} Days</td>
                                  <td>{item.stackDate}</td>
                                  <td>{item.lockedDay} Days</td>
                                  <td>{item.endDate}</td>
                                  <td>62</td>
                                  {/* Note Calcualete days According to current date and End date of the Package */}
                                  <td>20%</td>
                                  {/* Note Calcualete Estimated Interest According to Start Date from stacking with current Date */}
                                </tr>
                              </>
                            ))}
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
          <Modal.Body>
            {" "}
            <div>
              <div className="close popup-close text-center">
                <img src="assets/images/popup-close.png" alt="" />
              </div>
              <img src="assets/images/popup1.png" alt="" />
              <h5>MetaPets Staking</h5>
              <p>MetaMask is not installed</p>
              <a target="_blank" rel="noopener noreferrer" href={browser}>
                Click to Install MetaMask
              </a>
            </div>{" "}
          </Modal.Body>
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
        <Modal
          className="staking-popup1"
          show={loader}
          onHide={handleClose}
          backdrop="static"
        >
          <Modal.Body>
            {" "}
            <div>
              <div
                className="close popup-close text-center"
                onClick={closePopup}
              >
                <img src="assets/images/popup-close.png" alt="" />
              </div>
              <img src="assets/images/popup2.png" alt="" />
              <h5>MetaPets Staking</h5>
              <p>Connected Successfully</p>
            </div>{" "}
          </Modal.Body>
        </Modal>
      </div>

      <div className="staking-popup1">
        <Modal
          className="staking-popup1"
          show={loaderForConnect}
          onHide={handleClose3}
          backdrop="static"
        >
          <Modal.Body>
            {" "}
            <div>
              <div
                className="close popup-close text-center"
                onClick={closePopup3}
              >
                <img src="assets/images/popup-close.png" alt="" />
              </div>
              <img src="assets/images/popup1.png" alt="" />
              <h5>MetaPets Staking</h5>
              <p>Please Connect Your Wallet</p>
            </div>{" "}
          </Modal.Body>
        </Modal>
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
