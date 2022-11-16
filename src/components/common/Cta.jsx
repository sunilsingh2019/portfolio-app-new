import Link from 'next/link';

const Cta = ({padd}) => {
  return (
    <>
      <div className={`tp-photograper-cta-2 pt-55 pb-100 ${padd ? padd : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-photograper-cta-wrapper text-center">
                <h3 className="tp-photograper-cta-title mb-20"><b>Can’t find what</b> you’re looking for?</h3>
                <p>We’re always looking for people with unique skills. Send us your CV and we’ll get in touch when we <br /> have an opening that matches your expectations.</p>
                <div className="tp-cta-btn mt-25">
                  <Link href="/contact"><a className="tp-solid-btn-square">stay in touch</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;