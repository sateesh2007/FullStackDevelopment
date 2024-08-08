import React from 'react'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'

export default function App() {
  return (
    <div>
      <h1>main page</h1>
      <BrowserRouter>
   
     <Link to='/' className='s'>home</Link>
     <Link to='/About' className='s'>About</Link>
     <Link to='/Services' className='s'>Services</Link>
     <Link to='/Contact' className='s'>Contact</Link>
   
      <Routes>
        <Route path='/About' element={<About/>}>    </Route>
        <Route path='/Services' element={<Services/>}> </Route>
        <Route path='/Contact' element={<Contact/>}> </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}