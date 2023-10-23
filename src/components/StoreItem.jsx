import React from 'react'

import LootBox1 from '../assets/LootBox_1.png'
import MoneyBag1 from '../assets/MoneyBag_1.png'
import MoneyBag2 from '../assets/MoneyBag_2.png'


const StoreItem = ({ pic, name, price }) => {


  return (
    <div className=' bg-white mx-auto max-w-[380px] hover:scale-105 duration-500 ease-in-out'>
        <img className='h-64 mx-auto object-cover border-b pb-2 p-2' src={pic} alt="store item" />
        <div className='p-3'>
            <h2>{name}</h2>
            <h3>{price}</h3>
        </div>
        <button className='bg-[#D9D9D9] hover:bg-[var(--red)] duration-300 ease-in-out py-4 text-white w-full'>ADD TO BASKET</button>
    </div>
  )
}

export default StoreItem
