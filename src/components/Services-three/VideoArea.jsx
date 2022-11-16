import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '../common/VideoModal';

const VideoArea = () => {
  const { show, handleShow, handleClose } = useGlobalContext();
  return (
    <>
      <div className="tpbs-video-area position-relative black-bg">
        <div className="tpbsvideo-left text-center p-relative">
          <div className="tpbs-left-image" style={{ backgroundImage: `url(assets/img/video/video-img-5.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
          <div className="tpbs-play-btn tpbs-play-btn-2">
            <button onClick={handleShow} className="play-text popup-video animate-2">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
        <div className="tpbs-video-wrapper">
          <div className="container-fluid">
            <div className="row g-0 justify-content-end align-items-center">
              <div className="col-lg-6 ">
                <div className="tpbsvideo-box">
                  <div className="tpbsvideo-content">
                    <div className="tpbs-section-wrapper mb-40">
                      <span className="tp-sub-title mb-15">#Top Intergation</span>
                      <h3 className="tpbs-title tpbs-title-2">Our Most Recent <br /> Digital<span> and Strategy <br /> Projects.</span></h3>
                    </div>
                    <div className="tpbs-video-button mt-50">
                      <Link href="/portfolio-details">
                        <a className="tp-solid-btn">View Project</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal show={show} handleClose={handleClose} videoId="L4CpMr5BNls" />
    </>
  );
};

export default VideoArea;