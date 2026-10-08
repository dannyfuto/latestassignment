import React from 'react'
import './Testiomnials.css'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'

const Testiomnials = () => {
  return (
    <div><section className="testiomnials" id="blog">
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
</div>
  )
}

export default Testiomnials