import React from 'react'
import { Link } from 'react-router-dom'
import data from './EnineeringData'
import safetyData from './SafetyData'
import skillData from './SkillData'
const CoursesHeader = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-10 col-lg-12 py-3'>
                    <h3>Enineering  Courses</h3>
                    <section>
                        <h2>Get job-ready for an in-demand career</h2>
                        <div className='row'>
                            {data.slice(0, 3).map((item, index) => {
                                return <div className='col-sm-6 col-lg-4' key={item.id}>

                                    <div className="card" >
                                        <img className="safe-card-img" src={item.image} alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.become}</p>
                                        </div>
                                    </div>
                                </div>

                            })}
                        </div>
                        <Link to='/engineerCourses'> <button className=' explore-btn'>Explore more...</button></Link>
                    </section>



                    <section>
                        <h3>Skill  Courses</h3>

                        <div className='row'>
                            {skillData.slice(0, 3).map((item, index) => {
                                return <div className='col-sm-6 col-lg-4' key={item.id}>

                                    <div className="card" >
                                        <img className="safe-card-img" src={item.image2} alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.become}</p>
                                        </div>
                                    </div>
                                </div>

                            })}
                        </div>
                        <Link to='/skill'> <button className=' explore-btn'>Explore more...</button></Link>
                    </section>




                    <h3>Health And Safety  Courses</h3>
                    <section>


                        <div className='row'>
                            {safetyData.slice(0, 3).map((item, index) => {
                                return <div className='col-sm-6 col-lg-4' key={item.id}>
                                    <div className="card" >
                                        <img className="safe-card-img" src={item.image} alt="Card  cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.become}</p>
                                        </div>
                                    </div>
                                </div>

                            })}

                        </div>
                        <Link to='/safetycourses'><button className=' explore-btn'>Explore more...</button></Link>
                    </section>


                </div>
            </div>
        </div>
    )
}

export default CoursesHeader