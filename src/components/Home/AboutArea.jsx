import React from 'react';
import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '../common/VideoModal';

const AboutArea = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      {/* <!-- tp-about-area start --> */}
      <section id="about" className="tpabout-area grey-bg pt-180 pb-125 p-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="tpabout text-center">
                <div className="tp-section-title">
                  <span className="tp-sub-title mb-20">#About me</span>
                  <h2 className="tp-title mb-30">I Have Experience in UI/UX <br /> Design Since 2008</h2>
                  <p className="about-des-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                </div>
                <div className="tpabout-button mt-35">
                  <Link href="/portfolio">
                    <a className="tp-grd-btn">Visit My POrtfolio</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpabout__shape-star tpabout__shape-star-1">
          <svg width="20" height="15" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z" fill="#1C99FE" />
          </svg>
        </div>
        <div className="tpabout__shape-star tpabout__shape-star-2">
          <div className="tphero__shape tphero__shape-2">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FD4766"></path>
            </svg>
          </div>
        </div>
      </section>
      {/* <!-- tp-about-area end --> */}

      {/* <!-- tpvideo-area start --> */}
      <section className="tpvideo-area grey-bg pb-150 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpvideo tpvideo-2">
                <img src="assets/img/video/video-2.jpg" alt="video-img" />
                <div className="tpvideo__content">
                  <div className="video-button">
                    <button onClick={handleShow} href="https://www.youtube.com/watch?v=o4GuSJYSzrY" className="popup-video"> <i className="fa-solid fa-play"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tpvideo__shape-star tpvideo__shape-star-1">
            <svg width="19" height="17" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z" fill="#1C99FE" />
            </svg>
          </div>
          <div className="tpvideo__shape-star tpvideo__shape-star-2">
            <svg width="22" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z" fill="#FFCC41" />
            </svg>
          </div>
          <div className="tpvideo__shape-star tpvideo__shape-star-3">
            <svg width="20" height="18" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z" fill="#FD4766" />
            </svg>
          </div>
        </div>
      </section>
      {/* <!-- tpvideo-area end --> */}

      <VideoModal show={show} handleClose={handleClose} videoId="o4GuSJYSzrY" />
    </>
  );
};

export default AboutArea;