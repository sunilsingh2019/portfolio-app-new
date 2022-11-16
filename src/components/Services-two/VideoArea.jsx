import useGlobalContext from "../../hooks/useGlobalContext";
import VideoModal from "../common/VideoModal";

const VideoArea = () => {
  const {show,handleShow,handleClose} = useGlobalContext();
  return (
    <>
    

      <section className="tpvideo-area p-relative">
        <div className="tpvideo">
          <img src="assets/img/video/video-3.jpg" alt="video-img" />
          <div className="tpvideo__content">
            <div className="video-button">
              <button onClick={handleShow} href="https://www.youtube.com/watch?v=o4GuSJYSzrY" className="popup-video">
                <i className="fa-solid fa-play"></i></button>
            </div>
          </div>
        </div>
      </section>

    <VideoModal show={show} handleClose={handleClose} videoId="o4GuSJYSzrY" />

    </>
  );
};

export default VideoArea;