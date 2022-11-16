import Link from 'next/link';
import teamData from '../../data/TeamData';

const TeamTwo = () => {
  return (
    <>
      <div className="tpteam-area pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <span className="tp-sub-title-2 mb-15">MEET OUR TEAM</span>
                <h2 className="tp-title">Our Pro Team</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            {
              teamData.map(item => {
                return (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="tp-team mb-30">
                      <div className="tp-team__thumbnail">
                        <Link href="/about-me">
                          <a><img src={item.img} alt="team img" /></a>
                        </Link>
                      </div>
                      <div className="tp-team__content">
                        <h4 className="tp-team__title mb-15"><Link href="/about-me">{item.name}</Link></h4>
                        <span className="tp-team__designation">
                          <a>{item.title}</a>
                        </span>
                        <div className="tp-team__social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          <a href="#"><i className="fa-brands fa-behance"></i></a>
                          <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <div className="col-xl-12">
            <div className="tpproject-btn mt-40 text-center">
              <Link href="/portfolio">
                <a className="tp-solid-btn">View All Team Member</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamTwo;