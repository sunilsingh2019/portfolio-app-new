import React from 'react';

const HeroAreaTen = () => {
  return (
    <>
      <div className="tp-photograper-portfolio p-relative" style={{backgroundImage:'url(assets/img/hero/pg-hero-2.jpg)',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}} >
        <div className="container">
          <div className="col-xl-12">
            <div className="tp-photograper-portfolio-wrapper text-center">
              <span className="tp-pg-portfoli-ts-text mb-55">I AM</span>
              <h2 className="tp-photograper-portfolio-title">HILLEXA</h2>
              <p className="tp-photograper-portfolio-text">PROFESSIONAL PHOTOGRAPHER</p>
            </div>
          </div>
        </div>
        <div className="tpbs-scroll tpbs-scroll-3">
          <a href="#tp-creative" className="tpbs-scroll-btn animate"><i className="fa-light fa-arrow-down-long"></i></a>
          <span><a href="#tp-creative">Scrool Down</a></span>
        </div>
      </div>
    </>
  );
};

export default HeroAreaTen;