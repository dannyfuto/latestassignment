import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div><section className="footer" id="about">
        <div id="contact">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Learn more about our university and the courses we offer.
          </p>

          <div className="icons" aria-label="Social media links">
            <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            <i className="fa-brands fa-twitter" aria-hidden="true"></i>
          </div>

          <p>
            Made with <i className="fa-solid fa-heart" aria-hidden="true"></i> by
            {' '}Daniel Chidiebere
          </p>
        </div>
      </section></div>
  )
}

export default Footer