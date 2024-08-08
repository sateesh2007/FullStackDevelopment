import React from 'react'
import { useState } from 'react'

export default function App() {
  const [state , setState] = useState([])

  fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => setState(json))
  return (
    <div>
      <table border={3}>
      <tr><th>Id</th>
      <th>Title</th></tr>


      {state.map((val)=><tr><td>{val.id}</td><td>{val.name}</td></tr>)}
      </table>
    </div>

  )
}
