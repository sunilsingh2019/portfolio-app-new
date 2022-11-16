import React from 'react';
import Time from '../../utility/time';

const ComingSoonArea = () => {
  return (
    <>
      <div className="coming-soon-area" style={{ backgroundImage: 'assets/img/bg/soon-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="coming-soon-content text-center">
                <span className="cm-sub-title mb-40">Comming soon</span>
                <h4 className="cm-title">New Design in on a Rool</h4>
                <div className="coming__countdown mt-80 text-center">
                  <div className="coming__countdown-inner d-flex align-items-center">

                    <div className="cdown day"><span className="time-count">
                      {Time('2023-11-27 00:00:00').days}</span> <p>Days</p>
                    </div>
                    <div className="cdown hour">
                      <span className="time-count">{Time('2023-11-27 00:00:00').hours}</span> <p>Hrs</p>
                    </div>
                    <div className="cdown minutes">
                      <span className="time-count">{Time('2023-11-27 00:00:00').minutes}</span> <p>Min</p>
                    </div>
                    <div className="cdown second"> <div>
                      <span className="time-count">{Time('2023-11-27 00:00:00').seconds}</span> <p>Sec</p></div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="cm-subscribe mt-70">
                <span className="notify-title">Notify me on launch:</span>
                <div className="m-sidebar-search m-sidebar-search-2">
                  <input type="text" placeholder="Enter your mail Adress" />
                  <a href="#"><i className="fa-solid fa-paper-plane"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonArea;