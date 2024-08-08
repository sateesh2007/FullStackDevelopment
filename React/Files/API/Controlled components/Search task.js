import React from "react"
import Data from './Data.json'
import { useState } from "react"
function App() {
  const [state, setState] = useState(Data)
  const [search, setSearch] = useState()
  const handler=(s)=>{
    setSearch(s.target.value)
  }
  return (
    <>
    <input type="text" placeholder="search" value={search} onChange={handler}/>
    <br/>
    {state.filter((x)=>x.name.includes(search)).map((item)=><li>{item.name}</li>)}
    </>
  )
}
export default App