import React from 'react'
import CartBar from '../components/CartBar'
import StoreItem from '../components/StoreItem'

import one_40 from '../assets/one_one_40.png'
import dono_25 from '../assets/dono_25.png'
import boat_75 from '../assets/boat_75.png'
import boat_125 from '../assets/boat_125.png'

const VehicleShop = () => {
  return (
    <div className='bg-[var(--light-gray)] m-4 lg:m-12 animate__animated animate__fadeInUp'>
      <CartBar />
      <div className='p-6'>
        <h5>Vehicles</h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12'>
            <StoreItem pic={one_40} name={'1/1'} price={'40.00 USD'}/>
            <StoreItem pic={dono_25} name={'Dono'} price={'25.00 USD'}/>
            <StoreItem pic={boat_75} name={'SR650fly'} price={'75.00 USD'}/>
            <StoreItem pic={boat_125} name={'amels200 '} price={'125.00 USD'}/>



        </div>
      </div>
    </div>
  )
}

export default VehicleShop
