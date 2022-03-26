import React from 'react'
import { Link } from 'react-router-dom'
import data from './SkillData'

const Skills = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <h1>WE Offer the Following training  Courses</h1>
        {data.map((skill, index) => {
          const { id, become, image1, title, becomepara } = skill
          return <div className='col-sm-10 col-lg-6' key={id}>

            <div className="card mb-3">
              <img className="safe-card-img" src={image1} alt="" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{become}</p>
                <p>{becomepara.substring(0, 150)}</p>
                <Link to={`/skillDetail/${id}`} ><button className='btn btn-warning'>Read More....</button></Link>


              </div>
            </div>


          </div>
        })}
        <Link to={'/majercourses'} ><button className='btn btn-info'>Explore more Other Courses.</button></Link>
      </div>
    </div>
  )
}

export default Skills