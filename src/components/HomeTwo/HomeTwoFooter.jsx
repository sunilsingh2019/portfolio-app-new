import React from 'react';

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="tpfooter-area box-plr-85">
          <div className="footer-contact-wrapper footer-contact-overlay include-bg pt-115 pb-75" style={{backgroundImage:'url(assets/img/contact/contact-bg.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__widget footer-col-1">
                    <div className="tp-section-title">
                      <span className="tp-sub-title mb-15">#Contact INfo</span>
                      <h2 className="tp-title tp-title-df mb-20">Any Question?</h2>
                      <p>Methods and techniques to taking raw data - mining for insights and years of experience.</p>
                    </div>
                    <div className="footer__lists mt-40">
                      <div className="footer__list-item mb-40">
                        <div className="footer__list-icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="footer__list-text">
                          <p><a href="https://goo.gl/maps/iAY7xEk5PGbqwBWf6" target="blank">Ta-134/A, Gulshan Badda Link Rd,
                            Nya 10982 USA </a></p>
                        </div>
                      </div>
                      <div className="footer__list-item mb-40">
                        <div className="footer__list-icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="footer__list-text">
                          <p><a href="mailto:rasalinawillam@gmail.com">rasalinawillam@gmail.com</a></p>
                          <p><a href="mailto:info@gmail.com">info@gmail.com</a></p>
                        </div>
                      </div>
                      <div className="footer__list-item mb-40">
                        <div className="footer__list-icon">
                          <i className="fa-solid fa-phone-flip"></i>
                        </div>
                        <div className="footer__list-text">
                          <p><a href="tel:+08987878773345">+08 98787 8773 345</a></p>
                          <p><a href="tel:+08987878773345">+08 98787 8773 345</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__widget footer-col-2">
                    <div className="tp-section-title">
                      <span className="tp-sub-title mb-15">#Get In Touch</span>
                      <h2 className="tp-title tp-title-df mb-20">Let’s Say Hi</h2>
                    </div>
                    <form id="contact-form" action="mail.php" method="POST">
                      <div className="contact-filed mb-20">
                        <input type="text" name="name" placeholder="Enter Name" />
                      </div>
                      <div className="contact-filed mb-30">
                        <input type="email" name="email" placeholder="Enter Mail" />
                      </div>
                      <div className="contact-filed mb-25">
                        <textarea placeholder="Enter your Massage" name="message"></textarea>
                      </div>
                      <div className="form-submit">
                        <button className="tp-grd-btn" type="submit">Send Massage</button>
                      </div>
                      <p className="ajax-response"></p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpcopyright-area text-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12">
                <div className="footer-copyright-text">
                  <p>© 2022 Nerox - Agency & Portfolio Design . All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;