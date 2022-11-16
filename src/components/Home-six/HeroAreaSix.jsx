import Link from 'next/link';

const HeroAreaSix = () => {
  return (
    <>
      <div className="tp-creative-hero-area hero-bg-6 p-relative">
        <div className="hero-wrapper-6 p-relative fix">
          <div className="tp-creative-hero-image">
            <img src="assets/img/hero/creative-hero.png" alt="hero-img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="tp-creative-hero__wrapper">
                  <h2 className="tp-creative-hero__title">NEROX <span>CREATIVE</span></h2>
                  <div className="creative-button mt-75">
                    <Link href="/contact">
                      <a className="tpcr-btn">Get in touch
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-creative-hero-social tp-creative-hero-social-3">
          <div className="tp-creative-hero-social-wrapper">
            <a href="#"><i className="fa-brands fa-facebook-f"></i> Facebook</a>
            <a href="#"><i className="fa-brands fa-youtube"></i> Youtube</a>
            <a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaSix;