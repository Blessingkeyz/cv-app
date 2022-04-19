import React from 'react' ;
import './Navbar.css' ;

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            Umukoro Blessing
        </div>
        <ul className='nav-links'>
            <li>About Me</li>
            <li>Resume</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;