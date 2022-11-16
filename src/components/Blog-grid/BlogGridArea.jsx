import React from 'react';
import Link from 'next/link';

import blogData from '../../data/blogData';

const blogItems = blogData.slice(0, 6)

const BlogGridArea = () => {
  return (
    <>
      <div className="blog-grid-area pt-140 pb-105">
        <div className="container">
          <div className="row">
            {
              blogItems.map(item => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="blog-grid-item mb-50">
                    <div className="blog-grid-thumb mb-30">
                      <div className="grid-image w-img">
                        <img src={item.gridImg} alt="blog-img" />
                      </div>
                    </div>
                    <div className="blog-grid-content">
                      <span className="blog-grid-tag mb-20">{item.category}</span>
                      <h4 className="blog-grid-title mb-15">
                        <Link href={`/blog-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h4>
                      <span className="blog-grid-date">
                        <i className="fa-light fa-calendar-days"></i>
                        {item.date}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="row mt-10">
            <div className="col-xl-12">
              {/* <!-- pagination start --> */}
              <div className="basic-pagination text-center">
                <nav>
                  <ul>
                    <li>
                      <Link href="/blog-grid">
                        <a><i className="fa-solid fa-arrow-left-long"></i></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">1</Link>
                    </li>
                    <li>
                      <span className="current">2</span>
                    </li>
                    <li>
                      <Link href="/blog-grid">3</Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <i className="fa-solid fa-ellipsis"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-grid">
                        <a><i className="fa-solid fa-arrow-right-long"></i></a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <!-- pagination end --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGridArea;