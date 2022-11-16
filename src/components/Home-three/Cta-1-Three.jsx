import Link from 'next/link';

const CtaOneThree = () => {
  return (
    <>
      <section className="tpfrn-area-2 p-relative">
        <div className="tpfrn-bg-image" style={{ backgroundImage: 'url(assets/img/banner/banner-2.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}> </div>
        <div className="container">
          <div className="tpfrn-wrapper">
            <div className="row justify-content-end">
              <div className="col-xl-7 col-lg-8">
                <div className="tpfrn-content tpfrn-content-2 pt-95 mt-90 mb-90 white-bg">
                  <h3 className="tpfrn-title mb-20">Let’s Talk</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
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
      </section>
    </>
  );
};

export default CtaOneThree;