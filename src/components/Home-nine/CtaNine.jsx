import Link from 'next/link';

const CtaNine = () => {
  return (
    <>
      <div id="tp-photo-cta" className="tp-photograper-cta pt-215 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-photograper-cta-wrapper text-center">
                <h3 className="tp-photograper-cta-title"><b>Need a photographer? </b>Someone with experience <br /> to collaborate with? <b><Link href="/contact">Contact Me</Link></b></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaNine;