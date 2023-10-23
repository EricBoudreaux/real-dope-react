import React from 'react'
import UserPay from './UserPay'

const RecentPayments = () => {
  return (
    <div className='bg-[var(--gray)] m-4 lg:m-12 p-4'>
      <h3>Recent Payments</h3>
      <ul className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-1'>
        <li className=''>
          <UserPay />
        </li>
        <li className=''>
          <UserPay />
        </li>
        <li className=''>
          <UserPay />
        </li>
        <li className=''>
          <UserPay />
        </li>
        <li className=''>
          <UserPay />
        </li>
        <li className=''>
          <UserPay />
        </li>
      </ul>
    </div>
  )
}

export default RecentPayments
