import React ,{ useContext} from 'react'
import { context } from './App'

export default function Productlist() {
  let x= useContext(context)
  return (
    <>
<h3>Welcome to {x} </h3>
    </>
  )
}
