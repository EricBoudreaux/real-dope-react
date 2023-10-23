import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { FaRightToBracket, FaBars } from 'react-icons/fa6'
import { GoTriangleDown } from 'react-icons/go'
import { IoCart } from 'react-icons/io5'



import Logo from '../assets/logo.png'

const Navbar = () => {

const [nav, setNav] = useState(true)



  return (
    <div className='bg-[var(--red)] py-2  z-50'>

      {/* Mobile Nav */}
      <div className='flex justify-between items-center px-6 lg:hidden h-26'>
        <div className='text-white'>
          <img className='h-[100px]' src={Logo} alt="logo" />
        </div>
        <div className='flex items-center gap-6'>
          <div className='bg-white rounded-sm h-[35px] w-[35px] flex justify-center items-center hover:bg-black hover:text-white duration-200 cursor-pointer relative group'>
            <FaRightToBracket />
            <p className='h-0 opacity-0 group-hover:opacity-100 group-hover:h-12 group-hover:flex absolute top-1 right-[-25px] group-hover:right-12 duration-200 ease-in font-semibold text-white'>Login</p>
          </div>
          <div className=''>
            <FaBars size={25} onClick={() => setNav(!nav)} className='text-white cursor-pointer' />

          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className=' justify-between items-center px-6 hidden lg:flex'>
       <div onMouseEnter={() => setNav(!nav)}  className='flex items-center cursor-pointer'>
          <h4 className='my-6'>Store</h4>
          <GoTriangleDown className='text-white pt-1' size={25}/>
       </div>
        

        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-3'>
            <div className='bg-white rounded-sm h-[35px] w-[35px] flex justify-center items-center hover:bg-black hover:text-white duration-200 cursor-pointer relative group'>
              <IoCart />
              
              <p className='h-0 opacity-0 group-hover:opacity-100 group-hover:h-12 group-hover:flex absolute top-1 right-[-25px] group-hover:right-12 duration-200 ease-in font-semibold text-white'>Login</p>
            </div>
            <div className='flex items-center text-white'>
              <small>USD</small>
              <GoTriangleDown size={15}/>
            </div>
          </div>
          <div className=''>
          <h4 className='my-6 ms-5'>LogIn</h4>


          </div>
        </div>
      </div>


      {/* Dropdown */}
      <div onMouseLeave={() => setNav(!nav)} className={nav ? 'overflow-hidden max-h-0 z-30  duration-500 ease-in-out' : 'overflow-auto max-h-screen  duration-700 ease-in-out z-30'}>
        <ul className='py-12 mx-6'>
          {/* <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
            <a className='' href="/">Tiers</a>
          </li> */}
          {/* <li className='border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
            <a className='' href="/">VIP</a>
          </li> */}
          <Link to='/' className='' href="/">
              <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
                Home
              </li>
          </Link>
          <Link to='vehicles' className='' href="/">
            <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
              Vehicles
            </li>
          </Link>
          <Link to='money' className='' href="/">
            <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
            Money
            </li>
          </Link>
          {/* <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
            <a className='' href="/">Priority Queue</a>
          </li> */}
          <Link to='lootboxes' className='' href="/">
            <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
          Loot Boxes
            </li>
          </Link>  
          {/* <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
            <a className='' href="/">Gang Packages</a>
          </li> */}
          {/* <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
            <a className='' href="/">Unbans</a>
          </li> */}
          {/* <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
            <a className='' href="/">Extras</a>
          </li> */}
          {/* <li className='max-w-[900px] mx-auto border border-[var(--light-gray)] my-1 hover:cursor-pointer duration-300 p-2 text-center group hover:bg-[var(--gray)] text-[var(--white)] hover:text-[var(--black)]'>
            <a className='' href="/">LOGIN</a>
          </li> */}
        </ul>
      </div>
    </div>


  )
}

export default Navbar
