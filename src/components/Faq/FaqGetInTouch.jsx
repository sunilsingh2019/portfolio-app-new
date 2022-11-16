import { useFormik } from 'formik';
import ErrorMsg from '../common/ErrorMsg';
import schema from '../common/schema';

const FaqGetInTouch = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n" + values.subject + "\n" + values.msg}`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      msg: ''
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  })
  return (
    <>
      <div className="getin-touch-area-2 grey-bg pt-130 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbs-section-wrapper text-center mb-30">
                <span className="tp-sub-title mb-15">#Quick Contact</span>
                <h3 className="tpbs-title">Not Enough? Still, Do you <br /> <span> Have a question?</span></h3>
              </div>
            </div>
          </div>
          <div className="row mt-55">
            <div className="col-xl-12">
              <div className="contact__form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-6">
                      <div className="contact__form-input">
                        <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Your Name" />
                        {touched.name && <ErrorMsg error={errors.name} />}
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-6">
                      <div className="contact__form-input">
                        <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Your Email" />
                        {touched.email && <ErrorMsg error={errors.email} />}
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="contact__form-input">
                        <input id='subject' value={values.subject} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Your Subject" />
                        {touched.subject && <ErrorMsg error={errors.subject} />}
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
                        <button type='submit' className="tp-solid-btn">Send your message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqGetInTouch;