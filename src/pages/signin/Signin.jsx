import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha'; 
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/sociallogin/SocialLogin';

const Signin = () => {

  const [disabled, setDisabled] = useState(true); 
  const {logIn} = useContext(AuthContext); 
  
  const navigate = useNavigate(); 
  const location = useLocation(); 
  
  const from = location.state?.from?.pathname || '/'; 

  useEffect(() => {
    loadCaptchaEnginge(6); 
  }, [])

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target; 
    const email = form.email.value; 
    const password = form.password.value;
    console.log(email, password); 
    logIn(email, password)
      .then(res => {
        const user = res.user; 
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate(from, {replace: true});
      })
  }

  const handleValidateCaptcha = e => {
    const userCaptchaValue = e.target.value;
    if (validateCaptcha(userCaptchaValue)) setDisabled(false);
    else setDisabled(true);
  }

  return (
    <>
      <Helmet title='Bistro Boss || Signin' />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signin now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="type the captcha above" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input disabled={false} className="btn btn-primary" type="submit" value="Signin" />
              </div>
            </form>
            <p><small>New Here? <Link to='/signup'>Create an account</Link></small></p>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;