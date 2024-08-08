import React from 'react'

import nav from"./images/tree 1.jpg"
import nav1 from"./images/tree 1.jpg"
import nav2 from"./images/tree 1.jpg"

export default function carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={nav} className="d-block w-100" height={250} alt="..." />
      </div>
      <div className="carousel-item">
        <img src={nav1} className="d-block w-100" height={250} alt="..." />
      </div>
      <div className="carousel-item">
        <img src={nav2} className="d-block w-100" height={250} alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  )
}
