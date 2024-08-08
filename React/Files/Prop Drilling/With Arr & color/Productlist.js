import React from 'react'
import './Style.css'

export default function Productlist({data}) {
  return (
    <div>

      {data.map((x)=><h1>{x}</h1>)}
    </div>
  )
}
