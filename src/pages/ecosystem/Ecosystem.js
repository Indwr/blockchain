import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./ecosystem.css";
// import video from '../../../../public/assets/images/metapets-video.mp4'

const Ecosystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <section className="ecosystem section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ecoysystem-inner">
                <div className="ecoysystem-inner-heading">
                  <h2 className="heading mb-0 english-lng">MetaPets</h2>
                  <h2 className="heading mb-0 turkish-lng">MetaPets</h2>
                  <h2 className="heading mb-0 erabic-lng">نظام ميتابيتس</h2>
                  <h1 className="sub-heading mb-0 english-lng">Ecosystem</h1>
                  <h1 className="sub-heading mb-0 turkish-lng">Ekosistemi </h1>
                  <h1 className="sub-heading mb-0 erabic-lng">البيئي</h1>
                  <p className="heading-text english-lng">
                    For projects to thrive, it is required for many moving parts
                    to work closely together.
                  </p>
                  <p className="heading-text turkish-lng">
                    Projelerin başarılı olması için birçok hareketli parçanın
                    birlikte çalışması gerekir.
                  </p>
                  <p className="heading-text erabic-lng">
                    لكي تزدهر المشاريع ، يلزم أن تعمل العديد من الأجزاء المتحركة
                    معًا بشكل وثيق.
                  </p>
                </div>
                <div className="ecosystem box">
                  <video
                    loop
                    autoPlay
                    controls="controls"
                    src="assets/images/video_2022-03-22_22-33-55.mp4"
                    type="video/mp4"
                  ></video>
                </div>
                <div className="ecosystem-content">
                  <div className="row">
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        {/* <img className="partner-box-img1" src="assets/images/parner-box.png" alt="" /> */}
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.2827 3.50636L7.54266 8.16636C6.69266 9.22636 6.99266 10.5864 8.20266 11.1864L11.9327 13.0564C12.4227 13.2964 13.2227 13.2964 13.7127 13.0564L17.4427 11.1864C18.6527 10.5764 18.9527 9.21636 18.1027 8.16636L14.3727 3.50636C13.5327 2.43636 12.1327 2.43636 11.2827 3.50636Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.833 2.75635V8.01635"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.63281 11.1664L12.8328 8.01636L17.0328 11.1664"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.60312 14.8864L11.2131 15.6064C12.2431 16.0664 13.4231 16.0664 14.4631 15.6064L16.0731 14.8864C17.5131 14.2464 18.8431 15.9864 17.8431 17.2064L14.3831 21.4364C13.5331 22.4764 12.1431 22.4764 11.2831 21.4364L7.83312 17.2064C6.82312 15.9864 8.15312 14.2464 9.60312 14.8864Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5 className="english-lng">Charity </h5>
                          <h5 className="turkish-lng">HAYIR İŞLERİ </h5>
                          <h5 className="erabic-lng">عمل خيري </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.1334 14.4563C14.0112 14.4563 15.5334 12.934 15.5334 11.0563C15.5334 9.17848 14.0112 7.65625 12.1334 7.65625C10.2556 7.65625 8.7334 9.17848 8.7334 11.0563C8.7334 12.934 10.2556 14.4563 12.1334 14.4563Z"
                              stroke="#0BEFD8"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M15.9326 15.2563L12.9326 18.2563"
                              stroke="#0BEFD8"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.833 22.4563C18.3559 22.4563 22.833 17.9791 22.833 12.4563C22.833 6.93345 18.3559 2.4563 12.833 2.4563C7.31016 2.4563 2.83301 6.93345 2.83301 12.4563C2.83301 17.9791 7.31016 22.4563 12.833 22.4563Z"
                              stroke="#0BEFD8"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.333 7.7688V7.7688"
                              stroke="#0BEFD8"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5 className="english-lng">Giveaways</h5>
                          <h5 className="turkish-lng">ÇEKİLİŞLER</h5>
                          <h5 className="erabic-lng">هدايا </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.8332 3.9563H6.3332C6.0332 3.9563 5.7332 4.0563 5.5332 4.3563L4.0332 6.3563C3.5332 7.0563 4.0332 7.9563 4.8332 7.9563H19.3332C19.6332 7.9563 19.9332 7.8563 20.1332 7.5563L21.6332 5.5563C22.1332 4.8563 21.6332 3.9563 20.8332 3.9563Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M4.8332 10.4563H19.3332C19.6332 10.4563 19.9332 10.5563 20.1332 10.8563L21.6332 12.8563C22.1332 13.5563 21.6332 14.4563 20.8332 14.4563H6.3332C6.0332 14.4563 5.7332 14.3563 5.5332 14.0563L4.0332 12.0563C3.5332 11.3563 4.0332 10.4563 4.8332 10.4563Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M20.8332 16.9563H6.3332C6.0332 16.9563 5.7332 17.0563 5.5332 17.3563L4.0332 19.3563C3.5332 20.0563 4.0332 20.9563 4.8332 20.9563H19.3332C19.6332 20.9563 19.9332 20.8563 20.1332 20.5563L21.6332 18.5563C22.1332 17.8563 21.6332 16.9563 20.8332 16.9563Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                          </svg>

                          <h5 className="english-lng">Cross-Chain</h5>
                          <h5 className="turkish-lng">ZİNCİRLER ARASI</h5>
                          <h5 className="erabic-lng">عبر سلسلة</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.43292 4.05631L10.1329 20.8563C10.5329 21.7563 11.2329 21.8563 11.8329 21.0563L21.2329 9.15631C21.5329 8.75631 21.5329 8.15631 21.1329 7.85631L18.0329 4.75631C17.9329 4.55631 17.6329 4.45631 17.5329 4.45631L4.53292 2.75631C3.63292 2.55631 3.13292 3.15631 3.43292 4.05631Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.833 21.4562L11.833 10.4562L3.83301 3.3562"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.833 4.4563L11.833 10.4563L20.833 8.6563"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5 className="english-lng">Dapps</h5>
                          <h5 className="turkish-lng">DAPPS</h5>
                          <h5 className="erabic-lng">تطبيق لامركزي</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5325 12.1562L17.6325 16.2562C18.1325 16.8562 17.9325 17.7562 17.2325 18.0562L6.93254 22.3562C5.83254 22.8562 4.93254 21.4563 5.73254 20.6562L13.5325 12.1562ZM13.5325 12.1562L9.43254 8.05625C8.93254 7.55625 9.13254 6.55625 9.83254 6.25625L18.7325 2.55625C19.8325 2.15625 20.7325 3.35625 20.0325 4.25625L13.5325 12.1562Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                          </svg>

                          <h5 className="english-lng">Metaverse</h5>
                          <h5 className="turkish-lng">METAVERSE</h5>
                          <h5 className="erabic-lng">ميتافيرس </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.833 17.4563C20.5944 17.4563 22.833 15.2177 22.833 12.4563C22.833 9.69488 20.5944 7.4563 17.833 7.4563C15.0716 7.4563 12.833 9.69488 12.833 12.4563C12.833 15.2177 15.0716 17.4563 17.833 17.4563Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.833 22.4563C15.5944 22.4563 17.833 20.2177 17.833 17.4563C17.833 14.6949 15.5944 12.4563 12.833 12.4563C10.0716 12.4563 7.83301 14.6949 7.83301 17.4563C7.83301 20.2177 10.0716 22.4563 12.833 22.4563Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.833 12.4563C15.5944 12.4563 17.833 10.2177 17.833 7.4563C17.833 4.69488 15.5944 2.4563 12.833 2.4563C10.0716 2.4563 7.83301 4.69488 7.83301 7.4563C7.83301 10.2177 10.0716 12.4563 12.833 12.4563Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.83301 17.4563C10.5944 17.4563 12.833 15.2177 12.833 12.4563C12.833 9.69488 10.5944 7.4563 7.83301 7.4563C5.07158 7.4563 2.83301 9.69488 2.83301 12.4563C2.83301 15.2177 5.07158 17.4563 7.83301 17.4563Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5 className="english-lng">Games</h5>
                          <h5 className="turkish-lng">OYUNLARI</h5>
                          <h5 className="erabic-lng"> ألعاب</h5>
                        </div>
                      </div>
                    </div>
                    {/* </div>
                                <div className="row cosystem-content1"> */}
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6 ">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.833 6.19482L17.833 3.19482L22.833 6.19482V18.1948L17.833 21.1948L7.83301 15.1948V9.19482L17.833 15.1948V9.19482L12.833 6.19482Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.833 6.19482L7.83301 3.19482L2.83301 6.19482V18.1948L7.83301 21.1948L12.533 18.0648"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5 className="english-lng">3D Games</h5>
                          <h5 className="turkish-lng">3D OYUNLAR</h5>
                          <h5 className="erabic-lng">ألعاب ثلاثية الأبعاد</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.53301 7.89482L2.83301 4.19482H7.83301L13.833 10.1948H9.33301C7.43301 10.1948 5.83301 11.7948 5.83301 13.6948C5.83301 15.5948 7.43301 17.1948 9.33301 17.1948H10.833L13.833 20.1948H9.33301C5.73301 20.1948 2.83301 17.2948 2.83301 13.6948C2.83301 11.1948 4.23301 8.99482 6.33301 7.89482H6.53301Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.133 16.4948L22.833 20.1948H17.833L11.833 14.1948H16.333C18.233 14.1948 19.833 12.5948 19.833 10.6948C19.833 8.79482 18.233 7.19482 16.333 7.19482H14.833L11.833 4.19482H16.333C19.933 4.19482 22.833 7.09482 22.833 10.6948C22.833 13.1948 21.433 15.3948 19.333 16.4948H19.133Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5 className="english-lng">2D Games</h5>
                          <h5 className="turkish-lng">2D OYUNLAR</h5>
                          <h5 className="erabic-lng"> ألعاب ثنائية الأبعاد</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.7332 19.8949C17.0332 21.3949 14.7332 22.2949 12.2332 22.1949C7.0332 22.0949 3.0332 17.5949 3.0332 12.3949V5.39492C3.0332 4.99492 3.5332 4.69492 3.9332 4.99492L18.7332 19.8949Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.0332 4.49481C8.7332 2.99481 11.0332 2.09481 13.4332 2.19481C18.5332 2.29481 22.5332 6.69481 22.5332 11.8948V18.8948C22.5332 19.2948 22.0332 19.5948 21.6332 19.2948L7.0332 4.49481Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5 className="english-lng">VR/AR Games</h5>
                          <h5 className="turkish-lng">VR/AR OYUNLARI</h5>
                          <h5 className="erabic-lng">ألعاب</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.833 2.79487L5.33301 6.59487C4.73301 6.99487 4.33301 7.59487 4.33301 8.29487V15.9949C4.33301 16.6949 4.73301 17.3949 5.33301 17.6949L11.833 21.4949C12.433 21.8949 13.233 21.8949 13.833 21.4949L20.333 17.6949C20.933 17.2949 21.333 16.6949 21.333 15.9949V8.29487C21.333 7.59487 20.933 6.89487 20.333 6.59487L13.833 2.79487C13.233 2.39487 12.433 2.39487 11.833 2.79487Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.833 9.19482L12.833 6.19482L7.83301 9.19482L17.833 15.1948L12.833 18.1948L7.83301 15.1948"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.333 10.1948L10.333 12.1948"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.333 12.1948L13.333 14.1948"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5 className="english-lng">Custom Pets</h5>
                          <h5 className="turkish-lng">ÖZEL HAYVANLAR</h5>
                          <h5 className="erabic-lng"> حيوانات أليفة مخصصة</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.83301 2.99482C10.033 2.49482 11.433 2.19482 12.833 2.19482C18.333 2.19482 22.833 6.69482 22.833 12.1948C22.833 17.6948 18.333 22.1948 12.833 22.1948C7.33301 22.1948 2.83301 17.6948 2.83301 12.1948C2.83301 10.7948 3.13301 9.39482 3.63301 8.19482"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.8326 16.3949V12.1949C16.8326 9.89487 14.9326 7.99487 12.6326 7.99487C10.3326 7.99487 8.43262 9.89487 8.43262 12.1949C8.43262 14.4949 10.3326 16.3949 12.6326 16.3949H16.8326Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.83301 6.69482C6.66143 6.69482 7.33301 6.02325 7.33301 5.19482C7.33301 4.3664 6.66143 3.69482 5.83301 3.69482C5.00458 3.69482 4.33301 4.3664 4.33301 5.19482C4.33301 6.02325 5.00458 6.69482 5.83301 6.69482Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <h5>NFT</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 col-lg-3 col-md-4 col-6">
                      <div className="partner-box">
                        <img
                          className="patner-box-black partner-box-img1"
                          src="assets/images/parner-box.png"
                          alt=""
                        />
                        <img
                          className="patner-box-white partner-box-img1"
                          src="assets/images/partner-box-white.png"
                          alt=""
                        />
                        <div className="partner-box-img">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.833 5.89482C22.833 7.59482 22.033 9.19482 20.533 10.0948C19.233 10.8948 17.333 11.6948 14.833 11.9948V5.89482C14.833 3.89482 16.533 2.19482 18.533 2.19482H19.033C21.133 2.19482 22.833 3.89482 22.833 5.89482Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M22.8326 8.19482V18.4948C22.8326 20.5948 21.1326 22.1948 19.1326 22.1948H18.6326C16.5326 22.1948 14.9326 20.4948 14.9326 18.4948V12.0948C20.4326 11.3948 22.8326 8.19482 22.8326 8.19482Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M2.83301 18.4948C2.83301 16.7948 3.63301 15.1948 5.13301 14.2948C6.43301 13.4948 8.33301 12.6948 10.833 12.3948V18.4948C10.833 20.5948 9.13301 22.1948 7.13301 22.1948H6.53301C4.53301 22.1948 2.83301 20.4948 2.83301 18.4948Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M2.83301 16.1948V5.89482C2.83301 3.89482 4.53301 2.19482 6.53301 2.19482H7.03301C9.13301 2.19482 10.833 3.89482 10.833 5.89482V12.2948C5.23301 12.9948 2.83301 16.1948 2.83301 16.1948Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                            <path
                              d="M10.833 12.2947C11.433 12.1947 12.133 12.1947 12.833 12.1947C13.533 12.1947 14.233 12.1947 14.833 12.0947"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                            />
                          </svg>

                          <h5 className="english-lng">NFT Games</h5>
                          <h5 className="turkish-lng">NFT OYUNLARI</h5>
                          <h5 className="erabic-lng">NFT ألعاب </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="ecosystem-img-box">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <div className="ecosystem-img">
                  <div
                    className="ecosystem-img-box-outer"
                    onClick={(e) => changeStyle(e.target)}
                    style={{ display: active ? "none" : "block" }}
                  >
                    <img
                      src="assets/images/ecosystem-video-thumbnail.png"
                      alt=""
                    />
                    <div className="play-btn">
                      <img src="assets/images/play-btn2.svg" alt="" />
                    </div>
                  </div>
                  {autoplayy && (
                    <video
                      style={{ display: active ? "block" : "none" }}
                      src="assets/images/metapets-video.mp4"
                      width="750"
                      height="500"
                      controls
                      autoPlay
                    ></video>
                  )}
                  {!autoplayy && (
                    <video
                      style={{ display: active ? "block" : "none" }}
                      src="assets/images/metapets-video.mp4"
                      width="750"
                      height="500"
                      controls
                    ></video>
                  )}
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="container">
          <div className="roadmap-bottom mt-lg-5 pt-lg-5 mt-3 pt-3">
            <p>
              <b className="erabic-lng"> ميتافيرس:</b>{" "}
              <b className="english-lng">METAVERSE:</b>{" "}
              <b className="turkish-lng">METAVERS:</b>{" "}
            </p>
            <p className="english-lng">
              For the time being, we have decided not to include anything
              related to the METAVERSE in our roadmap because we are unsure when
              the METAVERSE will be fully developed. Our team is in contact with
              large companies working on the METAVERSE, but we currently lack
              all of the assets required for our METAVERSE game, which is why we
              have decided not to include anything in our roadmap.
            </p>
            <p className="turkish-lng">
              Şu an için METAVERSE ile ilgili hiçbir şeyi yol haritamıza dahil
              etmemeye karar verdik çünkü METAVERSE'in tam olarak ne zaman
              geliştirileceğinden emin değiliz. Ekibimiz METAVERSE üzerinde
              çalışan büyük şirketlerle iletişim halinde, ancak şu anda
              METAVERSE oyunumuz için gereken tüm varlıklara sahip değiliz, bu
              yüzden yol haritamıza hiçbir şey eklememeye karar
            </p>
            <p className="erabic-lng">
              في الوقت الحالي ، قررنا عدم تضمين أي شيء متعلق بـ ميتافيرس في
              خريطة الطريق الخاصة بنا لأننا غير متأكدين من موعد تطوير ميتافيرس
              بالكامل. فريقنا على اتصال بشركات كبيرة تعمل على ميتافيرس، لكننا
              نفتقر حاليًا إلى جميع الأصول المطلوبة للعبة ميتافيرس، ولهذا السبب
              قررنا عدم تضمين أي شيء في خريطة الطريق الخاصة بنا.
            </p>
            <p className="english-lng">
              We're also developing on our own Play to Earn METAVERSE game,
              called The Pets Verse, for which more details will be released
              soon.
            </p>
            <p className="turkish-lng">
              Ayrıca, yakında daha fazla ayrıntı açıklanacak olan The Pets Verse
              adlı kendi Oyna Kazan METAVERSE oyunumuzu geliştiriyoruz.
            </p>
            <p className="erabic-lng">
              نعمل أيضًا على تطوير لعبة لجني ميتافيرس الخاصة بنا ، والتي تسمى
              The Pets Verse ، والتي سيتم إصدار المزيد من التفاصيل عنها قريبًا.
            </p>
            <p>
              <b className="english-lng">NOTE:</b>
              <b className="turkish-lng">:NOT</b>
              <b className="erabic-lng">ملاحظة:</b>
            </p>
            <p className="mb-0 english-lng">
              Our Roadmap may change at any time. Several revisions to our
              Roadmap plans can be made during the completion process.
            </p>
            <p className="mb-0 turkish-lng">
              Yol Haritamız her an değişebilir. Tamamlanma sürecinde Yol
              Haritası planlarımızda çeşitli revizeler yapılabilir.
            </p>
            <p className="mb-0 erabic-lng">
              قد تتغير خارطة الطريق الخاصة بنا في أي وقت. يمكن إجراء العديد من
              التغييرات على خطط خارطة الطريق الخاصة بنا أثناء عملية الإنجاز.
            </p>
          </div>
        </div>
        <div className="ecosystem half-round">
          <img src="assets/images/half-round.png" alt="" />
        </div>
        <div className="ecosystem round">
          <img src="assets/images/ecosystem-round.png" alt="" />
        </div>
        <div className="about-line">
          <img src="assets/images/about-line.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
