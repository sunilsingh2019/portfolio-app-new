import Link from 'next/link';
import blogData from '../../data/blogData';

const BlogFive = () => {
  return (
    <>
      <section className="tpblog-area pt-105 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpds-wrap text-center">
                <h3 className="tpds-title">Read my <span>Blog & Article</span></h3>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            {
              blogData.slice(5,9).map(item => {
                return (
                  <div key={item.id} className="col-xl-6">
                    <div className="tpmblog-item mb-60">
                      <div className="tpmblog-image mr-30">
                        <img src={item.img} alt="blog-img" />
                      </div>
                      <div className="tpmblog-content">
                        <div className="tpblog__meta tpblog__meta-2 mb-20">
                          <span className="tpblog__catagory">Business..</span>
                          <span className="tpblog__date">{item.date}</span>
                        </div>
                        <h5 className="tpmblog-title mb-20">
                          <Link href={`/blog-details/${item.id}"`}>
                            <a>{item.title}</a>
                          </Link>
                        </h5>
                        <p>Methods and techniques to taking datamining for <br /> insights and years of experience will.</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogFive;