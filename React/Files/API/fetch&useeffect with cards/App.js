import React from "react"
import { useState, useEffect } from "react"
 export default function App() {
  const [state, setState] = useState([])
  const [search, setSearch] = useState()
  const handler=(s)=>{
    setSearch(s.target.value)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      // .then(json=>console.log(json))
      .then(json => setState(json))
  })
  return (
    <>
      <div className="container">
        <div className="row">
          {state.map((item) =>
            <div className="col-md-4">
              <div className="card" >
                <img src={item.image} alt='' width={300} height={300} />
              
              <div class="card-body">
                <p class="card-text">{item.title}</p>
                </div></div>
                <button style={{backgroundColor:'blueviolet'}}>{item.price}</button>
              
            </div>)}

            <>
    <input type="text" placeholder="search" value={search} onChange={handler}/>
    <br/>
    {state.filter((x)=>x.name.includes(search)).map((item)=><li>{item.name}</li>)}
    </>
        </div>
      </div>
      <h1>useEffect</h1>
    </>
  )
}