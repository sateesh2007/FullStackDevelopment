import { useState } from 'react'
import axios from 'axios'
export default function App() {
const [state, setState]=useState([])
function handler(){
  axios.get('https://randomuser.me/api/?results=10')
  .then((res)=>{
    setState(res.data.results)
  })
}
      return(
    <>
    {state.map((x)=><li>{x.name.first}</li>)}
    <button onClick={handler}>Get Data</button>
    </>
      )
}