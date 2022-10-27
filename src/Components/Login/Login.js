import React, { useContext } from 'react';
import {  getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { userContext } from '../../App';

const app = initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const handleGoogleSignIn = ()=>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const {displayName, email} = user;
    const signedInUser = {displayName, email}
    setLoggedInUser(signedInUser)
  }).catch((error) => {    
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;  
    const credential = GoogleAuthProvider.credentialFromError(error);

  });
    }
    return (
        <div className="App">           
           <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;