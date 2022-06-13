import React from 'react'
import './product.css'

const Product = ({image, link}) => {
  return (
    <div className='p'>    
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
        <img src={image} alt="" className='p-img' />
    </div>
  )
}

export default Product