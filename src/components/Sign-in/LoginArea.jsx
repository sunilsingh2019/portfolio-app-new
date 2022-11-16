import { useFormik } from 'formik';
import Link from 'next/link';
import ErrorMsg from '../common/ErrorMsg';
import { loginSchema } from '../common/schema';

const LoginArea = () => {
  const handleOnSubmit = (values, { resetForm }) => {
    alert(`Sign in successfully`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
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
                <img src="assets/img/about/sign-img-2.png" alt="sign-image" />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="sign-content">
                <h5 className="sign-title mb-30"><b>Login</b> to account</h5>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="sign-input">
                        <label className="sign-label mb-10">Your Email</label>
                        <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}
                          type="email" placeholder="Your Email" />
                        {touched.email && <ErrorMsg error={errors.email} />}
                      </div>
                      <div className="sign-input">
                        <label className="sign-label mb-10">Password</label>
                        <input id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" placeholder="Your password" />
                        {touched.password && <ErrorMsg error={errors.password} />}
                      </div>
                    </div>
                  </div>
                  <div className="sign__action d-sm-flex justify-content-between mt-15 mb-20">
                    <div className="sign__agree d-flex align-items-center">
                      <input type="checkbox" hidden="hidden" id="remember-me" />
                      <label className="switch" htmlFor="remember-me"></label>
                      <p>Remember Me</p>
                    </div>
                    <div className="sign-forgot-password">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="defult-sign">
                    <button type="submit" className="tp-sqbtn-active-2 w-100">Sign In</button>
                  </div>
                  <div className="sign-line"></div>
                  <div className="sign-in-with-google mb-25">
                    <a href="#" className="tp-btn-black w-100">
                      <img src="assets/img/icon/google.png" alt="" />Or sign in with Google</a>
                  </div>
                </form>
                <div className="sign__new text-center">
                  <p>Dont have an account? <Link href="/sign-up"> Sign Up Now</Link></p>
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

export default LoginArea;