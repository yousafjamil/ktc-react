import React from 'react'
import { Link } from 'react-router-dom';

function SafetyCard({item}) {
    const  {id,image,header,info}=item;
   
  return (
    <div>

<div className="card mb-3 safe-card" key={id} >
  <img className="safe-card-img" src={image} alt=" card-prop" />
  <h5>{header}</h5>
  <div className="card-body">
    <p className="card-text">{info.substring(0,150)}...</p>
    <Link to={`/coursesdetil/${id}`} >
        <button className='btn btn-info'>Read More...</button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default SafetyCard