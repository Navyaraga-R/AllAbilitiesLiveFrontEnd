import React, { useState } from 'react';
import './Login.css'
import logo from './logo.png'; 
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //preventDefault - prevent the page from reloading because of the form tag.
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <section>
                <div>
                    <Navbar/>
                </div>
            </section>
            <section></section>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={logo}
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the ALL ABILITIES LIVE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your AAB Account</button>
            </div>
            <section>
                <div>
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Login