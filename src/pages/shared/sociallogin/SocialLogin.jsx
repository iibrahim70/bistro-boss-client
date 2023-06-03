import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleSignin } = useContext(AuthContext); 
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const from = location.state?.from?.pathname || '/'; 

  const handleGoogleSignin = () => {
    googleSignin() 
      .then(res => {
        const loggedUser = res.user; 
        console.log(loggedUser);

        const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          })
      })
  }

  return (
    <div>
      <div className='divider w-[70%] mx-auto'/>
        <div className='text-center my-5'>
        <button onClick={handleGoogleSignin} className="btn btn-circle btn-outline">
            <FaGoogle />
          </button>
        </div>
    </div>
  );
};

export default SocialLogin;