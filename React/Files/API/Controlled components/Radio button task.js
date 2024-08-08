import React from "react"

import { useState } from "react"
export default function App() {
  const [state, setState] = useState("")
  const handler = (e) => {
    setState(e.target.value)
  }
  return (
    <>
      <h1>You have Selected <span style={{ color: 'green' }}> {state} </span> Pizza</h1>
     
      <label onChange={handler} >
        <input type="radio" value="Regular" name="s" />
       Regular
      </label>
 
      <label onChange={handler}>
        <input type="radio" value="Medium" name="s"  />
        Medium
      </label>
 
      <label onChange={handler}>
        <input type="radio" value="Large" />
       Large
      </label>
 
    </>
  )
}