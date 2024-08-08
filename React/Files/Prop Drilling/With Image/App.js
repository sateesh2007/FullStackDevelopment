import React from 'react'
import Home from './Home'
import pic from './images/msd 1.jpg'

export default function App({data}) {
  const uid ='MSD'
const obj = {
  image:<img src={pic} alt=''/>
}
 return (
    <div>
      
      <Home data ={uid} s={obj.image}/>
    </div>
  )
}
