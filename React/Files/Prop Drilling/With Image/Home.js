import React from 'react'
import Product from './Product'

export default function Home({data ,s}) {
  return (
    <div>
      <Product data= {data} s={s}/>
    </div>
  )
}
