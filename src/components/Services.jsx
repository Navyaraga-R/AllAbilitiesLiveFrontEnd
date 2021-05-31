import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import logo from './logo.png';
import { Link, useHistory } from "react-router-dom";
import './Login.css';
import { auth } from "./Firebase";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

toast.configure();

const Services = () => {

  // Sign Up page 
  const history = useHistory();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 60.00,
    description: "Cool car"
  });

  const makePayment = (token) => {
    const body = {
      token,
      product
    };
    const headers = {
      'Content-Type': 'application/json'
    }

    return fetch('http://localhost:5000/payment', {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log(response, "Total Response");
      const { status } = response;
      console.log("Status", status)
      if (status === 200) {
        toast.success("Payment Successfull");
      }
    }).catch(err => {
      console.log(err)
    })
  }

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
  return (
    <div className="contact">
      <section>
        <div>
          <Navbar />
        </div>
      </section>
      <section className="signup">
        <Link to='/'>
          <img
            className="login__logo"
            src={logo}
          />
        </Link>

        <div className='login__container'>
          <h1>Sign-up</h1>

          <form>
            <h7>First Name</h7>
            <input type='text' value={firstname} onChange={e => setFirstName(e.target.value)} />

            <h7>Last Name</h7>
            <input type='text' value={lastname} onChange={e => setLastName(e.target.value)} />

            <h7>Your Email</h7>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

            <h7>Confirm Your Email</h7>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

            <h7>Your Password</h7>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

            {/* <button type='submit' className='login__signInButton'>Continue</button> */}
          </form>
          <div className="container">
            <div className="product">
              {/* <h3>${product.price}</h3> */}
            </div>
            <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
              token={makePayment}
              email={email}
              name="AllAbilitiesLive"
            />
            <ToastContainer />
          </div>
          <p>
            By signing-in you agree to the ALL ABILITIES LIVE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

          {/* <button onClick={register} className='login__registerButton'>Create your AAB Account</button> */}
        </div>
      </section>
      <section>
        <div>
          <Footer />
        </div>
      </section>
    </div>

  );
};

export default Services;