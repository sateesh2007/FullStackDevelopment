import React from 'react'

import {useState , useEffect} from 'react'

export default function App() {
  const [state ,setState] = useState(0)



  

  const handler =()=>{
    setState(state+1)
  }
  const handler1 = ()=>{
    setState(state-1)
  }
  return (
    <>
    <h2>Hello</h2>
    <h3>{state}</h3>
    <button onClick ={handler}>increase</button>
    <button onClick ={handler1}>decrease</button>

    
    </>
  )
}
