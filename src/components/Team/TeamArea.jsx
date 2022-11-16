import Link from 'next/link';
import teamData from '../../data/TeamData';

const TeamArea = () => {
  return (
    <>
      <div className="team-area pt-140">
        <div className="container">
          <div className="row">
            {
              teamData.map(team => (
                <div key={team.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="tp-team mb-30">
                    <div className="tp-team__thumbnail">
                      <Link href="/about-me">
                        <a>
                          <img src={team.img} alt="team img" />
                        </a>
                      </Link>
                    </div>
                    <div className="tp-team__content">
                      <h4 className="tp-team__title mb-15"><Link href="/about-me">{team.name}</Link></h4>
                      <span className="tp-team__designation">{team.title}</span>
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
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;