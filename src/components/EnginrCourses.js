import React from 'react'
import { Link } from 'react-router-dom'
import data from './EnineeringData'
const EnginrCourses = () => {
    return (
        <div className='container py-5'>
            <div className='row'>
                {data.map((item, index) => {
                    const { image, title, paragraph1, id } = item
                    return <div className='col-sm-8 col-md-6 col-lg-6' key={id}>

                        <div className="card mb-3   safe-card" >
                            <img className="safe-card-img" src={image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{paragraph1.substring(0, 150)}</p>
                                <Link to={`/engineerDetail/${id}`} ><button className='btn btn-warning'>Read More....</button></Link>
                            </div>
                        </div>



                    </div>  
                })}
                <Link to={'/majercourses'} ><button className='btn btn-primary ml-3'>Explore more Other Courses.</button></Link>
            </div>
        </div>
    )

}

export default EnginrCourses