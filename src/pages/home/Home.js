import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Carousal from "../../../src/components/carousal/Carousal";
import CarousalSecond from "../../../src/components/carousal-second/CarousalSecond";
import Header from "../../components/header/Header";
import "./home.css";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const newLocal = "0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d";
  const [address, setAddress] = useState(newLocal);

  const copyAddress = (e) => {
    alert("Copied");
    setAddress(newLocal);
  };
  return (
    <div className="home-outer">
      <Header />
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-inner">
                <h2 className="heading english-lng">MetaPets</h2>
                <h2 className="heading erabic-lng">ميتابيتس</h2>
                <h2 className="heading turkish-lng">MetaPets</h2>
                <h1 className="sub-heading english-lng">
                  A new world, a new pet
                </h1>
                <h1 className="sub-heading erabic-lng">
                  عالم جديد، حيوان أليف جديد
                </h1>
                <h1 className="sub-heading turkish-lng">Yeni bir dünya, yeni bir evcil hayvan</h1>
                <p className="english-lng">
                  With MetaPets you can find your fur-ever friend who will
                  always be with you in the Metaverse.
                </p>
                <p className="erabic-lng">
                  مع ميتابيتس، يمكنك العثور على صديقك الأبدي الذي سيكون معك
                  دائمًا في ميتافيرس
                </p>
                <p className="turkish-lng">
                Metapets ile metaverse'de her zaman yanınızda olacak tüylü arkadaşınızı bulabilirsiniz.
                </p>
                <div className="copy">
                  <div className="copy-addres">
                    <p className="copy-text mb-0">{address}</p>
                    <div className="btn-outer1">
                      <CopyToClipboard
                        text={address}
                        onCopy={(e) => copyAddress(e)}
                      >
                        <button className="comman-btn btn-outer ">
                          <span className="english-lng">Copy Address</span>
                          <span className="erabic-lng"> نسخ العنوان</span>
                          <span className="turkish-lng"> Adresi kopyala </span>
                          <img
                            src="assets/images/button-border.svg"
                            alt="button-border"
                          />
                        </button>
                        {/* <button className="comman-btn btn-outer ">
                       
                          <img
                            src="assets/images/button-border.svg"
                            alt="button-border"
                          />
                        </button> */}
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
                <ul>
                  <li className="banner-icon1">
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34 5.66667L17 22.6667L22.6667 28.3333L34 17L45.3333 28.3333L51 22.6667L34 5.66667Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34 62.3333L17 45.3333L22.6667 39.6667L34 51L45.3333 39.6667L51 45.3333L34 62.3333Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M56.058 27.489L49.647 33.9L56.058 40.3111L62.4691 33.9L56.058 27.489Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.1415 27.4886L5.73044 33.8996L12.1415 40.3107L18.5525 33.8996L12.1415 27.4886Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.7991 26.9879L26.787 34L33.7991 41.0121L40.8112 34L33.7991 26.9879Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="59"
                      height="59"
                      viewBox="0 0 59 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9625 22.3708L28.7625 17.2083C29.2542 16.9625 29.7458 16.9625 30.4833 17.2083L42.2833 22.3708C43.2667 22.8625 44.25 21.6333 43.5125 20.65L31.2208 5.65417C30.4833 4.67084 29.0083 4.67084 28.2708 5.65417L15.9792 20.65C14.9958 21.6333 15.9792 22.8625 16.9625 22.3708Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.9625 36.6292L28.7625 41.7917C29.2542 42.0375 29.7458 42.0375 30.4833 41.7917L42.2833 36.6292C43.2667 36.1375 44.25 37.3667 43.5125 38.35L31.2208 53.3458C30.4833 54.3292 29.0083 54.3292 28.2708 53.3458L15.9792 38.35C14.9958 37.3667 15.9792 36.1375 16.9625 36.6292Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.5 23.1083L16.7167 29.5L29.5 35.8917L42.2833 29.5L29.5 23.1083Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                  <li className="banner-icon-3">
                    <svg
                      width="79"
                      height="79"
                      viewBox="0 0 79 79"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.5 39.8292L24.6875 48.3875L9.875 39.8292V22.7125L24.6875 14.1542L39.5 22.7125V27.9792"
                        stroke="#86868b"
                        strokeWidth="6.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M39.5 39.8292L54.3125 31.2708L69.125 39.8292V56.9458L54.3125 65.5042L39.5 56.9458V51.35"
                        stroke="#86868b"
                        strokeWidth="6.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width="74"
                      height="74"
                      viewBox="0 0 74 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M61.6667 10.7917H16.9583C16.0333 10.7917 15.1083 11.1 14.4917 12.025L9.86667 18.1917C8.325 20.35 9.86667 23.125 12.3333 23.125H57.0417C57.9667 23.125 58.8917 22.8167 59.5083 21.8917L64.1333 15.725C65.675 13.5667 64.1333 10.7917 61.6667 10.7917Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M12.3333 30.8333H57.0417C57.9667 30.8333 58.8917 31.1417 59.5083 32.0667L64.1333 38.2333C65.675 40.3917 64.1333 43.1667 61.6667 43.1667H16.9583C16.0333 43.1667 15.1083 42.8583 14.4917 41.9333L9.86667 35.7667C8.325 33.6083 9.86667 30.8333 12.3333 30.8333Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M61.6667 50.875H16.9583C16.0333 50.875 15.1083 51.1833 14.4917 52.1083L9.86667 58.275C8.325 60.4333 9.86667 63.2083 12.3333 63.2083H57.0417C57.9667 63.2083 58.8917 62.9 59.5083 61.975L64.1333 55.8083C65.675 53.65 64.1333 50.875 61.6667 50.875Z"
                        fill="#86868b"
                        stroke="#86868b"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </li>
                </ul>
                <div className="banner-img">
                  <img
                    className="cat-black"
                    src="assets/images/banner-img2.png"
                    alt=""
                  />
                  <img
                    className="cat-white"
                    src="assets/images/banner-img-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white-bg">
          <img src="assets/images/white-banner1.png" alt="" />
        </div>
      </div>

      <section>
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
                      <svg
                        width="41"
                        height="34"
                        viewBox="0 0 41 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.6207 33.5C27.7157 33.5 35.9732 20.9925 35.9732 10.165C35.9732 9.81502 35.9732 9.46002 35.9582 9.11002C37.5658 7.94624 38.9533 6.5054 40.0557 4.85502C38.554 5.51715 36.9626 5.95354 35.3332 6.15002C37.0495 5.12412 38.335 3.50995 38.9507 1.60752C37.3381 2.56283 35.5732 3.23346 33.7332 3.59002C32.4961 2.27258 30.8592 1.39982 29.0759 1.10692C27.2926 0.814017 25.4625 1.11733 23.869 1.96987C22.2756 2.82241 21.0077 4.1766 20.2618 5.82267C19.5159 7.46875 19.3336 9.31486 19.7432 11.075C16.48 10.9114 13.2877 10.0637 10.3733 8.58688C7.45884 7.11007 4.88737 5.03713 2.82566 2.50252C1.77901 4.31023 1.4596 6.44853 1.93228 8.48319C2.40496 10.5179 3.6343 12.2963 5.37066 13.4575C4.06951 13.4133 2.79697 13.0639 1.65566 12.4375V12.55C1.65791 14.4437 2.31393 16.2786 3.51285 17.7444C4.71176 19.2103 6.38003 20.2172 8.23566 20.595C7.53132 20.7891 6.80374 20.8858 6.07316 20.8825C5.55812 20.8841 5.04412 20.8364 4.53816 20.74C5.06263 22.3702 6.08385 23.7954 7.45878 24.8162C8.83371 25.837 10.4935 26.4021 12.2057 26.4325C9.29705 28.717 5.70417 29.956 2.00566 29.95C1.35397 29.9528 0.702722 29.9152 0.0556641 29.8375C3.80945 32.2307 8.16891 33.5014 12.6207 33.5Z"
                          fill="url(#paint0_linear_558_6373)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_558_6373"
                            x1="20.0557"
                            y1="0.998291"
                            x2="20.0557"
                            y2="33.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0.35"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://discord.com/invite/NQKR42dVmm"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        width="38"
                        height="28"
                        viewBox="0 0 38 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.5888 2.36479C31.5786 2.34499 31.5617 2.32949 31.5411 2.32104C29.1584 1.22783 26.644 0.448282 24.0607 0.0019121C24.0372 -0.00245108 24.013 0.000696574 23.9914 0.0109074C23.9698 0.0211182 23.952 0.0378723 23.9405 0.0587871C23.5981 0.680218 23.2873 1.31853 23.0093 1.97129C20.2247 1.54859 17.3922 1.54859 14.6077 1.97129C14.3278 1.31687 14.012 0.678401 13.6617 0.0587871C13.6497 0.0383269 13.6318 0.0219586 13.6104 0.0118141C13.5889 0.00166961 13.5649 -0.00178091 13.5415 0.0019121C10.958 0.447345 8.44336 1.22695 6.06097 2.3211C6.04057 2.32975 6.02337 2.34451 6.01172 2.36335C1.24741 9.47822 -0.0577196 16.4182 0.58253 23.2722C0.584332 23.289 0.589492 23.3052 0.597706 23.32C0.60592 23.3347 0.617019 23.3477 0.630343 23.3581C3.40456 25.4122 6.50755 26.9801 9.80691 27.9949C9.83014 28.0019 9.85495 28.0016 9.878 27.994C9.90105 27.9865 9.92124 27.972 9.93584 27.9527C10.6445 26.9885 11.2724 25.9675 11.8132 24.9C11.8206 24.8854 11.8248 24.8693 11.8256 24.8529C11.8264 24.8365 11.8237 24.8201 11.8176 24.8049C11.8116 24.7896 11.8024 24.7757 11.7907 24.7643C11.7789 24.7528 11.7649 24.7439 11.7495 24.7383C10.7593 24.3594 9.80074 23.9027 8.88272 23.3725C8.86604 23.3627 8.85204 23.3489 8.84194 23.3324C8.83184 23.3159 8.82596 23.2972 8.82482 23.2779C8.82367 23.2586 8.8273 23.2393 8.83539 23.2217C8.84347 23.2041 8.85575 23.1888 8.87116 23.1771C9.06378 23.0328 9.25653 22.8827 9.44047 22.731C9.45681 22.7176 9.47658 22.7089 9.49756 22.7061C9.51855 22.7033 9.5399 22.7064 9.55922 22.715C15.5735 25.4598 22.0848 25.4598 28.028 22.715C28.0473 22.7058 28.0689 22.7023 28.0902 22.7049C28.1115 22.7075 28.1316 22.716 28.1482 22.7296C28.3322 22.8812 28.5249 23.0328 28.719 23.1771C28.7345 23.1887 28.7468 23.2039 28.7551 23.2214C28.7633 23.2389 28.767 23.2582 28.766 23.2775C28.765 23.2968 28.7593 23.3156 28.7493 23.3321C28.7393 23.3487 28.7254 23.3626 28.7088 23.3725C27.7929 23.9072 26.8335 24.3636 25.8407 24.7368C25.8253 24.7427 25.8113 24.7518 25.7996 24.7634C25.7879 24.7751 25.7789 24.7891 25.773 24.8045C25.7671 24.8199 25.7645 24.8363 25.7654 24.8528C25.7663 24.8693 25.7707 24.8854 25.7782 24.9C26.3281 25.9615 26.955 26.9812 27.6541 27.951C27.6683 27.9709 27.6884 27.9858 27.7115 27.9936C27.7346 28.0015 27.7597 28.0019 27.783 27.9947C31.0883 26.9834 34.1967 25.4153 36.9744 23.3581C36.9879 23.3482 36.9992 23.3356 37.0074 23.321C37.0157 23.3064 37.0207 23.2903 37.0222 23.2736C37.7887 15.3497 35.739 8.4666 31.5888 2.36479ZM12.7113 19.0988C10.9006 19.0988 9.40859 17.4371 9.40859 15.3963C9.40859 13.3556 10.8717 11.6938 12.7113 11.6938C14.5654 11.6938 16.043 13.37 16.014 15.3962C16.014 17.4371 14.5509 19.0988 12.7113 19.0988ZM24.9226 19.0988C23.1119 19.0988 21.6199 17.4371 21.6199 15.3963C21.6199 13.3556 23.083 11.6938 24.9226 11.6938C26.7768 11.6938 28.2543 13.37 28.2253 15.3962C28.2253 17.4371 26.7768 19.0988 24.9226 19.0988Z"
                          fill="url(#paint0_linear_558_6371)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_558_6371"
                            x1="18.8056"
                            y1="0"
                            x2="18.8056"
                            y2="27.9999"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0.35"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://t.me/metapets"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="36"
                        height="30"
                        viewBox="0 0 36 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.9538 2.70317L29.6726 27.6094C29.2741 29.3672 28.235 29.8047 26.7585 28.9766L18.7116 23.0469L14.8288 26.7813C14.3991 27.211 14.0397 27.5704 13.2116 27.5704L13.7897 19.375L28.7038 5.89848C29.3522 5.32036 28.5632 5.00005 27.696 5.57817L9.25849 17.1875L1.32099 14.7032C-0.405573 14.1641 -0.436823 12.9766 1.68036 12.1485L32.7272 0.187547C34.1647 -0.351516 35.4226 0.507859 34.9538 2.70317Z"
                          fill="url(#paint0_linear_558_6369)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_558_6369"
                            x1="17.5551"
                            y1="0.03125"
                            x2="17.5551"
                            y2="29.3811"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0.35"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://www.reddit.com/user/Metapets"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        width="41"
                        height="40"
                        viewBox="0 0 41 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_558_6365)">
                          <path
                            d="M15.7234 20C15.1733 20.0007 14.6459 20.2195 14.2569 20.6085C13.8679 20.9975 13.6491 21.5249 13.6484 22.075C13.6484 23.2225 14.5784 24.175 15.7234 24.1525C16.2616 24.1338 16.7715 23.9069 17.1457 23.5196C17.5198 23.1322 17.7289 22.6148 17.7289 22.0762C17.7289 21.5377 17.5198 21.0203 17.1457 20.6329C16.7715 20.2456 16.2616 20.0187 15.7234 20ZM20.3309 29.1175C21.1184 29.1175 23.8384 29.0225 25.2709 27.59C25.3638 27.4842 25.4149 27.3482 25.4149 27.2075C25.4149 27.0668 25.3638 26.9308 25.2709 26.825C25.2213 26.7737 25.1618 26.733 25.0961 26.7052C25.0304 26.6773 24.9598 26.663 24.8884 26.663C24.8171 26.663 24.7464 26.6773 24.6807 26.7052C24.615 26.733 24.5556 26.7737 24.5059 26.825C23.6234 27.7325 21.6909 28.0425 20.3309 28.0425C18.9684 28.0425 17.0609 27.7325 16.1534 26.825C16.1038 26.7737 16.0443 26.733 15.9786 26.7052C15.9129 26.6773 15.8423 26.663 15.7709 26.663C15.6996 26.663 15.6289 26.6773 15.5632 26.7052C15.4975 26.733 15.4381 26.7737 15.3884 26.825C15.3372 26.8746 15.2964 26.9341 15.2686 26.9998C15.2408 27.0655 15.2264 27.1361 15.2264 27.2075C15.2264 27.2789 15.2408 27.3495 15.2686 27.4152C15.2964 27.4809 15.3372 27.5404 15.3884 27.59C16.7984 28.9975 19.5184 29.115 20.3309 29.115V29.1175ZM22.8109 22.1C22.8109 23.245 23.7434 24.175 24.8884 24.175C26.0334 24.175 26.9634 23.2225 26.9634 22.1C26.9373 21.5673 26.7072 21.0651 26.321 20.6973C25.9347 20.3295 25.4218 20.1244 24.8884 20.1244C24.3551 20.1244 23.8422 20.3295 23.4559 20.6973C23.0696 21.0651 22.8396 21.5673 22.8134 22.1H22.8109Z"
                            fill="url(#paint0_linear_558_6365)"
                          />
                          <path
                            d="M40.3057 20C40.3057 25.3043 38.1985 30.3914 34.4478 34.1421C30.6971 37.8929 25.61 40 20.3057 40C15.0013 40 9.91426 37.8929 6.16353 34.1421C2.4128 30.3914 0.305664 25.3043 0.305664 20C0.305664 14.6957 2.4128 9.60859 6.16353 5.85786C9.91426 2.10714 15.0013 0 20.3057 0C25.61 0 30.6971 2.10714 34.4478 5.85786C38.1985 9.60859 40.3057 14.6957 40.3057 20ZM30.7357 17.0875C29.9482 17.0875 29.2307 17.3975 28.7057 17.9C26.7032 16.4675 23.9557 15.5375 20.9032 15.4175L22.2382 9.165L26.5832 10.095C26.6022 10.5007 26.74 10.8919 26.9793 11.22C27.2186 11.5482 27.5489 11.7989 27.9293 11.9411C28.3098 12.0834 28.7236 12.1108 29.1195 12.0201C29.5153 11.9293 29.8759 11.7244 30.1564 11.4307C30.4369 11.137 30.6251 10.7674 30.6976 10.3678C30.77 9.96816 30.7236 9.55605 30.5641 9.18254C30.4046 8.80903 30.139 8.49054 29.8002 8.26656C29.4614 8.04258 29.0643 7.92295 28.6582 7.9225C28.2697 7.92386 27.8894 8.03424 27.5606 8.24108C27.2318 8.44792 26.9676 8.74292 26.7982 9.0925L21.9532 8.0675C21.8879 8.05345 21.8206 8.0524 21.7549 8.06441C21.6893 8.07642 21.6267 8.10126 21.5707 8.1375C21.5123 8.17394 21.4627 8.2229 21.4255 8.28083C21.3883 8.33876 21.3645 8.40423 21.3557 8.4725L19.8757 15.4425C16.7757 15.5375 13.9807 16.4675 11.9507 17.9225C11.4257 17.4225 10.7107 17.1125 9.92566 17.1125C9.25993 17.1115 8.61402 17.339 8.09586 17.757C7.5777 18.175 7.21868 18.7582 7.07879 19.409C6.93889 20.0599 7.02661 20.7391 7.32726 21.3331C7.62792 21.927 8.12331 22.3999 8.73066 22.6725C8.68066 22.96 8.65816 23.2475 8.65816 23.555C8.65816 28.0425 13.8857 31.695 20.3307 31.695C26.7732 31.695 32.0007 28.0675 32.0007 23.555C32.0007 23.27 31.9757 22.96 31.9282 22.6725C32.9307 22.22 33.6482 21.1925 33.6482 20C33.6482 18.375 32.3357 17.0875 30.7357 17.0875Z"
                            fill="url(#paint1_linear_558_6365)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_558_6365"
                            x1="20.3059"
                            y1="20"
                            x2="20.3059"
                            y2="29.1175"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0.35"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_558_6365"
                            x1="20.3057"
                            y1="0"
                            x2="20.3057"
                            y2="40"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0.35"
                            />
                          </linearGradient>
                          <clipPath id="clip0_558_6365">
                            <rect
                              width="40"
                              height="40"
                              fill="white"
                              transform="translate(0.305664)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={"https://linktr.ee/metapets"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="41"
                        height="34"
                        viewBox="0 0 41 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3102 22.1099C13.1769 22.3816 13.1769 22.6499 13.1769 22.9199C13.3102 23.7816 14.0569 24.4149 14.9302 24.4033H17.0869V32.3633C17.0869 33.1733 16.4135 33.8466 15.6035 33.8466H11.0169C10.6245 33.8427 10.2494 33.6849 9.97232 33.4071C9.6952 33.1294 9.53823 32.7539 9.53519 32.3616V24.4049H1.70852C0.495192 24.4049 -0.314808 23.1899 0.225192 22.1099L11.8252 1.06494C11.9788 0.787812 12.2038 0.556846 12.4768 0.396025C12.7498 0.235204 13.0608 0.150391 13.3777 0.150391C13.6945 0.150391 14.0056 0.235204 14.2786 0.396025C14.5516 0.556846 14.7766 0.787812 14.9302 1.06494L19.7852 10.3733L13.3102 22.1099ZM39.8852 22.1099L28.2852 1.06494C28.1315 0.788215 27.9065 0.557632 27.6337 0.397091C27.3609 0.23655 27.0501 0.151892 26.7335 0.151892C26.417 0.151892 26.1062 0.23655 25.8333 0.397091C25.5605 0.557632 25.3356 0.788215 25.1819 1.06494L20.1902 10.3749L26.6652 22.1083C26.8002 22.3816 26.8002 22.6516 26.8002 22.9199C26.6669 23.7816 25.9185 24.4149 25.0469 24.4033H22.8869V32.3633C22.8952 33.1799 23.5535 33.8416 24.3702 33.8466H29.2269C29.6195 33.8431 29.9951 33.6859 30.2731 33.4085C30.551 33.1312 30.7092 32.7559 30.7135 32.3633V24.4049H38.4002C39.6169 24.4049 40.4235 23.1899 39.8835 22.1099H39.8852Z"
                          fill="url(#paint0_linear_558_6364)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_558_6364"
                            x1="20.0545"
                            y1="0.150391"
                            x2="20.0545"
                            y2="33.8466"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0.35"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
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
                  <h2 className="heading mb-0 english-lng">
                    Our friends in the crypto world
                  </h2>
                  <h2 className="heading mb-0 turkish-lng">
                  Kripto dünyasındaki arkadaşlarımız
                  </h2>
                  <h2 className="heading mb-0 erabic-lng">
                    أصدقائنا في عالم التشفير
                  </h2>
                  <h3 className="sub-heading mb-0 english-lng">Partners</h3>
                  <h3 className="sub-heading mb-0 turkish-lng">Ortaklar</h3>
                  <h3 className="sub-heading mb-0 erabic-lng">شركاء</h3>
                  <p className="english-lng">
                    A project can't be successful alone
                  </p>
                  <p className="turkish-lng">
                  Bir proje tek başına başarılı olamaz.
                  </p>
                  <p className="erabic-lng">
                    لا يمكن أن يكون المشروع ناجحًا بمفرده.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://whitebit.com"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/5a.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://coinmarketcap.com/currencies/metapets/"
                  >
                    <div className="partner-box partner-box2">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/marketcap.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.coingecko.com/en/coins/metapets"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/1a.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://bscscan.com/address/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/2a.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.dextools.io/app/bsc/pair-explorer/0xbe41f59d6d558a49ab04a10b479c9a8d6a280105"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/3a.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.certik.com/projects/metapetscoin"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img
                          src="assets/images/certik-logotype-h-w.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="parnter-btn">
              <div className="btn-outer1 english-lng">
                <a
                  className="comman-btn btn-outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://swap.metapetscoin.com"
                >
                  Buy Now
                  <img
                    src="assets/images/button-border.svg"
                    alt="button-border"
                  />
                </a>
              </div>
              <div className="btn-outer1 turkish-lng">
                <a
                  className="comman-btn btn-outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://swap.metapetscoin.com"
                >
                  Şimdi satın al
                  <img
                    src="assets/images/button-border.svg"
                    alt="button-border"
                  />
                </a>
              </div>
              <div className="btn-outer1 erabic-lng">
                <a
                  className="comman-btn btn-outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://swap.metapetscoin.com"
                >
                  اشتري الآن
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

      <section className="metapets-games">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="metapets-games-left">
                <img
                  className="metapets-games-left-img metapets-games-left-img-black"
                  src="assets/images/metapets-games.png"
                  alt=""
                />
                <img
                  className="metapets-games-left-img metapets-games-left-img-white"
                  src="assets/images/metapets-games-white.png"
                  alt=""
                />
                <div className="metapats-bg">
                  <img src="assets/images/metapets-game-bg2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="metapets-games-right">
                <h2 className="heading mb-0 english-lng">
                  Keep your pet engaged
                </h2>
                <h2 className="heading mb-0 erabic-lng">
                  ابقى حيوانك الاليف منخرط{" "}
                </h2>
                <h2 className="heading mb-0 turkish-lng">
                Evcil hayvanınızı meşgul edin{" "}
                </h2>
                <h3 className="sub-heading mb-0 english-lng">MetaPets Games</h3>
                <h3 className="sub-heading mb-0 erabic-lng">العاب ميتابتس</h3>
                <h3 className="sub-heading mb-0 turkish-lng">MetaPets Oyunları</h3>

                <p className="english-lng">
                  MetaPets Games will be a way to engage the community and help
                  them build a relationship in a fun and competitive way. NFT
                  games where you can train your MetaPets, dress them, and breed
                  them are some of the many ways you will be able to give love
                  and care to your new friend constantly.
                </p>
                <p className="turkish-lng">
                MetaPets Oyunları, toplulukla etkileşim kurmanın ve eğlenceli ve rekabetçi bir şekilde bir ilişki kurmalarına yardımcı olmanın bir yolu olacaktır. MetaPets'inizi eğitebileceğiniz, giydirebileceğiniz ve yetiştirebileceğiniz NFT oyunları, yeni arkadaşınıza sürekli olarak sevgi ve ilgi göstermenin birçok yolundan bazılarıdır.

                </p>
                <p className="erabic-lng">
                  لعاب ميتابيتس هي طريقه لربط المجتمع ومساعدته على بناء علاقات
                  بطريقه تنافسيه ومسليه العاب NFT حيث تستطيع ان تدرب حيوان
                  الميتابيتس الخاص بك وهنالك الكثير من الطرق لتقوم باعطائه
                  العنايه والحب باطعامهم والباسهم وتربيتهم
                </p>
                <div className="btn-outer1 english-lng">
                  <Link className="comman-btn btn-outer" to={"/whitepaper"}>
                    Learn More
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </Link>
                </div>
                <div className="btn-outer1 erabic-lng">
                  <Link className="comman-btn btn-outer" to={"/whitepaper"}>
                    يتعلم أكثر
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </Link>
                </div>
                <div className="btn-outer1 turkish-lng">
                  <Link className="comman-btn btn-outer" to={"/whitepaper"}>
                  daha fazla bilgi edin
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
          <img src="assets/images/metapets-round.png" alt="" />
        </div>
      </section>

      <section className="custom-pets">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="custom-pets-inner">
                <div className="custom-pets-inner-box">
                  <h2 className="heading mb-0 english-lng">Custom Pets DAPP</h2>
                  <h2 className="heading mb-0 turkish-lng">Özel Evcil Hayvanlar DAPP</h2>
                  <h2 className="heading mb-0 erabic-lng">
                    مخصص الحيوانات الأليفة DAPP
                  </h2>
                  <h3 className="sub-heading mb-0 english-lng">Custom Pets</h3>
                  <h3 className="sub-heading mb-0 turkish-lng">Özel Evcil Hayvanlar</h3>
                  <h3 className="sub-heading mb-0 erabic-lng">
                    {" "}
                    الحيوانات الأليفة المخصصة
                  </h3>
                  <p className="english-lng">
                    Build the pet of your dreams, a friend who will be at your
                    beckoned call.{" "}
                  </p>
                  <p className="turkish-lng">
                  Çağrınızda olacak bir arkadaş olan hayallerinizdeki evcil hayvanı oluşturun.{" "}
                  </p>
                  <p className="erabic-lng">
                    تقوم الحيوانات الأليفة المخصصة ببناء حيوان أحلامك الأليف ،
                    صديق سيكون في متناول يدك{" "}
                  </p>
                  <div className="btn-outer1 english-lng ">
                    <a
                      className="comman-btn btn-outer "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                    >
                      Coming soon
                      <img
                        src="assets/images/button-border.svg"
                        alt="button-border"
                      />
                    </a>
                  </div>
                  <div className="btn-outer1 turkish-lng ">
                    <a
                      className="comman-btn btn-outer "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                    >
                      Yakında gelecek
                      <img
                        src="assets/images/button-border.svg"
                        alt="button-border"
                      />
                    </a>
                  </div>
                  <div className="btn-outer1 erabic-lng ">
                    <a
                      className="comman-btn btn-outer "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                    >
                      قريبا
                      <img
                        src="assets/images/button-border.svg"
                        alt="button-border"
                      />
                    </a>
                  </div>
                </div>
                <img
                  className="custom-pets-main-img custom-pets-main-img-black"
                  src="assets/images/custom-pets-img.png"
                  alt=""
                />
                <img
                  className="custom-pets-main-img custom-pets-main-img-white"
                  src="assets/images/custom-pets-white-img.png"
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
        <div className="custom-pets-line">
          <img src="assets/images/custom-pets-line.png" alt="line" />
        </div>
      </section>

      <section className="numquam-eius">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center order-md-1 order-2">
              <div className="numquam-eius-left">
                <h2 className="heading mb-0 english-lng">
                  A pet that will always be yours
                </h2>
                <h2 className="heading mb-0 turkish-lng">
                Her zaman senin olacak bir evcil hayvan
                </h2>
                <h2 className="heading mb-0 erabic-lng">
                  حيوان أليف سيكون لك دائمًا
                </h2>
                <h3 className="sub-heading mb-0 english-lng">
                  Customizable Pets
                </h3>
                <h3 className="sub-heading mb-0 turkish-lng">
                Özelleştirilebilir Evcil Hayvanlar
                </h3>
                <h3 className="sub-heading mb-0 erabic-lng">
                  حيوانات أليفة قابلة للتخصيص
                </h3>
                <p className="english-lng">
                  Use your imagination to customize your loving friend! Launch
                  your custom MetaPet, adopt any traits you want to make them
                  unique, brag about your MetaPet social media, and sell or swap
                  it on the marketplace.
                </p>
                <p className="turkish-lng">
                Sevgi dolu arkadaşınızı kişiselleştirmek için hayal gücünüzü kullanın! Özel MetaPet'inizi başlatın, benzersiz kılmak istediğiniz herhangi bir özelliği benimseyin, MetaPet sosyal medyanızla övün ve pazarda satın veya takas edin.
                </p>
                <p className="erabic-lng">
                  استخدم خيالك لتخصيص صديقك المحب! قم بتشغيل ميتابيتس المخصص
                  الخاص بك ، واختار أي سمات تريد أن تجعلها فريدة من نوعها ،
                  وتفاخر بوسائط ميتابيتس الاجتماعية الخاصة بك، وقم ببيعها أو
                  تبديلها في السوق.
                </p>
                <div className="btn-outer1 english-lng">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://metapetscoin.com/home"
                  >
                    Coming Soon
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </a>
                </div>
                <div className="btn-outer1 turkish-lng">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://metapetscoin.com/home"
                  >
                    Yakında gelecek
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </a>
                </div>
                <div className="btn-outer1 erabic-lng">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    قريبا
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
                <div className="numquam-eius-right-img">
                  <img
                    className=""
                    src="assets/images/Owlsframed2.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="numquam-eius numquam-eius2 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="numquam-eius-right">
                <div className="numquam-eius-right-img">
                  <img
                    className=""
                    src="assets/images/Kingakibagif1.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="numquam-eius-left">
                <h2 className="heading mb-0 english-lng">Future Plans</h2>
                <h2 className="heading mb-0 turkish-lng">Gelecek planları</h2>
                <h2 className="heading mb-0 erabic-lng">خطط مستقبلية</h2>
                <h3 className="sub-heading mb-0 english-lng">
                  {/*Change Customizable Pets & Write*/} Metaverse
                </h3>
                <h3 className="sub-heading mb-0 turkish-lng">
                  {/*Change Customizable Pets & Write*/} Metaverse
                </h3>
                <h3 className="sub-heading mb-0 erabic-lng">
                  {/*Change Customizable Pets & Write*/} ميتافيرس
                </h3>
                <p className="english-lng">
                  MetaPets aims to make your MetaPet adaptable to the virtual
                  designs of the Metaverse. Interoperable into other worlds, you
                  can show your dog off in a dog show, have your prize cow
                  produce milk to sell, and race your trophy-winning horse in a
                  competition, all while earning a passive income from your
                  MetaPets investment.
                </p>
                <p className="turkish-lng">
                MetaPets, MetaPet'inizi Metaverse'in sanal tasarımlarına uyarlanabilir hale getirmeyi amaçlar. Diğer dünyalarla birlikte çalışabilir, bir köpek gösterisinde köpeğinizi gösterebilir, ödüllü ineğinizin satmak için süt üretmesini sağlayabilir ve ödüllü atınızı bir yarışmada yarıştırırken, MetaPets yatırımınızdan pasif bir gelir elde edebilirsiniz.

                </p>
                <p className="erabic-lng">
                  تهدف ميتابيتس إلى جعل ميتابيتس الخاص بك قابلاً للتكيف مع
                  التصميمات الافتراضية لـ ميتافيرس. قابلة للتشغيل المتبادل في
                  عوالم أخرى ، يمكنك إظهار كلبك في عرض للكلاب ، وجعل بقرة
                  الجائزة الخاصة بك تنتج الحليب لبيعه ، وتسابق مع خيلك الحائز
                  على الكأس في منافسة ، كل ذلك بينما تربح دخلًا سلبيًا من
                  استثمار ميتابيتس.
                </p>
                <div className="btn-outer1 english-lng">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://metapetscoin.com/home"
                  >
                    Coming Soon
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </a>
                </div>
                <div className="btn-outer1 turkish-lng">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://metapetscoin.com/home"
                  >
                    Yakında gelecek
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </a>
                </div>
                <div className="btn-outer1 erabic-lng">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    قريبا
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

      {/* <section className="partner">
        <div className="container">
          <div className="partner-outer">
            <div className="row">
              <div className="col-12">
                <div className="parner-text">
                  <h2 className="heading mb-0 english-lng">
                    Our friends in the crypto world
                  </h2>
                  <h2 className="heading mb-0 erabic-lng">
                  أصدقائنا في عالم التشفير
                  </h2>
                  <h3 className="sub-heading mb-0 english-lng">Partners</h3>
                  <h3 className="sub-heading mb-0 erabic-lng">شركاء</h3>
                  <p className="english-lng">A project can't be successful alone</p>
                  <p className="erabic-lng">لا يمكن أن يكون المشروع ناجحًا بمفرده.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://whitebit.com"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/5a.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://coinmarketcap.com/currencies/metapets/"
                  >
                    <div className="partner-box partner-box2">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/marketcap.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.coingecko.com/en/coins/metapets"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/1a.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://bscscan.com/address/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/2a.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.dextools.io/app/bsc/pair-explorer/0xbe41f59d6d558a49ab04a10b479c9a8d6a280105"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/3a.png" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="partner-box-outer">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://poocoin.app/tokens/0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    <div className="partner-box">
                      <img
                        className="patner-box-black"
                        src="assets/images/parner-box.png"
                        alt=""
                      />
                      <img
                        className="patner-box-white"
                        src="assets/images/partner-box-white.png"
                        alt=""
                      />
                      <div className="partner-box-img">
                        <img src="assets/images/certik-logotype-h-w.svg" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="parnter-btn">
              <div className="btn-outer1 english-lng">
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
              <div className="btn-outer1 erabic-lng">
                <a
                  className="comman-btn btn-outer"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                >
                  اشتري الآن
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
      </section> */}

      <section className="home-about pt-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-md-1 order-2">
              <div className="home-about-left">
                <h2 className="heading mb-0 english-lng">Our Vision</h2>
                <h2 className="heading mb-0 turkish-lng">Vizyonumuz</h2>
                <h2 className="heading mb-0 erabic-lng">رؤيتنا</h2>
                <h3 className="sub-heading mb-0 english-lng">About Us </h3>
                <h3 className="sub-heading mb-0 turkish-lng">Hakkımızda</h3>
                <h3 className="sub-heading mb-0 erabic-lng">معلومات عنا</h3>
                <p className="english-lng">
                  Our vision is to see that our project adds to the growth and
                  value of the Metaverse. It will indeed be interoperable and
                  open - meaning that down the road, an owner will be able to
                  use their MetaPets in other games/meta worlds that we or
                  anyone else out there create.{" "}
                </p>
                <p className="turkish-lng">
                Vizyonumuz, projemizin Metaverse'in büyümesine ve değerine katkıda bulunduğunu görmektir. Gerçekten de birlikte çalışabilir ve açık olacak hale gelmesi, bir kullanıcı MetaPets'ini bizim veya oradaki herhangi birinin yarattığı diğer oyunlarda/meta dünyalarda kullanabilecek.{" "}
                </p>
                <p className="erabic-lng">
                  تتمثل رؤيتنا في أن نرى أن مشروعنا يضيف إلى نمو وقيمة ميتافيرس.
                  سيكون حقًا قابلاً للتشغيل المتبادل ومفتوحًا - مما يعني أنه على
                  الطريق ، سيتمكن المالك من استخدام ميتابيتس في ألعاب / عوالم
                  تعريفية أخرى نقوم بإنشائها نحن أو أي شخص آخر
                </p>
                <p className="english-lng">
                  So, for example, your MetaPets could be pulled into a training
                  camp, a dog park, or any other type of game someone wants to
                  build on different worlds in the Metaverse without necessarily
                  needing permission. Our community's happiness is our number
                  one priority, and everything we create will be to reward our
                  loyal community.
                </p>
                <p className="turkish-lng">
                Örneğin, MetaPets'inizi bir eğitim kampına, bir köpek parkına veya birinin Metaverse'de farklı dünyalar üzerine inşa etmek istediği herhangi bir başka tür oyuna, izin gerektirmeden bulunabilir. Topluluğumuzun mutluluğu bir numaralı önceliğimizdir ve yarattığımız her şey sadık topluluğumuzu ödüllendirmek olacaktır.
                </p>
                <p className="erabic-lng">
                  لذلك ، على سبيل المثال ، قد يتم سحب ميتابيتس إلى معسكر تدريب
                  أو حديقة كلاب أو أي نوع آخر من الألعاب التي يريد شخص ما بناءها
                  على عوالم مختلفة في ميتافيرس دون الحاجة بالضرورة إلى إذن.
                  سعادة مجتمعنا هي أولويتنا الأولى ، وكل شيء نقوم بإنشائه سيكون
                  لمكافأة مجتمعنا المخلص.
                </p>
                <div className="btn-outer1 english-lng">
                  <Link className="comman-btn btn-outer" to={"/whitepaper"}>
                    Whitepaper
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </Link>
                </div>
                <div className="btn-outer1 turkish-lng">
                  <Link className="comman-btn btn-outer" to={"/whitepaper"}>
                  Teknik Rapor
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </Link>
                </div>
                <div className="btn-outer1 erabic-lng">
                  <Link className="comman-btn btn-outer" to={"/whitepaper"}>
                    ورق ابيض
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
                <div className="numquam-eius-right-img">
                  <img
                    className=""
                    src="assets/images/home-about-animation.gif"
                    alt=""
                  />
                </div>
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
                <h2 className="heading mb-0 english-lng">Our Legendary Crew</h2>
                <h2 className="heading mb-0 turkish-lng">Efsanevi Ekibimiz</h2>
                <h2 className="heading mb-0 erabic-lng">طاقمنا الأسطوري</h2>
                <h3 className="sub-heading mb-0 english-lng">Team</h3>
                <h3 className="sub-heading mb-0 turkish-lng">Ekip</h3>
                <h3 className="sub-heading mb-0 erabic-lng">فريق</h3>
                <p className="english-lng">
                  A project goes farther with helping hands.
                </p>
                <p className="turkish-lng">
                Bir proje yardım elleriyle daha da ileri gider.
                </p>
                <p className="erabic-lng">
                  يذهب المشروعإلى أبعد من ذلك بمساعدة الأيدي.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Carousal />
        <div className="home-team-circul">
          <img src="assets/images/home-team-cercul.png" alt="" />
        </div>
        <div className="home-team-half-round">
          <img src="assets/images/home-team-half-round.png" alt="" />
        </div>
      </section>

      <section className="roadmap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="roadmap-text">
                <div className="roadmap-text-box">
                  <h2 className="heading mb-0 english-lng">Roadmap</h2>
                  <h2 className="heading mb-0 turkish-lng">Yol Haritası</h2>
                  <h2 className="heading mb-0 erabic-lng">خريطة الطريق</h2>
                  <h3 className="sub-heading mb-0 english-lng">
                    Explore Our Roadmap
                  </h3>
                  <h3 className="sub-heading mb-0 turkish-lng">
                  Yol Haritamızı Keşfedin
                  </h3>
                  <h3 className="sub-heading mb-0 erabic-lng">
                    اكتشف خارطة الطريق الخاصة بنا
                  </h3>
                  <p className="english-lng">
                    The future for MetaPets is bold, creative, and will expand
                    into the Metaverse. We look forward to bringing our
                    investors our vision, one that will take us far beyond
                    anyone's imagination.
                  </p>
                  <p className="turkish-lng">
                  MetaPets'in geleceği cesur, yaratıcı ve Metaverse'e doğru genişleyecek. Yatırımcılarımıza, bizi herkesin hayal gücünün çok ötesine taşıyacak olan vizyonumuzu getirmeyi dört gözle bekliyoruz.

                  </p>
                  <p className="erabic-lng">
                    مستقبل جريء وخلاق لميتابيتس وسوف يتوسع في ميتافيرس. نتطلع
                    إلى تقديم رؤيتنا لمستثمرينا ، والتي ستأخذنا إلى ما هو أبعد
                    من خيال أي شخص.
                  </p>
                </div>
                {/* <div className="btn-outer1 english-lng">
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
                </div> */}
                {/* <div className="btn-outer1 erabic-lng">
                  <a
                    className="comman-btn btn-outer"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pancakeswap.finance/swap?inputCurrency=0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d"
                  >
                    اشتري الآن
                    <img
                      src="assets/images/button-border.svg"
                      alt="button-border"
                    />
                  </a>
                </div> */}
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
