import Link from 'next/link';

const HeroAreaThirteen = () => {
  return (
    <>
      <div className="tppoletics-area p-relative">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tppoletics-content text-center">
                <h2 className="tppoletics-title">HILEXA</h2>
                <h3 className="tppoletics-sd-title mb-40">WILLIAM</h3>
                <span className="tppoletics-text">I am a American politician</span>
                <div className="tppoletics-button mt-65">
                  <Link  href="/job-list">
                    <a className="tp-solid-btn">Became a Volenteer</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tppoletics-hero">
                <img src="assets/img/hero/poletics-hero.jpg" alt="hero-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="tpbs-scroll tpbs-scroll-3">
          <a href="#bio-wrapper" className="tpbs-scroll-btn animate">
            <i className="fa-light fa-arrow-down-long"></i></a>
          <span><a href="#bio-wrapper">Scrool Down</a></span>
        </div>
      </div>
    </>
  );
};

export default HeroAreaThirteen;