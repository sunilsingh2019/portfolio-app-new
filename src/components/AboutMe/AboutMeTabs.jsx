import Link from 'next/link';
import { CircularProgressbar } from "react-circular-progressbar";

import awardData from '../../data/awardsData';

const certificationData = [
  {
    id: 1,
    icon: 'assets/img/experience/edu-icon-1.png',
    title: '2018 CAL-ABOTA Trial Designer Of The Year'
  },
  {
    id: 2,
    icon: 'assets/img/experience/edu-icon-2.png',
    title: '2017 Trial Computer science of the Year'
  },
  {
    id: 3,
    icon: 'assets/img/experience/edu-icon-3.png',
    title: 'Martindale-Hubbell AV Rated In The'
  },
  {
    id: 4,
    icon: 'assets/img/experience/edu-icon-4.png',
    title: 'Super Designer’ Top 100 Designer in California'
  },
]

const experienceData = [
  {
    id: 1,
    img: 'assets/img/experience/experience-img-1.png',
    title: 'Sr. Front-end Engineer - Zlitemes',
    date: '2005 - 2008',
  },
  {
    id: 2,
    img: 'assets/img/experience/experience-img-2.png',
    title: 'Front-end Engineer - TheFlow',
    date: '2008 - 2010',
  },
  {
    id: 3,
    img: 'assets/img/experience/experience-img-3.png',
    title: 'Software Engineer - Stacker',
    date: '2010 - 2015',
  },
  {
    id: 4,
    img: 'assets/img/experience/experience-img-4.png',
    title: 'Product Designer at GooDaddy',
    date: '2015 - Figwire',
  },
]

const AboutMeTabs = () => {
  return (
    <>
      <div className="aboutme-tabs-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav nav-tabs ab-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active ab-tab-item" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true">MAIN SKILLS</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link ab-tab-item" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">AWARDS</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link ab-tab-item" id="awards-tab" data-bs-toggle="tab" data-bs-target="#awards" type="button" role="tab" aria-controls="awards" aria-selected="false">EXPERIENCE</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link ab-tab-item" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="false">Education & Certification</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content mt-30" id="myTabContent">
            <div className="tab-pane fade active show" id="about" role="tabpanel" aria-labelledby="about-tab">
              <h4 className="tab-pane-title mb-20"><b>About</b> Nerox</h4>
              <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
              <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum</p>
              <h4 className="tab-pane-title mt-40"><b>Main</b> Skills</h4>
              <div className="experience-list mt-70">
                <div className="row  row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <div className="experience-item text-center mb-50">
                      <div className="progress-circular tl-progress mb-30">
                        <div style={{ width: 135, height: 135 }}>
                          <CircularProgressbar value={90} text={'90%'} />
                        </div>
                      </div>
                      <h5 className="skill-item-title">PHOTOSHOP</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="experience-item text-center mb-50">
                      <div className="progress-circular tl-progress mb-30">
                        <div style={{ width: 135, height: 135 }}>
                          <CircularProgressbar value={61} text={'61%'} />
                        </div>
                      </div>
                      <h5 className="skill-item-title">ILLUSTRATOR</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="experience-item text-center mb-50">
                      <div className="progress-circular tl-progress mb-30">
                        <div style={{ width: 135, height: 135 }}>
                          <CircularProgressbar value={50} text={'50%'} />
                        </div>
                      </div>
                      <h5 className="skill-item-title">ADOBE XD</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="experience-item text-center mb-50">
                      <div className="progress-circular tl-progress mb-30">
                        <div style={{ width: 135, height: 135 }}>
                          <CircularProgressbar value={67} text={'67%'} />
                        </div>
                      </div>
                      <h5 className="skill-item-title">FIGMA</h5>
                    </div>
                  </div>
                  <div className="col">
                    <div className="experience-item text-center mb-50">
                      <div className="progress-circular tl-progress mb-30">
                        <div style={{ width: 135, height: 135 }}>
                          <CircularProgressbar value={58} text={'58%'} />
                        </div>
                      </div>
                      <h5 className="skill-item-title">SKATCH</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
              <div className="about-award__wrap">
                {
                  awardData.map(item => (
                    <div key={item.id} className="tp-award-item mb-30">
                      <div className="award-inner d-md-flex align-items-center">
                        <div className="award-image">
                          <img src={item.img} alt="award-img" />
                        </div>
                        <div className="award-content">
                          <h4 className="award-title">
                            <Link href="/about-me"><a>{item.title}</a></Link>
                          </h4>
                          <span className="award-meta">
                            <span className="award-year">2022..</span>  MNX Business Card</span>
                        </div>
                      </div>
                      <div className="award-icon">
                        <div className="award-icon-wrap">
                          <Link href="/about-me">
                            <a><i className="flaticon-right-arrow-1"></i></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="tab-pane fade" id="awards" role="tabpanel" aria-labelledby="awards-tab">
              <div className="about-skill__wrap">
                <h4 className="tab-pane-title mb-20"><b>Diversity</b> of Experience</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate</p>
                <div className="row mt-70">
                  {
                    experienceData.map(item => (
                      <div key={item.id} className="col-xl-6 cl-lg-6">
                        <div className="experience-sm-item mb-40">
                          <div className="experience-company-image mb-40">
                            <img src={item.img} alt="experience-img" />
                          </div>
                          <h5 className="experience-title"><a>{item.title}</a></h5>
                          <span className="exp-duration mb-20">{item.date}</span>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam</p>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
              <div className="about-education__wrap">
                <h4 className="tab-pane-title mb-20"><b>Diversity</b> of Experience</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.</p>
                <div className="row mt-50">
                  {
                    certificationData.map(item => (
                      <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                        <div className="edu-exp-item mb-30">
                          <div className="edu-exp-image mb-10">
                            <img src={item.icon} alt="edu-exp-icon" />
                          </div>
                          <h5 className="edu-exp-title mb-15"><a>{item.title}</a></h5>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, </p>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeTabs;