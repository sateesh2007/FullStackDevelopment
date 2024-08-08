import React from 'react'
import Banner from './Banner'
import Left from './Left'
import Right from './Right'
export default function App() {
    return (
        <div className="container">
            <div className='one'>
                <Banner />
                </div>
                <div className='two'>
                    <Left />
                    </div>
                    <div className='three'>
                        <Right />
               
                    </div>
                </div>
       
    )
}