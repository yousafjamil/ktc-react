import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import data from './SafetyData'
const SafetyCourseDeatil = () => {

  const { id } = useParams();
  const detail = data.find((item) => item.id === parseInt(id));

  const { header, image, info, duration1, level1, level2 } = detail
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-sm-8 col-md-12 col-lg-12'>

          <div class="card mb-3 safe-card" >
            <img class="course-detail-img" src={image} alt="" /><hr />
            <h2 className='detail-header'>{header}</h2>
            <b className='detail-header'>{level1}</b>
            <article className='detail-header'>{duration1}   <hr /></article>
            <b className='detail-header'>{level2}</b>
            <div className="card-body">
              <p className="card-text">{info}</p>
              <Link to={`/safetycourses`} >
                <button className='btn btn-info'>GO Back...</button>
              </Link>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default SafetyCourseDeatil