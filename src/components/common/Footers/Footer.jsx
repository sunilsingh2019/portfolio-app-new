import { useFormik } from 'formik';
import ErrorMsg from '../ErrorMsg';
import { contactSchema } from '../schema';
import {isEmpty} from 'lodash';

const Footer = (data) => {
   const handleOnSubmit = (values,{ resetForm }) => {
      alert(`${values.name + "\n" + values.email + "\n" +  values.msg}`);
      resetForm()
    }
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
      initialValues: {
        name: '',
        email: '',
        msg: ''
      },
      validationSchema: contactSchema,
      onSubmit: handleOnSubmit,
    })
    const footerBottomAll = data?.data?.footerBottom?.footerDown;
    const footerTopAll = data?.data?.footerTop?.footer;
    //const footerForm = data?.data?.GravityForms?.gravityForm?.formFields?.no;
    //console.warn('data', data);
   
  return (
    <>
      <footer>
      <div className="tpfooter-area black-bg pt-115 pb-40">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__widget footer-col-1">
                     <div className="tp-section-title">
                        <span className="tp-sub-title mb-15">#Contact INfo</span>
                        <h2 className="tp-title tp-title-df mb-20">{footerTopAll?.contactInfoHeading}</h2>
                        <p> {footerTopAll?.contactInfoBlurb}</p>
                     </div>
                     <div className="footer__lists mt-40">
                        <div className="footer__list-item mb-40">
                           <div className="footer__list-icon">
                              <i className="fa-solid fa-location-dot"></i>
                           </div>
                           <div className="footer__list-text">
                              <p>
                                <a href="#" target="blank">
                                  {footerTopAll?.address} </a>
                                </p>
                           </div>
                        </div>
                        <div className="footer__list-item mb-40">
                           <div className="footer__list-icon">
                              <i className="fas fa-envelope"></i>
                           </div>
                           <div className="footer__list-text">
                              <p><a href="mailto:{footerTopAll?.email1}">{footerTopAll?.email1}</a></p>
                              <p><a href="mailto:{footerTopAll?.email2}">{footerTopAll?.email2}</a></p>
                           </div>
                        </div>
                        <div className="footer__list-item mb-40">
                           <div className="footer__list-icon">
                              <i className="fa-solid fa-phone-flip"></i>
                           </div>
                           <div className="footer__list-text">
                              <p><a href="tel:{footerTopAll?.phone}">{footerTopAll?.phone}</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer__widget footer-col-2">
                     <div className="tp-section-title">
                        <span className="tp-sub-title mb-15">#Get In Touch</span>
                        <h2 className="tp-title tp-title-df mb-20">Let’s Say Hi</h2>
                     </div>
                     <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-filed mb-20">
                        <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Enter Name" />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                        <div className="contact-filed mb-30">
                        <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Enter Email" />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                        <div className="contact-filed mb-25">
                        <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} placeholder="Enter  Your Message"></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                        <div className="form-submit">
                           <button className="tp-grd-btn" type="submit">Send Massage</button>
                        </div>
                        <p className="ajax-response"></p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="tpcopyright-area black-bg-dark">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-6 col-lg-8 col-md-6 col-sm-6">
                  <p>{footerBottomAll?.copyrightText} </p>
               </div>
               <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                  <div className="ft-social">
                     <a href={footerBottomAll?.facebook}><i className="fa-brands fa-facebook-f"></i></a>
                     <a href={footerBottomAll?.twitter}><i className="fa-brands fa-twitter"></i></a>
                     <a href={footerBottomAll?.linkedin}><i className="fa-brands fa-linkedin"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
    </>
  );
};

export default Footer;