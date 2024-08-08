import React from "react"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <>
       <h1>Main page</h1>
       <BrowserRouter>
       <Routes>
        <Route path='/about' element={<h1>About us</h1>}></Route>
        <Route path='/services' element={<h1>services us</h1>}></Route>
        <Route path='/contact' element={<h1>contact us</h1>}></Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}