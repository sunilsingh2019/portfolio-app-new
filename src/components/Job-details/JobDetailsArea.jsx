import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMsg from '../common/ErrorMsg';

const JobDetailsArea = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email  + "\n" + values.msg}`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      msg: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required().label("Name"),
      email: Yup.string().required().email().label("Email"),
      msg: Yup.string().required().min(20).label("Message"),
    }),
    onSubmit: handleOnSubmit,
  })
  return (
    <>
      <div className="job-details-area pt-130 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="job-details-content">
                <div className="jobd-state">
                  <span className="job-dstate pb-25">Ongoing</span>
                </div>
                <h5 className="job-dtitle mt-45 mb-15">Product Manager (Fintech) </h5>
                <span className="job-sm-dtitle">Product Management </span>
                <div className="job-dtext-wrapper mt-50">
                  <p>We are looking for a new Product Manager to join our 14-people Product Management team. Check out our Teams expert blog here. :)</p>
                  <p className="job-dtext mt-25">Since last year, we have been building a new team of <a href="#">Product Managers</a>. Our goal is to build world-class products, elevate the product and execution support we deliver to our clients.
                  </p>
                </div>
                <div className="job-feature-list mt-30">
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Salary :</b> base salary + salary review every 6 months</li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Perks :</b>  + 1 000 PLN home office bonus, Multisport card, private health insurance, discounts on Apple products, development budget!</li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>B2B :</b> +16 paid days off</li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Required skills :</b> 2-year experience in managing complex digital products; C1+ English; experience in Agile</li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>B2B :</b> +16 paid days off</li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Location :</b> Poznań, remotely in Poland, remotely in the EU</li>

                  </ul>
                </div>
                <div className="job-feature-image w-img mt-55 mb-55">
                  <img src="assets/img/about/job-dimg.jpg" alt="job-details-img" />
                </div>
                <h5 className="privacy-title mb-20"><b>Your</b> responsibilities :</h5>
                <div className="job-dtext-wrapper">
                  <p className="job-dtext">Our mission at Nerox is to help entrepreneurs and innovators shape the world through beautiful software. We care about trust, taking ownership, and transparency. As a Certified B <a href="#">Corporation®</a>, we offer a safe, inclusive and productive environment for all team members, and we’re always open.</p>
                </div>
                <div className="job-feature-list job-feature-list-2 mt-40">
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Supporting Nerox’s clients in developing a viable vision, strategy, and roadmap for their products.</b> Working on product discovery and development in order to increase the clients business value.</li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Gaining a deep understanding of our customers’ needs, requirements, and objectives</b>  through taking part in market research, experimentation, user testing, implementing continuous feedback systems, and performing data analysis.</li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Supporting Nerox’s clients in developing a viable vision, strategy, and roadmap for their products.</b> Working on product discovery and development in order to increase the clients business value.</li>
                    <li><i className="fa-solid fa-circle-check"></i> <b>Gaining a deep understanding of our customers’ needs, requirements, and objectives</b> through taking part in market research, experimentation, user testing, implementing continuous feedback systems, and performing data analysis.</li>
                  </ul>
                </div>
                <h5 className="privacy-title mb-20 mt-60"><b>About</b> Nerox :</h5>
                <p>Our mission at Netguru is to help entrepreneurs and innovators shape the world through beautiful software. We care about trust, taking ownership, and transparency. As a Certified B Corporation®, we offer a safe, inclusive and productive environment for all team members, and we’re always.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="job-details-contact mt-50 mb-20">
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur}
                            type="text" placeholder="Your Name" />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Your Email" />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} placeholder="Write  Your Message"></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button className="tp-solid-btn">Send your message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsArea;