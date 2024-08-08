import React from 'react'
import { useState } from 'react'
export default function App() {
  const [state , setState]=useState('')
  const handler=(s)=>{
    setState(s.target.value)
  }
  return (
    <>
      <h1>Controlled component</h1>

      <h2 >You Selected <span style={{color:'yellow'}}>{state} </span>
      course</h2>
      <select value={state} onChange={handler}>
   
        <option>React</option>
        <option>js</option>
        <option>Java</option>
        <option>mongo</option>
      </select>
    </>
  )
}
