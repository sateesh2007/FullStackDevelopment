import React from 'react'
import { useState } from 'react'
import pic from './images/msd 1.jpg'
import pic1 from './images/background.jpg'
export default function App() {
  let x={
    img1:<img src={pic} alt='' />
  }
  let y={
    img2:<img src={pic1} alt=''/>
  }
const [state,setstate]=useState(x.img1)
const  handler=()=>{
      setstate(y.img2)
    }
  return (
  <>
   <h4>Click event</h4>
   <h3>{state}</h3>
   <button onClick={handler}>Clickme</button>
  </>
  )
}
