import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import data from './EnineeringData'
const EngineerDetail = () => {
  const  {id}=useParams()
const  detail=data.find((item)=>item.id === id)
const  {image,title,become,becomepara,work,skill,paragraph1}=detail
  return (
    <div className='container py-5 '>
    <div className='row'>
        <div className='col-sm-8 col-md-12 col-lg-12'>
    
        <div className="card mb-3 safe-card" >
      <img className="course-detail-img" src={image} alt="Card  cap" /><hr />
      <h2 className='detail-header p-1'>{title}</h2>
         <p className='  text-justify p-3 '>{skill}</p>
       <article className='  text-justify p-3'>{paragraph1}   <hr  /></article>  
       <b className='detail-header p-2'>{become}</b>
      <div className="card-body">
        <p className="card-text">{becomepara}</p>
        <ul>
          <li>{work}</li>
        </ul>
        <Link to={`/engineerCourses`} >
            <button className='btn btn-primary'>GO Back...</button>
        </Link>
      </div>
    </div>
    
    
        </div>
    </div>
    
        </div>
  )
}

export default EngineerDetail