import Link from 'next/link';

const HeroAreaEleven = () => {
  return (
    <>
      <div className="tp-model-hero-area mt-30 mb-50 box-plr-155">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="tpmodel-hero-content">
                <h4 className="tpmodel-hero-title"><b>I consider my profession as a hobby of my <br /> life.</b> Meeting new people, catching their mood, <br /> <b>being part of the happiest moment of their <br /> life. 
                <Link href="/contact">Contact me any time</Link></b></h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="tpmodel-hero-contcat-info">
                <div className="tpmodel-mail-address">
                  <a href="mailto:rasalinawillam@gmail.com">Rasalinawillam@gmail.com</a>
                  <a href="mailto:infoweb@gmail.com">infoweb@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaEleven;