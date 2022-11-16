import { useTheme } from 'next-themes';
import Link from 'next/link';
import useSticky from '../../hooks/use-sticky';
import useGlobalContext from '../../hooks/useGlobalContext';
import Sidebar from '../common/Sidebar';

const HeaderSix = () => {
  const { theme, setTheme } = useTheme();
  const { headerSticky } = useSticky();
  const {setShowSidebar} = useGlobalContext();
  return (
    <>
      <header>
        <div className="tp-header-area">
          <div className={`tp-header-area-inner header-padding-6 inner-border ${headerSticky && 'header-sticky'}`} id="header-sticky">
            <div className="container p-relative">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                  <div className="logo-dark">
                    <Link href="/">
                      <img src="assets/img/logo/logo.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="logo-white">
                    <Link href="/">
                      <a>
                        <img src="assets/img/logo/logo-white.png" alt="logo" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-7 d-none">

                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                  <div className="tp-header-right-wrapper d-flex justify-content-end align-items-center">

                    <div className="tp-header-action tp-header-action-6">
                      <ul>
                        <li>
                          {/* <!-- dark mode button start --> */}
                          <div className="mode-switch-wrapper my_switcher setting-option">
                            <input type="checkbox" className="checkbox" id="chk" />
                            <label className="label" htmlFor="chk">
                              <i onClick={() => setTheme('dark')} className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn" data-theme="dark"></i>
                              <i onClick={() => setTheme('light')} className="fas fa-moon tp-light-icon setColor light theme__switcher-btn" data-theme="light"></i>
                            </label>
                          </div>
                          {/* <!-- dark mode button end  --> */}
                        </li>
                        <li>
                          <button onClick={() => setShowSidebar(true)} 
                          className="info-toggle-btn sidebar-toggle-btn  ml-15">
                            <i className="fa-solid fa-bars"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



      {/* Sidebar  */}
      <Sidebar headerMenu={true} />
      {/* Sidebar  */}

    </>
  );
};

export default HeaderSix;