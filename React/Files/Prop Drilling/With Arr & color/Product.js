import React from 'react'
import Productlist from './Productlist'

export default function Product({data}) {
  return (
    <div>
      <Productlist data = {data} />
    </div>
  )
}
