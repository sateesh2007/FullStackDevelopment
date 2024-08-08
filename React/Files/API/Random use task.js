import React, { useEffect } from 'react'
import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function App() {
const [state, setState]=useState([])
useEffect(()=>{
  fetch('https://randomuser.me/api/?results=25')
            .then(res=>res.json())
            // .then(data=>console.log(data.results))
            .then((data)=>{setState(data.results)})
})
      return(
    <>
    <div className='container'>
      <div className='row'>
    {state.map((x)=>
    <div className='col-md-4'>
    <div class="card">
  <img src={x.picture.medium} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{x.name.first}</h5>
  </div>
  </div>
</div>
    )}
</div>
</div>
    </>
      )
}