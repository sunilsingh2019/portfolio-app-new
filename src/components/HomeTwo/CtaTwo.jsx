import Link from 'next/link';

const CtaTwo = () => {
  return (
    <>
      <section className="tpcta-area p-relative box-plr-85">
        <div className="container-fluid">
          <div className="tpcta-wrapper-2 text-center pt-130 pb-150" style={{ backgroundImage: 'url(assets/img/bg/cta-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-12">
                  <div className="tpcta-inner tpcta-inner-2">
                    <h4 className="tpcta-title mb-40">Enough Talk, Lets Build Something Unique & Creative</h4>
                    <div className="tpcta-button">
                      <Link href="/contact">
                        <a className="tp-white-btn">Jump for a meeting</a>
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

export default CtaTwo;