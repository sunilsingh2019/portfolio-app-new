import React from 'react';

const BioArea = () => {
  return (
    <>
      <div id="bio-wrapper" className="bio-wrapper grey-bg pt-190">
        <div className="container-fluid">
          {/* biograpy-area start */}
          <div className="biograpy-area pt-80 pb-70 white-bg">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="biograpy-image mb-60">
                    <img src="assets/img/about/biograpy-img-1.jpg" alt="img" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="biograpy-image mb-60">
                    <img src="assets/img/about/biograpy-img-2.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <h4 className="biograpy-title mb-40">Biography</h4>
              <p className="bio-text mb-35">Pork id swine, consequat quis drumstick commodo cupidatat short loin magna tempor tri-tip shoulder chicken bacon. Adipisicing strip steak jerky, swine shank eu aliqua non drumstick cow fatback. Veniam elit meatloaf t-bone in fatback turducken eiusmod ea. Quis kielbasa swine fatback, saola velit chuck ullamco. Frankfurter short ribs pastrami ribeye shoulder occaecat pancetta. Ipsum cupim landjaeger dolore, aliquip strip steak meatloaf nulla eiusmod.</p>
              <div className="row mb-20">
                <div className="col-xxl-7 col-xl-8">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="features__list mb-10">
                        <ul>
                          <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Majored in Political Science</p>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Law School and Civil Rights Attorney</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="features__list mb-10">
                        <ul>
                          <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Deputy Attorney General Media Project</p>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="features__list-icon mr-10">
                              <i className="far fa-check"></i>
                            </div>
                            <div className="features__list-text">
                              <p>Director of the Developing Communities</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>Exercitation voluptate ribeye tongue, laborum picanha dolore flank in pastrami. In brisket tail pariatur in incididunt ham hock shankle bacon landjaeger short ribs deserunt beef. Elit chicken porchetta nostrud, nisi consequat occaecat. Bresaola pancetta occaecat chicken filet mignon exercitation ribeye doner chuck ea pork ex beef andouille. Sunt consequat eu, velit venison drumstick nulla short ribs sausage.
              </p>
            </div>
          </div>
          {/* biograpy-area end */}

          {/* vote-area start  */}
          <div className="vote-area border-top white-bg pt-80 pb-80">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="vote-content text-center">
                    <div className="flag-img mb-35">
                      <img src="assets/img/about/flag-img.jpg" alt="flag-img" />
                    </div>
                    <h4 className="vote-title mb-35">Leadership..  Experience..  Values..</h4>
                    <h5 className="vote-sm-title">VOTE FOR HILEXA WILLAM</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* vote-area end  */}
        </div>
      </div>
    </>
  );
};

export default BioArea;