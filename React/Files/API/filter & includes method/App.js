import React from "react"
import { useState, useEffect } from "react"
export default function App() {
  const [state, setState] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      // .then(json=>console.log(json))
      .then(json => setState(json))
  })
  return (
    <>
     <h1>useEffect</h1>
      <div className="container">
        <div className="row">
          
           {/* Using includes method */}


          {state.filter(x=>x.title.includes('Men')).map((item) =>
            <div className="col-md-4">
              <div className="card" >
                <img src={item.image} alt='' width={300} height={300} />

                <div class="card-body">
                  <p class="card-text">{item.title}</p>
                </div>
                </div>
              <button style={{ backgroundColor: 'blueviolet' }}>{item.price}</button>

            </div>)}
        </div>
      </div>
     
    </>
  )
}