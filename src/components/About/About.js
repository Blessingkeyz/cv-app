import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'
import Me from './Me'

function About() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className='myname'>
          <h2> Umukoro Blessing </h2>
        </div>
        <div className='job'>
          <h3>Graphic Designer/ Web Developer</h3>
        </div>
        <div>
          <Me />
        </div>
    </div>
  )
}

export default About