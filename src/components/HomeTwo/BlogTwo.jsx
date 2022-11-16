import Link from 'next/link';
import blogData from '../../data/blogData';

const BlogTwo = () => {
  return (
    <>
      <section className="tpproject-area-2 pt-120 pb-135 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <span className="tp-sub-title-2 mb-15">Blog & Article</span>
                <h2 className="tp-title">Read Our Blog & Article</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            {
              blogData.slice(0, 3).map(item => {
                return (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="blog-item-2-wrapper p-relative transition-3 mb-30">
                      <div className="blog-item blog-item-2 fix transition-3">
                        <div className="blog-thumb transition-3">
                          <img src={item.img2} alt="" />
                        </div>
                        <div className="blog-content blog-content-2 transition-3">
                          <div className="blog-meta">
                            <a href="#" className="blog-category">Business..</a>
                            <span><a href="#">{item.date}</a></span>
                          </div>
                          <h3 className="blog-title">
                            <Link href={`/blog-details/${item.id}`}>
                              <a>{item.title}</a>
                            </Link>
                          </h3>
                          <div className="blog-btn">
                            <Link href={`/blog-details/${item.id}`}>
                              <a className="blog-link-btn"><i className="flaticon-right-arrow-1"></i></a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

            <div className="col-xl-12">
              <div className="tpproject-btn mt-40 text-center">
                <Link href="/blog-grid">
                  <a className="tp-solid-btn">View All Article</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogTwo;