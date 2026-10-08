import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div> <section className="header" id="home">
            <div className="text-box">
              <h1>World Biggest University</h1>
              <p>
                Making a website is now one of the easiest things in the world.
                You just need to learn HTML, CSS, and JavaScript, and you are good to go.
              </p>
              <a href="/Register" className="hero-btn">
                Visit us to know more
              </a>
            </div>
          </section></div>
  )
}

export default Hero