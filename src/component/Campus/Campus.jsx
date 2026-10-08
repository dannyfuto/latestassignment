import React from 'react'
import './Campus.css'
import london from '../../assets/london.png'
import newyork from '../../assets/newyork.png'
import washington from '../../assets/washington.png'

const Campus = () => {
  return (
    <div><section className="Campus">
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
          </section></div>
  )
}

export default Campus