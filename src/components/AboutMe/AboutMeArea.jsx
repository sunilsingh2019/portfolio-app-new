import React from 'react';

const AboutMeArea = () => {
  return (
    <>
      <div className="aboutme-area pt-140 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img src="assets/img/about/about-me.jpg" alt="about-me img" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50"><b>Rasalina</b> Willam</h3>
                  <span className="aboutme-sub-title">Ui/UX Deisgner @visiontrust</span>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li><p>Expertise:<a href="#"> Planning, Strategy</a></p></li>
                    <li><p>Experience:<a href="#"> 15 Years</a></p></li>
                    <li><p>E-mail:<a href="mailto:nerox490@gmail.com"> nerox490@gmail.com</a></p></li>
                    <li><p>Phone:<a href="tel:507-452-1254"> 507-452-1254</a></p></li>
                  </ul>
                </div>
                <div className="aboutme-social mt-40">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeArea;