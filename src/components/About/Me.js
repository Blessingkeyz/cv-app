import React from 'react';
import './About.css';
import Box from './Box';
function Me() {
  return (
    <div>
      <Box />
      <h3 className='me'>
        About Me
      </h3>
      <div className='me-about'>
        <p>
          "I am a ready to work man, always ready to work, give me work, bring jobs"
          i am a react Developer!
        </p>
      </div>
    </div>
  )
}

export default Me;