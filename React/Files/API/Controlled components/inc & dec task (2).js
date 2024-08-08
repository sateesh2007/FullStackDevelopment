import React, { useState,usememo } from 'react'
export default function App() {
 
  const [state, setstate] = useState(0)
  const [x,setx]=useState(100)
  const add = () => {
    setstate(state+1)
  }
  const minus = () => {
    setx(x-1)
  }
  const multi=()=>{
    console.log(state)
    return(state*5)
  }
  return (
    <>
    {multi()}<br/>
    <button onClick={add}>Add</button>
    {state}<br/>
    <button onClick={minus}>Del</button>
    {x}
    </>
  )
}
 
 