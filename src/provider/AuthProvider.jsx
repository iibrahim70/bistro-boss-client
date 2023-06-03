import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'; 
import {app} from '../firebase/firebase.config'; 
import axios from 'axios';

export const AuthContext = createContext(null); 
const auth = getAuth(app); 

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  
  const googleProvider = new GoogleAuthProvider(); 

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password); 
  }

  const googleSignin = () => {
    setLoading(true); 
    return signInWithPopup(auth, googleProvider); 
  } 

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password); 
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth); 
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser); 
      console.log('CURRENT USER', currentUser);

      // get and set token
      if(currentUser){
        axios.post('http://localhost:3000/jwt', {email: currentUser.email})
        .then(data => {
          localStorage.setItem('access-token', data.data.token)
          setLoading(false);
        })
      }
      else{
        localStorage.removeItem('access-token'); 
      }
    })
    return () => unsubscribe(); 
  }, [])

  const authInfo = {
    user, 
    loading,
    createUser,
    logIn,
    googleSignin,
    updateUserProfile,
    logOut, 
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;