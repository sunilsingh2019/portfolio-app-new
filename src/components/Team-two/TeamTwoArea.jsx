import Link from 'next/link';
import teamData from '../../data/TeamData';

const TeamTwoArea = () => {
  return (
    <>
      <div className="team-area pt-140 pb-70">
        <div className="container">
          <div className="row">
            {
              teamData.map(item => (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="tpteam text-center mb-60">
                    <div className="tpteam__img">
                      <img src={item.teamImg2} alt="" />
                      <div className="tpteam__social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-behance"></i></a>
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="tpteam__text">
                      <h3 className="tpteam-title"><Link href="/about-me">{item.name}</Link></h3>
                      <span className="team-designation">#<a>{item.title}</a></span>
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

export default TeamTwoArea;