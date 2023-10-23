import React from 'react'
import CartBar from '../components/CartBar'
import StoreItem from '../components/StoreItem'

import LootBox1 from '../assets/LootBox_1.png'
import MoneyBag1 from '../assets/MoneyBag_1.png'
import MoneyBag2 from '../assets/MoneyBag_2.png'


const MoneyShop = () => {

    
  return (
    <div className='bg-[var(--light-gray)] m-4 lg:m-12 animate__animated animate__fadeInUp'>
      <CartBar />
      <div className='p-6'>
        <h5>Money</h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12'>
            <StoreItem pic={MoneyBag1} name={'$10,000,000'} price={'20.00 USD'}/>
            <StoreItem pic={MoneyBag1} name={'$20,000,000'} price={'40.00 USD'}/>
            <StoreItem pic={MoneyBag2} name={'$30,000,000'} price={'50.00 USD'}/>

        </div>
      </div>
    </div>
  )
}

export default MoneyShop
