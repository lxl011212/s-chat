import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import firebase from "firebase/app";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to S-chat!</h2>
                <div className='login-button google' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign In with Google to start chatting
                </div>
            </div>
            <button className="button">
                <a href="https://github.com/lxl011212/s-chat" target="_blank" rel="noreferrer">
                    Source Code
                </a>
            </button>
        </div>
        
    )
}

export default Login;