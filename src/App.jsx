import { useState } from 'react'
import './App.css'

import logo from './assets/logo.png'
import london from './assets/london.png'
import newyork from './assets/newyork.png'
import washington from './assets/washington.png'
import basketball from './assets/basketball.png'
import library from './assets/library.png'
import cafeteria from './assets/cafeteria.png'
import user1 from './assets/user1.jpg'
import user2 from './assets/user2.jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <section className="header" id="home">
        <nav>
          <a href="#home" aria-label="Go to home">
            <img src={logo} alt="University logo" />
          </a>

          <div
            className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}
            id="navLinks"
          >
            <button
              className="icon-button close-menu"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>

            <ul>
              <li><a href="#home" onClick={closeMenu}>HOME</a></li>
              <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
              <li><a href="#course" onClick={closeMenu}>COURSE</a></li>
              <li><a href="#blog" onClick={closeMenu}>BLOG</a></li>
              <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
            </ul>
          </div>

          <button
            className="icon-button open-menu"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </nav>

        <div className="text-box">
          <h1>World Biggest University</h1>
          <p>
            Making a website is now one of the easiest things in the world.
            You just need to learn HTML, CSS, and JavaScript, and you are good to go.
          </p>
          <a href="#course" className="hero-btn">
            Visit us to know more
          </a>
        </div>
      </section>

      <section className="course" id="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo.</p>
          </div>

          <div className="course-col">
            <h3>Degree</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo.</p>
          </div>

          <div className="course-col">
            <h3>Graduation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo.</p>
          </div>
        </div>
      </section>

      <section className="Campus">
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor sit amet.</p>

        <div className="row">
          <div className="campus-col">
            <img src={london} alt="London campus" />
            <div className="layer"><h3>LONDON</h3></div>
          </div>

          <div className="campus-col">
            <img src={newyork} alt="New York campus" />
            <div className="layer"><h3>NEW YORK</h3></div>
          </div>

          <div className="campus-col">
            <img src={washington} alt="Washington campus" />
            <div className="layer"><h3>WASHINGTON</h3></div>
          </div>
        </div>
      </section>

      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet.</p>

        <div className="row">
          <div className="facilities-col">
            <img src={library} alt="University library" />
            <h3>World Class Library</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.</p>
          </div>

          <div className="facilities-col">
            <img src={basketball} alt="Basketball court" />
            <h3>Largest Playground</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.</p>
          </div>

          <div className="facilities-col">
            <img src={cafeteria} alt="University cafeteria" />
            <h3>Tasty and Healthy Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.</p>
          </div>
        </div>
      </section>

      <section className="testiomnials" id="blog">
        <h1>What Our Students Say</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>

        <div className="row">
          <div className="testiomnials-col">
            <img src={user1} alt="Christine Berkley" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, debitis quam? Ipsam, aliquam natus tempore officiis
                voluptatibus dolores similique tenetur.
              </p>
              <h3>Christine Berkley</h3>
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <i key={index} className="fa fa-star" aria-hidden="true"></i>
                ))}
              </div>
            </div>
          </div>

          <div className="testiomnials-col">
            <img src={user2} alt="David Byer" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, debitis quam? Ipsam, aliquam natus tempore officiis
                voluptatibus dolores similique tenetur.
              </p>
              <h3>David Byer</h3>
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <i key={index} className="fa fa-star" aria-hidden="true"></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <h1>
          Enroll for Various Online Courses
          <br />
          Anywhere in the World
        </h1>
        <a href="#contact" className="hero-btn">Contact Us</a>
      </section>

      <section className="footer" id="about">
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
      </section>
    </>
  )
}

export default App