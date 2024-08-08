import React, { useState,useMemo } from 'react'
export default function App() {
 
  const [state, setstate] = useState(0)
  const [x,setx]=useState(100)
  const a = () => {
    setstate(state+1)
  }
  const b = () => {
    setx(x-1)
  }
  // const multi=()=>{
  //   console.log(state)
  //   return(state*5)
  // }
  const multification=useMemo(function multify(){
    console.log('charan')
    return(state*5)
},[state])
  return (
    <>
    {/* {multi()}<br/> */}
    {multification}<br/>
    <button onClick={a}>Add</button>
    {state}<br/>
    <button onClick={b}>Del</button>
    {x}
    </>
  )
}
 
 