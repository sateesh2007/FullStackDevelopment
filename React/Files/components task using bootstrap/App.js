import React from 'react'
import Navbar from './Navbar'
import Caro from './Caro'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Foot from './Foot'

export default function App() {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-12  ">
                    <Navbar />
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12  ">
                    <Caro />
                </div>
            </div>
            <div className='row'>
                <div className="col-md-4 ">
                    <Card1 />
                </div>
                <div className="col-md-4 ">
                    <Card2 />
                </div>
                <div className="col-md-4 ">
                    <Card3 />
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12 bg-dark text-light text-center  ">
                    <Foot />
                </div>
            </div>
        </div>



    )
}