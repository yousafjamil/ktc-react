import React from 'react'
import { Link } from 'react-router-dom'
import SafetyCard from './SafetyCard'
import HSEData from './SafetyData'

function SafetyCourses() {

  return (
    <div className='container py-5'>
      <div className='row'>
        {HSEData.map((item, index) => {
          return <div key={item.id} className='col-sm-8 col-lg-4'>
            <h1>{ }</h1>
            <SafetyCard item={item} />
          </div>

        })}
      </div>
      <Link to={'/majercourses'} ><button className='btn btn-warning ml-3'>Explore more Other Courses.</button></Link>
    </div>
  )
}

export default SafetyCourses