import React, { useState } from 'react'
import axios from 'axios'
export default function App() {
 
  const [state, setstate] = useState([])
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Proddatur&appid=e733fda0fbcabdeb8f6d20ff021f842b')
    // .then((res)=>console.log(res.data.results))
    .then((res)=>setstate(res.data.main))
  return (
    <>
    <h1>Current Proddatur weather</h1>
    <h1>{state.temp}</h1>
    </>
  )
}
 
 