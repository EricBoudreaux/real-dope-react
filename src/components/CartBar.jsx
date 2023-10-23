import React from 'react'

import { GoTriangleDown } from 'react-icons/go'
import { IoCart } from 'react-icons/io5'

const CartBar = () => {
  return (
    <div className='bg-white px-2 py-4 shadow-lg lg:hidden'>
        <div className='flex justify-between'>
            <div className='flex items-center border-r px-4'>
                <small className='text-black'>USD</small>
                <GoTriangleDown size={15}/>
            </div>
            <div className='border-l px-4'>
                <IoCart size={20}/>
            </div>
        </div>
    </div>
  )
}

export default CartBar
