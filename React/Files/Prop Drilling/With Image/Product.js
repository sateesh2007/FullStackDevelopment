import React from 'react'
import Productlist from './Productlist'

export default function Product({data ,s}) {
  return (
    <div>
      <Productlist data = {data} s={s}/>
    </div>
  )
}
