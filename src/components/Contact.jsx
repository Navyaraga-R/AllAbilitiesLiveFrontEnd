import React, { useState, useEffect } from "react";
import "./Contact.css";
//import { db } from "../firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoader(true);

  //   db.collection("contacts")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //     })
  //     .then(() => {
  //       setLoader(false);
  //       alert("Your message has been submitted👍");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setLoader(false);
  //     });

  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };

  //onSubmit={handleSubmit}-38
  return (
    <div className="contact">
    <section>
      <div>
        <Navbar/>
      </div>
    </section>
    <div className="row">
      <section>
        <div className="column">
          <img id = "contactImage"src="https://free-now.com/fileadmin/_processed_/4/4/csm_partnership-with-free-now_566ff47c52.png"/>
        </div>
        <div className="column">
        <form className="form" >
            <h1>Contact Us 🤳</h1>

            <label>Name</label>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              style={{ background: loader ? "#ccc" : " rgba(180, 18, 18)" }}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
    <section>
        <div>
            <Footer />
        </div>
    </section>
    </div>
    
  );
};

export default Contact;