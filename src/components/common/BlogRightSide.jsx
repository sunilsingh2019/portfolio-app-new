import Link from 'next/link';

const BlogRightSide = ({ dynamicRoute }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="news-sidebar pl-10">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="widget">
                <h6 className="sidebar-title"> Search Here</h6>
                <div className="n-sidebar-search">
                  <input type="text" placeholder="Search your keyword..." />
                  <a href="#"><i className="fal fa-search"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="widget">
                <h6 className="sidebar-title">Popular Feeds</h6>
                <div className="n-sidebar-feed">
                  <ul>
                    <li>
                      <div className="feed-number">
                        <Link href="/blog-details">
                          <a>
                            <img src={dynamicRoute ? "/" + "assets/img/blog/small-news-1.jpg"
                              : "assets/img/blog/small-news-1.jpg"} alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="feed-content">
                        <span className="feed-date">
                          <i className="fal fa-calendar-alt"></i> 20 March 2022
                        </span>
                        <h6><Link href="/blog-details">Don’t Underestimate The Software Administration UX</Link></h6>
                      </div>
                    </li>
                    <li>
                      <div className="feed-number">
                        <Link href="/blog-details">
                          <a>
                            <img src={dynamicRoute ? "/" + "assets/img/blog/small-news-4.jpg"
                              : "assets/img/blog/small-news-4.jpg"} alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="feed-content">
                        <span className="feed-date">
                          <i className="fal fa-calendar-alt"></i> 24th March 2022
                        </span>
                        <h6><Link href="/blog-details">Better Product Pages Turn Visitors</Link>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <div className="feed-number">
                        <Link href="/blog-details">
                          <a>
                            <img src={dynamicRoute ? "/" + "assets/img/blog/small-news-2.jpg"
                              : "assets/img/blog/small-news-2.jpg"} alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="feed-content">
                        <span className="feed-date">
                          <i className="fal fa-calendar-alt"></i> 20 March 2022
                        </span>
                        <h6><Link href="/blog-details">Orchestrating Complexity With Web Animations</Link></h6>
                      </div>
                    </li>
                    <li>
                      <div className="feed-number">
                        <Link href="/blog-details">
                          <a>
                            <img src={dynamicRoute ? "/" + "assets/img/blog/small-news-3.jpg"
                              : "assets/img/blog/small-news-3.jpg"} alt="" />
                          </a>
                        </Link>
                      </div>
                      <div className="feed-content">
                        <span className="feed-date">
                          <i className="fal fa-calendar-alt"></i> 24th March 2022
                        </span>
                        <h6><Link href="/blog-details">The Rise Of Design Thinking As A Problem </Link>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="widget">
                <h6 className="sidebar-title">Categories</h6>
                <ul className="n-sidebar-categories">
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative mb-10">
                          <span>Business</span>
                          <span>26</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative mb-10">
                          Consultant
                          <span className="category-number">30</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative mb-10">
                          Creative
                          <span className="category-number">71</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative mb-10">
                          UI/UX
                          <span className="category-number">56</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details">
                      <a>
                        <div className="single-category p-relative">
                          Texhnology
                          <span className="category-number">60</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="widget">
                <h6 className="sidebar-title">Popular Tag</h6>
                <div className="stags">
                  <a className="single-tag" href="#">landing </a>
                  <a className="single-tag" href="#">Charity</a>
                  <a className="single-tag" href="#">apps</a>
                  <a className="single-tag" href="#">Education build</a>
                  <a className="single-tag" href="#">data</a>
                  <a className="single-tag" href="#">book</a>
                  <a className="single-tag" href="#">Design</a>
                  <a className="single-tag" href="#">website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightSide;