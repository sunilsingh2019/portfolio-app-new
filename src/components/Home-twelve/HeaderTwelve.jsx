import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useState } from 'react';
import useSticky from '../../hooks/use-sticky';
import useGlobalContext from '../../hooks/useGlobalContext';
import Sidebar from '../common/Sidebar';

const HeaderTwelve = () => {
  const { theme, setTheme } = useTheme();
  const { headerSticky } = useSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const {setShowSidebar} = useGlobalContext();

  return (
    <>
      <header>
        <div className="tp-header-area tp-header-3 box-plr-155">
          <div className={`tp-header-area-inner ${headerSticky && 'header-sticky'}`} id="header-sticky">
            <div className="container-fluid">
              <div className="mega-menu-wrapper">
                <div className="row align-items-center">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="logo-dark">
                      <Link href="/">
                        <a>
                          <img src="assets/img/logo/logo.png" alt="logo" />
                        </a>
                      </Link>
                    </div>
                    <div className="logo-white">
                      <Link href="/">
                        <a >
                          <img src="assets/img/logo/logo-white.png" alt="logo" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                    <div className="tp-menu-wrapper text-center">
                      <div className="tpmenu">
                        <nav id="mobile-menu">
                          <ul>
                            <li className="has-dropdown">
                              <Link href="/">
                                <a>Home</a>
                              </Link>
                              <ul className="submenu">
                                <li><Link href="/">Home Designer</Link></li>
                                <li><Link href="/home-two">Home Agency</Link></li>
                                <li><Link href="/home-three">Home Freelancer</Link></li>
                                <li><Link href="/home-four">Home Corporate</Link></li>
                                <li><Link href="/home-five">Home Studio</Link></li>
                                <li><Link href="/home-six">Home Creative</Link></li>
                                <li><Link href="/home-seven">Home Minimal</Link></li>
                                <li><Link href="/home-eight">Home Minimal Full</Link></li>
                                <li><Link href="/home-nine">Home Photographer</Link></li>
                                <li><Link href="/home-ten">Home Photographer 2</Link></li>
                                <li><Link href="/home-eleven">Home Photographer 3</Link></li>
                                <li><Link href="/home-twelve">Home Photographer 4</Link></li>
                                <li><Link href="/home-thirteen">Home Politician</Link></li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/about">About</Link>
                            </li>
                            <li className="has-dropdown megamenu-full">
                              <a href="#">Pages</a>
                              <ul className="megamenu">
                                <li>
                                  <a href="#" className="megamenu-title">Page Layout 1</a>

                                  <ul>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/about-me">About Me</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                    <li><Link href="/faq">FAQ</Link></li>
                                    <li><Link href="/help-center">Help Center</Link></li>
                                    <li><Link href="/error-page">Error 404</Link></li>
                                    <li><Link href="/pricing-plan">Pricing Plan</Link></li>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/coming-soon">Coming Soon</Link></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#" className="megamenu-title">Page Layout 2</a>

                                  <ul>
                                    <li><Link href="/portfolio">Portfolio</Link></li>
                                    <li><Link href="/portfolio-two">Portfolio 2</Link></li>
                                    <li><Link href="/portfolio-three">Portfolio 3</Link></li>
                                    <li><Link href="/portfolio-four">Portfolio 4</Link></li>
                                    <li><Link href="/portfolio-five">Portfolio 5</Link></li>
                                    <li><Link href="/portfolio-six">Portfolio 6</Link></li>
                                    <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                                    <li><Link href="/job-list">Job List</Link></li>
                                    <li><Link href="/job-details ">Job Details</Link></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#" className="megamenu-title">Page Layout 3</a>
                                  <ul>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/services-two">Services 2</Link></li>
                                    <li><Link href="/services-three">Services 3</Link></li>
                                    <li><Link href="/services-four">Services 4</Link></li>
                                    <li><Link href="/service-details">Services Details</Link></li>
                                    <li><Link href="/team">Team</Link></li>
                                    <li><Link href="/team-two">Team 2</Link></li>
                                    <li><Link href="/about-me">Team Details</Link></li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="#" className="megamenu-title">Page Layout 4</a>

                                  <ul>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/product-details">Product Details</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>
                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                    <li><Link href="/checkout">Checkout</Link></li>
                                    <li><Link href="/sign-in">Login</Link></li>
                                    <li><Link href="/sign-up">Register</Link></li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/blog">Blog</Link>
                              <ul className="submenu">
                                <li><Link href="/blog">Blog Page</Link></li>
                                <li><Link href="/blog-grid">Blog Grid</Link></li>
                                <li><Link href="/blog-details">Blog Deatils</Link></li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/contact">Contact</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                    <div className="tp-header-action tp-header-action-2">
                      <ul>
                        <li className="d-none d-sm-inline-block">
                          <button onClick={() => setSearchOpen(true)} className="search">
                            <i className="fas fa-search"></i>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => setShowSidebar(true)} className="info-toggle-btn sidebar-toggle-btn">
                            <i className="fas fa-bars"></i>
                          </button>
                        </li>
                        <li>
                          <div className="mode-switch-wrapper mode-switch-wrapper-2 my_switcher setting-option">
                            <input type="checkbox" className="checkbox" id="chk" />
                            <label className="label" htmlFor="chk">
                              <i onClick={() => setTheme('dark')} className="fas fa-sun tp-dark-icon setColor dark theme__switcher-btn" data-theme="dark"></i>
                              <i onClick={() => setTheme('light')} className="fas fa-moon tp-light-icon setColor light theme__switcher-btn" data-theme="light"></i>
                            </label>
                          </div>
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

      {/* modal-search-start */}
      {
        searchOpen && <div className="modal search-modal" id="search-modal">
          <button onClick={() => setSearchOpen(false)} type="button" className="close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form>
                <input type="text" placeholder="Search here..." />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      }

      {/* < modal-search-end */}

       {/* Sidebar  */}
       <Sidebar />
      {/* Sidebar  */}
    </>
  );
};

export default HeaderTwelve;