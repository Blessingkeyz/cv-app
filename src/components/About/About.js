import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'

function About() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className='myname'>
            Umukoro Blessing
        </div>
        <div className='job'>
            Graphic DEsigner
        </div>
    </div>
  )
}

export default About