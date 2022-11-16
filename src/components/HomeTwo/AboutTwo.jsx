import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '../common/VideoModal';

const AboutTwo = () => {
  const { show, handleClose, handleShow } = useGlobalContext();
  return (
    <>
      <section className="tpagency-about-area box-plr-85">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="tpagency-about-wrapper pt-120 pb-120" style={{ backgroundImage: 'url(assets/img/bg/about-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <div className="row justify-content-center">
                  <div className="col-xxl-6 col-xl-8 col-lg-12 col-md-10">
                    <div className="tpagency-about text-center">
                      <div className="tp-section-title">
                        <span className="tp-sub-title-2 mb-20">About Company</span>
                        <h2 className="tp-title tp-title-df mb-30">Refreshingly Unique Company <br /> Mission Visson</h2>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                      <div className="tpagency-about-button mt-55">
                        <Link href="/contact">
                          <a className="tp-solid-btn mr-20">Jump for a quck Meeting</a>
                        </Link>
                        <button onClick={handleShow} className="tp-white-btn popup-video mb-20">Play demo Video <i className="fas fa-play"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} videoId="0kRBTJW4lL0" />
    </>
  );
};

export default AboutTwo;