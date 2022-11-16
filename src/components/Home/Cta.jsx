import Link from 'next/link';

const Cta = () => {
  return (
    <>
      <section className="tpcta-area grey-bg pt-130 pb-150 p-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-12 col-xl-10 col-lg-10">
              <div className="tpcta-wrapper text-center">
                <h4 className="tpcta-title mb-40">Need special service for your Individual Business?</h4>
                <div className="tpcta-button">
                  <Link href="/contact">
                    <a className="tp-solid-btn">Jump for a meeting</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tpcta__shape-star tpcta__shape-star-1">
            <svg width="19" height="17" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
                fill="#1C99FE" />
            </svg>
          </div>
          <div className="tpcta__shape-star tpcta__shape-star-2">
            <svg width="15" height="16" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
                fill="#FD4766" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;