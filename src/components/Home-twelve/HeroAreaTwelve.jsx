import Link from 'next/link';

const HeroAreaTwelve = () => {
  return (
    <>
      <div className="tpfurniture-hero-area pt-60 pb-120 box-plr-155">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8">
              <div className="tpfurniture-wrapper">
                <h3 className="tpfurniture-title"><b>Washington Photographer</b> <span> based in <br /> Oslo and London,</span> <b>working with <br /> portraiture,</b><span> Product Photoshot and art.</span></h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="tpfurniture-contact-info">
                <div className="tpfurniture-wrapper">
                  <h5 className="tpfurniture-contact-title">Lets make something <br /> great together.</h5>
                  <div className="tpfurniture-button mt-30">
                    <Link href="/contact">
                      <a className="tp-ts-btn">Get in touch <i className="fa-solid fa-arrow-right"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaTwelve;