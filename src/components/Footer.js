import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo3.jpeg'
const Footer = () => {
  return (
    <div className='footer container-fluid'>

      <Link to='/' >  <img src={logo} className='logo' alt='logo' /> </Link>
<div className='row'>
  <div className='col-sm-8 col-log-7 offset-2'>

  <ul className='footer-list'>
        <li><Link to={'/'}  >Home</Link> </li>
        <li> <Link to={'/about'}  >About us</Link></li>
        <li> <Link to={'/contact'}  >contact Us</Link></li>
        <li> <Link to={'/majerCourses'}  >Courses</Link></li>
     
      </ul>

  </div>
</div>
     

      <p>Copyright 2021-2022 by Refsnes Data. All Rights Reserved.
        kamal  training consultant is Powered by ktc.</p>

    </div>
  )
}

export default Footer