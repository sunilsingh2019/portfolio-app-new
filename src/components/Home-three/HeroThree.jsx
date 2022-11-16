import Link from 'next/link';

const HeroThree = () => {
  return (
    <>
      <section className="tpfrn-area">
        <div className="container">
          <div className="tpfrn-wrapper s-hero-wrapper" style={{ backgroundImage: 'url(assets/img/banner/banner-1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <div className="tpfrn-content s-hero-content mt-95 mb-95">
                  <div className="tpfrn-content-inner">
                    <span className="tpfrn-sub-title mb-25">HI. I AM</span>
                    <h3 className="tpfrn-title mb-20">Zonathan</h3>
                    <p>I’m working on a professional, visually Website and technologically proficient, responsive and multi-functional.</p>
                    <div className="tpfrn-btn mt-40">
                      <Link href="/contact">
                        <a className="tp-solid-btn">Jump for a quck Meeting</a>
                      </Link>
                    </div>
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

export default HeroThree;