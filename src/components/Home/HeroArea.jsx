import React from 'react';

const HeroArea = () => {
  return (
    <>
      <section className="tphero-area pt-140 pb-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="tpdesign-hero text-center">
                <div className="tpdesign-hero-image mb-55">
                  <img src="assets/img/hero/hero-3.jpg" alt="hero" />
                </div>
                <span className="tpdesign-sub-title mb-45">Hi👋 I am Hillexa</span>
                <h2 className="tpdesign-title pb-10">UI/UX Designer Specialized <br />  in Product Design</h2>
                <div className="down-arrow">
                  <a href="#about" className="smoth-scroll">
                    <i className="fal fa-long-arrow-down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tphero__shape tphero__shape-1">
          <svg width="22" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z" fill="#1C99FE" />
          </svg>
        </div>
        <div className="tphero__shape tphero__shape-2">
          <svg width="22" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FD4766" />
          </svg>
        </div>
        <div className="tphero__shape tphero__shape-3">
          <svg width="22" height="22" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z" fill="#1C99FE" />
          </svg>
        </div>
        <div className="tphero__shape tphero__shape-4">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8826 21.4431L8.52566 14.734L0.798549 16.8045L5.83292 10.5875L1.47597 3.87841L8.94433 6.74524L13.9787 0.528313L13.56 8.51705L21.0284 11.3839L13.3013 13.4544L12.8826 21.4431Z" fill="#FFCC41" />
          </svg>
        </div>

      </section>
    </>
  );
};

export default HeroArea;