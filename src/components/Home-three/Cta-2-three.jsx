import Link from 'next/link';

const CtaTwoThree = () => {
  return (
    <>
      <section className="tpcta-area cta-area-3 pt-130 pb-140 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpcta-wrapper text-center">
                <h4 className="tpcta-title tpcta-title-2 mb-40">Enough Talk, Lets Build Something Unique & Creative</h4>
                <div className="tpcta-button mt-20">
                  <Link href="/contact">
                    <a className="tp-border-btn">Jump for a meeting</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaTwoThree;