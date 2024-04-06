import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

// Styles
import styles from './Login.module.css';

// icons
import google from '../assets/google.svg'

const Login = () => {
    const loginHandler = () =>{
        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    return (
        <div className={styles.loginPage}>
           <div className={styles.loginCard}>
                <h2>Welcome to FateFul ! </h2>

                <div 
                    className={styles.button}
                    onClick={(loginHandler)}
                >
                    <img src={google} alt="google" /> Sign in with Google
                </div>
           </div>
        </div>
    );
};

export default Login;