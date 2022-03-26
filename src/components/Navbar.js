import {Link} from 'react-router-dom'
import logo from '../images/logo3.jpeg'
import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './NavbarData';

// import logo from '../public/images/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>

      <div className='nav-center'>
        <div className='nav-header'>
       <Link to='/' >  <img src={logo} className='logo' alt='logo' /> </Link>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;






















// import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
// import logo from '../public/images/logo.png'
// import NavData from './NavbarData'
// function Navbar() {
//   // const [show,setshow]=useState(false)
//   return (
//     <div className=''>
 

//   <nav className="navbar navbar-expand-md navbar-light navbar-container">
//  <Link to='/'><img src={logo} className='logo' alt=''/></Link>
//  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//    <span className="navbar-toggler-icon"></span>
//  </button>

//  <div className="collapse navbar-collapse " id="navbarSupportedContent">
//    <ul className="navbar-nav ml-auto ">
//      <li className="nav-item active">
//        <Link className="nav-link m-4" to="/" >Home <span className="sr-only">(current)</span></Link>
//      </li>
    
//      <li className="nav-item">
//        <Link className="nav-link m-4" to="/consultancy">Consultancy</Link>
//      </li>
//      <li className="nav-item">
//        <Link className="nav-link m-4" to="/courses">Courses</Link>
//      </li>
//      <li className="nav-item">
//        <Link className="nav-link m-4" to="/about">About us</Link>
//      </li>
//      <li className="nav-item">
//        <Link className="nav-link m-4" to="/contact">Contact Us</Link>
//      </li>
//      <li className="nav-item">
//        <Link className="nav-link m-4" to="/recent">Recent News</Link>
//      </li>
  
   
//    </ul>
  
//  </div>
//  </nav>


//     </div>
//   )
// }

// export default Navbar

