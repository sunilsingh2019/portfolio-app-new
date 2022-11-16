import { useFormik } from 'formik';
import Link from 'next/link';
import ErrorMsg from '../common/ErrorMsg';
import { registerSchema } from '../common/schema';

const SignUpArea = () => {
  const handleOnSubmit = (values,{ resetForm }) => {
    alert(`Sign up successfully`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: handleOnSubmit,
  });
  return (
    <>
      <div className="sign-area pt-140 pb-140">
        <div className="container">
          <div className="sign-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-7">
                <div className="sign-image w-img">
                  <img src="assets/img/about/sign-img.jpg" alt="sign-image" />
                </div>
              </div>
              <div className="col-xl-5">
                <div className="sign-content">
                  <h5 className="sign-title mb-30"><b>Create your</b> Account</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-12 col-xl-12 col-lg-12">
                        <div className="sign-input">
                          <label className="sign-label mb-10">Your Name</label>
                          <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} 
                          type="text" placeholder="Your Name" />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                        <div className="sign-input">
                          <label className="sign-label mb-10">Your Email</label>
                          <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Your Email" />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                        <div className="sign-input">
                          <label className="sign-label mb-10">Password</label>
                          <input id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Your password" />
                          {touched.password && <ErrorMsg error={errors.password} />}
                        </div>
                        <div className="sign-input">
                          <label className="sign-label mb-10">Confirm Password</label>
                          <input id='confirmPassword' value={values.confirmPassword} onChange={handleChange} 
                          onBlur={handleBlur} type="password" placeholder="Confirm password" />
                          {touched.confirmPassword && <ErrorMsg error={errors.confirmPassword} />}
                        </div>
                      </div>
                    </div>
                    <div className="sign__action d-sm-flex justify-content-between mt-15 mb-20">
                      <div className="sign__agree d-flex align-items-center">
                        <input type="checkbox" hidden="hidden" id="remember-me" />
                        <label className="switch" htmlFor="remember-me"></label>
                        <p>Agree to terms & conditions</p>
                      </div>
                    </div>
                    <div className="defult-sign">
                      <button type="submit" className="tp-sqbtn-active-2 w-100">Sign Up</button>
                    </div>
                    <div className="sign-line"></div>
                    <div className="sign-in-with-google mb-25">
                      <a href="#" className="tp-btn-black w-100">
                        <img src="assets/img/icon/google.png" alt="" />Or sign up with Google</a>
                    </div>
                  </form>
                  <div className="sign__new text-center">
                    <p>Already have an account? <Link href="/sign-in"> Sign In</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpArea;