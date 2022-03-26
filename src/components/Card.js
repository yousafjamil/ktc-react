import React from 'react'

const Card = ({ header, Address, phone }) => {
  return (
    <div>
      <div className="card mb-3  contact-card">
        <div className="card-header">
          STCS
        </div>
        <div className="card-body">
          <h5 className="card-title">{header}</h5>
          <p className="card-text">{Address}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  )
}

export default Card