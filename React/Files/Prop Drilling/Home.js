import React from 'react'
import Product from './Product'

export default function Home({data}) {
  return (
    <div>
      <Product data= {data}/>
    </div>
  )
}
