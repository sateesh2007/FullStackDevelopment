import React, { useState } from 'react'
import Home from './Home'

export default function App() {

  const array=['Honey','Chinnu','Vedh','Chiru']
  const [state,setState]=useState(array)
  

 return (
    <div>
      
      <Home data ={state}/>
    </div>
  )
}
