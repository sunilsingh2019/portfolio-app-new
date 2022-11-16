import Link from 'next/link';

const Pagination = () => {
  return (
    <>
      <div className="row mt-40">
            <div className="col-xl-12">
              {/* <!-- pagination start --> */}
              <div className="basic-pagination text-center">
                <nav>
                  <ul>
                    <li>
                      <Link href="/portfolio">
                        <a><i className="fa-solid fa-arrow-left-long"></i></a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">1</Link>
                    </li>
                    <li>
                      <span className="current">2</span>
                    </li>
                    <li>
                      <Link href="/portfolio">3</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <i className="fa-solid fa-ellipsis"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio">
                        <a><i className="fa-solid fa-arrow-right-long"></i></a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <!-- pagination end --> */}
            </div>
          </div>
    </>
  );
};

export default Pagination;