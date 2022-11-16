import Link from 'next/link';

const HeroAreaNine = () => {
  return (
    <>
      <div className="tp-photograper-hero-area tp-photograper-hero-height p-relative" style={{ backgroundImage: 'url(assets/img/hero/photo-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-photograper-wrapper text-center">
                <h2 className="tp-photograper-title">Photography</h2>
                <div className="tp-photograpper-btn mt-40">
                  <Link href="/portfolio">
                    <a className="tp-solid-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tpbs-scroll tpbs-scroll-2">
            <a href="#tp-photo-cta" className="tpbs-scroll-btn animate">
              <i className="fa-light fa-arrow-down-long"></i></a>
            <span><a href="#tp-photo-cta">Scrool Down</a></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaNine;