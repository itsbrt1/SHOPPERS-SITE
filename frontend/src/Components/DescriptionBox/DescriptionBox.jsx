import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>An e-commerce web is an online platform that facilitates buying and selling of goods and services. 
        It provides a virtual marketplace where customers can browse products, compare prices, 
        and make purchases from the comfort of their homes.</p>
        <p>
            E commerce websites typically displays product or services and details description, images, prices, and any available variations.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox