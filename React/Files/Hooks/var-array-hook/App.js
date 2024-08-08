import React from 'react'
import { useState } from 'react'

export default function App() {

 // let uid ="sateesh"

  // const person = {
  //   name: 'sateesh',
  //   city :'pdtr',
  //   age: 25
  // }

  const children =['honey','chinnu']

 // const [state, setState] =useState(uid)

 //const [state, setState] =useState(person)

 const [state, setState] =useState(children)
  return (
  // <h1>{state}</h1>

 // <h1>{state.age}</h1>
 <h1>{state[1]}</h1>
   
  )
}
