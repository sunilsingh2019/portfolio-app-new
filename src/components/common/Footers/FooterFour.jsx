import React from 'react';

const FooterFour = () => {
  return (
    <>
      <footer>
        <div className="footer__area">
          <div className="footer__top">
            <div className="container">
              <div className="footer__top-inner">
                <div className="row ">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="footer__info d-flex align-items-center">
                      <div className="footer__info-icon mr-20">
                        <span>
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                      </div>
                      <div className="footer__info-content">
                        <p>
                          <a href="#">Ta-134/A, Gulshan Badda Link Rd, Nya 10982 USA</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 d-flex justify-content-md-center">
                    <div className="footer__info d-flex align-items-center">
                      <div className="footer__info-icon mr-20">
                        <span>
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                      </div>
                      <div className="footer__info-content">
                        <p>
                          <a href="mailto:infoweb@gmail.com">Rasalinawillam@gmail.com</a>
                        </p>
                        <p>
                          <a href="mailto:infoweb@gmail.com">infoweb@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 d-flex justify-content-lg-end">
                    <div className="footer__info d-flex align-items-center">
                      <div className="footer__info-icon mr-20">
                        <span>
                          <i className="fa-solid fa-phone-flip"></i>
                        </span>
                      </div>
                      <div className="footer__info-content">
                        <p>
                          <a href="#">+08 98787 8773 345</a>
                        </p>
                        <p>
                          <a href="#">+887 998 67563 345</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <div className="footer__widget">
                    <ul id="footer-link-inline">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Pages</a></li>
                      <li><a href="#">Service</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="footer__copyright">
                    <p>© 2022 <a href="#">Nerox</a> - Agency & Portfolio Design . All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;