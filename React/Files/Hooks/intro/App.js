import React from 'react'

import { useState } from 'react'

export default function App() {
  const [state ,setState] = useState("sateesh")
  return (
    <>
    <h1> React Hooks</h1>
    
    <h1>{state}</h1>
    
    </>
    

  )
}
