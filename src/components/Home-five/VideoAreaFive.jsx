import React from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '../common/VideoModal';

const VideoAreaFive = () => {
  const {show,handleShow,handleClose} = useGlobalContext();
  return (
    <>
      <section className="tpvideo-area tpvideo-area-df grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <h3 className="tpds-title">Some <span>Client</span> Meeting</h3>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-xl-12">
              <div className="tpvideo">
                <img src="assets/img/video/video-img-4.jpg" alt="video-img" />
                <div className="tpvideo__content">
                  <div className="video-button">
                    <button onClick={handleShow} className="popup-video">
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="tpvideo__shape tpvideo__shape-1">
                  <span></span>
                </div>
                <div className="tpvideo__shape tpvideo__shape-2">
                  <span></span>
                </div>
                <div className="tpvideo__shape tpvideo__shape-3">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} videoId="ughr_uB7oww" />
    </>
  );
};

export default VideoAreaFive;