import React from 'react'
import './Facilities.css'
import library from '../../assets/library.png'
import basketball from '../../assets/basketball.png'
import cafeteria from '../../assets/cafeteria.png'

const Facilities = () => {
  return (
    <div><section className="facilities">
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
          </section></div>
  )
}

export default Facilities