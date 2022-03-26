import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './SkillData'
const SkillDetail = () => {

    const { id } = useParams();
    const detailofSkill = data.find((skill) => skill.id === id)
    const { become, becomepara, image1, image2, image3, image4, info, title } = detailofSkill
    return (
        <div className='container py-5 '>
            <div className='row'>
                <div className='col-sm-8 col-md-12 col-lg-12'>

                    <div class="card mb-3 safe-card" >
                        <div className='card-img-parent'>
                            <img className="card-img" src={image1} alt="" />
                            <img className="card-img" src={image4} alt="" />
                        </div>

                        <hr />
                        <h2 className='detail-header p-1'>{title}</h2>
                        <h2 className='  text-justify p-3 '>{become}</h2><hr />

                        <article className='  text-justify p-3'>{becomepara}   <hr /></article>
                        <div className='card-img-parent'>
                            <img className="card-img" src={image2} alt="" />
                            <img className="card-img" src={image3} alt="" />
                        </div>

                        <article className=' p-2'>{info}</article>
                        <div className="card-body">
                            <p className="card-text">{ }</p>
                            <ul>
                                <li>{ }</li>
                            </ul>
                            <Link to={`/skill`} >
                                <button className='btn btn-primary'>GO Back...</button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default SkillDetail