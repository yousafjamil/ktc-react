import React from 'react'
import AmazonCourses from './AmazonCourses'
import EnginrCourses from './EnginrCourses'
import HomeHeader from './HomeHeader'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
      <HomeHeader  />
      <hr  />
      <h1 className='text-center'>Services that We are offer</h1>
          <AmazonCourses  />
          <hr  />
      <Skills   />
   
       <hr  />
      <EnginrCourses  />
     
    </div>
  )
}

export default Home