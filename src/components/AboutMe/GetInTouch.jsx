import { useFormik } from 'formik';
import ErrorMsg from '../common/ErrorMsg';
import schema from '../common/schema';

const GetInTouch = () => {
  const handleOnSubmit = (values,{ resetForm }) => {
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
      <div className="getin-touch-area pb-140">
        <div className="container">
          <div className="get-in-touch-wrapper pt-140">
            <h4 className="tab-pane-title mb-40"><b>Get in</b> Touch</h4>
            <div className="row">
              <div className="col-xl-12">
                <div className="contact__form about-me-form">
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
      </div>
    </>
  );
};

export default GetInTouch;