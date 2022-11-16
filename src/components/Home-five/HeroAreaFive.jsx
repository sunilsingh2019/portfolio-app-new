import Link from 'next/link';

const HeroAreaFive = () => {
  return (
    <>
      <section className="tp-minimal__area position-relative">
        <div className="tp-minimal__design-thumb" style={{ backgroundImage: `url(assets/img/about/5/ab-img-4.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="tp-minimal__design pt-100 pb-100">
                <div className="tp-minimal__design-wrapper">
                  <h2 className="tp-minimal__design-title">Digital <br /> <span>Studio</span></h2>
                  <p className="tpds-text">We are working on a professional, visually Website <br /> and technologically proficient</p>
                  <div className="tp-minimal__button mt-35">
                    <Link href="/about-me">
                      <a className="tp-solid-btn">Download Cv</a>
                    </Link>
                  </div>
                  <div className="tp-minimal__design-social mt-130">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-behance"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAreaFive;