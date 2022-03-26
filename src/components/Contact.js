import React from 'react'
import Card from './Card'

function Contact() {

  const  handleSubmit=()=>{
    alert('this is not operational right now')
  }
  return (
    <div className='container py-5'>

      <div className='row'>

        <div className='col-lg-10  form'>
          <form className='contact-form'>
            <h1>Sign Up </h1>
            <div className="form-group">
              <label >Name</label>
              <input type="text" className="form-control" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <label >Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary w-50" onClick={handleSubmit}>Submit</button>
          </form>
        </div>

      </div>
      <br />
      <hr />

      <div className='row py-5 m-4'>
        <div className='col-lg-10 '>
          <Card Address={'Office TF-183, Deans Trade Center, Peshawar, Kpk Paksitan'} header={"Address"} />
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-6 '>
          <Card Address={'Smart Trainings & Consultancy Services are committed to providing the best HSE Courses..'} header={"About"} />
        </div>

        <div className='col-lg-6 '>
          <Card Address={'nfo@stcs.pk   0092 345 1584542.'} header={"Contact"} />
        </div>
      </div>

      <h1 className='text-center'>Other Branches of STCS</h1>
      
      <div className='row py-5'>
        <div className='col-lg-6 '>
          <Card Address={'019 7J Oldham Manchester United Kingdom.'} header={"Uk"} phone={'Phone : 0044 7388 134732'} />
        </div>

        <div className='col-lg-6'>
          <Card Address={'Dhamam Industrial Area '} phone={'Phone : 0096654841006'} header={"KSA"} />
        </div>

        <div className='col-lg-10  '>
          <Card Address={'email : Info@stcs.pk  '} phone={'whatsapp :0345-1584542'} header={"Contact No "} />
        </div>

      </div>

    </div>
  )
}

export default Contact