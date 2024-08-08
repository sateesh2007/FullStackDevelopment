import React from 'react'
import { useState } from 'react'
export default function App() {
  const [state , setState]=useState('Sateesh')
  const handler=(e)=>{
    setState(e.target.value)
  }
  return (
    <>
      <h1>Controlled component</h1>
      <h2>{state}</h2>
      <input type='txt' value={state} onChange={handler}></input>
    </>
  )
}
