import React from 'react'
import './Course.css'

const Course = () => {
  return (
    <div> <section className="course" id="course">
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
          </section></div>
  )
}

export default Course