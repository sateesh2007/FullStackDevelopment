import { useState } from "react";
import axios from "axios";

export default function App() {
  const [state, setState] = useState()
  const [loc, setLoc] = useState("")
  
  function handler() {
    axios.get(location)
      .then((res) => { setState(res.data.main.temp - 273.15) })
  }
 
  function demo(s) {
    setLoc(s.target.value)
  }
  const location = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&appid=3d476dc9480ae4fac3ee1c79a66ea408"
  return (
    <>
      <h2>Temperature:{state}<sup>o</sup>c</h2>

      <input type="text" placeholder="Enter Your City" onChange={demo} />
      <br />
      <br></br>
      <button onClick={handler} style={{color:'red',}}>Submit</button>
    </>
  )
}