import React from 'react'
import CartBar from '../components/CartBar'
import StoreItem from '../components/StoreItem'

import Car1 from '../assets/Car_1.png'
import Car2 from '../assets/Car_2.png'

const VehicleShop = () => {
  return (
    <div className='bg-[var(--light-gray)] m-4 lg:m-12 animate__animated animate__fadeInUp'>
      <CartBar />
      <div className='p-6'>
        <h5>Vehicles</h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12'>
            <StoreItem pic={Car1} name={'Dono Vehicle'} price={'20.00 USD'}/>
            <StoreItem pic={Car2} name={'1/1 Vehicle'} price={'25.00 USD'}/>
            <StoreItem pic={Car1} name={'Dono Vehicle'} price={'20.00 USD'}/>


        </div>
      </div>
    </div>
  )
}

export default VehicleShop
