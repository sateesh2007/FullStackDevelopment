import React from 'react'
import pic from "./images/msd..jpg"

export default function Card1() {
    return (



        <div className="card" >

            <img src={pic} className="card-img-top" alt="..." />

            <div className="card-body">

                <h5 className="card-title">Mahendra</h5>

                <p className="card-text"></p>

                <a href="#" className="btn btn-primary">Go somewhere</a>

            </div>
        </div>



    )
}
