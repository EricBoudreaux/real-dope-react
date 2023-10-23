import React from 'react'
import CartBar from '../components/CartBar'
import StoreItem from '../components/StoreItem'

import LootBox1 from '../assets/LootBox_1.png'
import MoneyBag1 from '../assets/MoneyBag_1.png'
import MoneyBag2 from '../assets/MoneyBag_2.png'

const LootBoxShop = () => {
  return (
    <div className='bg-[var(--light-gray)] m-4 lg:m-12 animate__animated animate__fadeInUp'>
      <CartBar />
      <div className='p-6'>
        <h5>Loot Boxes</h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12'>
            <StoreItem pic={LootBox1} name={'10x Common Cases'} price={'15.00 USD'}/>
            <StoreItem pic={LootBox1} name={'20x Common Cases'} price={'30.00 USD'}/>
            <StoreItem pic={LootBox1} name={'30x Common Cases'} price={'45.00 USD'}/>


        </div>
      </div>
    </div>
  )
}

export default LootBoxShop
