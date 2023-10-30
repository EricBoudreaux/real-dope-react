import React from 'react'
import CartBar from './CartBar'
import Welcome from './Welcome'

import 'animate.css';


const Main = () => {
  return (
    <div className='bg-[var(--light-gray)] m-4 lg:m-12 animate__animated animate__fadeInUp'>
      {/* Components go here */}
      {/* <CartBar /> */}
      <Welcome />
    </div>
  )
}

export default Main
