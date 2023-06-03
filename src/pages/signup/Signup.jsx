import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signup = () => {

  const navigate = useNavigate(); 
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext); 

  const onSubmit = data => {
    
    createUser(data.email, data.password) 
      .then(res => {
        const loggedUser = res.user; 
        console.log(loggedUser);
    
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email }
            fetch('http://localhost:3000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              }, 
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if(data.insertedId){
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/'); 
                }
              })

          })
          .catch(err => console.error(err));
      })
      .catch(err => console.log(err))
  };

  return (
    <>
      <Helmet title='Bistro Boss || Signup' />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register('name', { required: true })} placeholder="name" className="input input-bordered" />
                {errors.name && <span className='text-red-500'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register('photoURL', { required: true })} placeholder="photoURL" className="input input-bordered" />
                {errors.photoURL && <span className='text-red-500'>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-500'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register('password', { required: true, minLength: 8, maxLength: 20 })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 8 characters</span>}
                {errors.password?.type === 'maxLength' && <span className='text-red-500'>Password must be less 20 characters</span>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Signup" />
              </div>
            </form>
            <p><small><Link to='/signin'>Already have an account? </Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;