import React from "react";
import "./Footer.css"

const Footer = () => {
  return(
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-heading">
          <h2>Heading</h2>
          <p className="heading-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
           <p className="heading-icons"><a href="#"><i className="fab fa-facebook"></i></a> <a href="#"><i className="fab fa-linkedin"></i></a></p>
        </div>
        <div className="footer-links">
          <h2>Links</h2>
          <ul className="links-list">
              <a href="#">About</a><br/>
              <a href="/Contact">Partner with us</a><br/>
              <a href="/Login">Sign Up</a><br/>
              <a href="/Contact">Contact Us</a><br/>
              <a href="/events">Events</a><br/>
           </ul>
        </div>
        <div className="footer-address">
          <h2>Location</h2>
          <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
          <p className=""><i className="fa fa-phone"></i> (541) 754-3010</p>
          <p><i className="fa fa-envelope"></i> info@hsdf.com</p>
        </div>
      </div>
      <div className="copyright">
        <p>© 2019. All Rights Reserved.</p>
      </div>
    </div>
  )
}


export default Footer;