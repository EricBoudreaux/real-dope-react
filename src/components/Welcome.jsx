import React from 'react'

import { SiCashapp, SiPaypal } from 'react-icons/si'

const Welcome = () => {
  return (
    <div className='lg:pt-16 my-8 px-6 lg:ps-12 lg:pe-32'>
      <h1 className='text-6xl'>Welcome!</h1>

        <p className='my-10'>
            This is the store for the <em>RealDopeRP</em> server!
            All items are <strong>non-refundable</strong>, and you 
            must be online to receive your items. 
        </p>
        <h1>Payment Methods</h1>
        <p className='my-10'>
            Currently, our only payment methods
            are Cash App and PayPal. However, 
            we also support credit cards, debit 
            cards, and prepaid cards. If you would 
            like to purchase with any of these, carry 
            out with your PayPal purchase, and 
            below the  PayPal login, select “Pay 
            with Debit or Credit Card.”
        </p>
        <div className='flex my-10 gap-6'>
            <SiCashapp className='hover:animate-spin ease-in hover:text-[var(--red)] duration-300' size={70}/>
            <SiPaypal className='hover:animate-spin ease-in hover:text-[var(--red)] duration-300' size={70}/>
        </div>
        <h1>Missing your items?</h1>
        <p className='my-10'>
            Your items don’t come automatically,
            you must crate a donation ticket in 
            our Discord. To join our Discord click
            this highlighted message. Please
            allow time for your items to come to
            you, you must be in game and ready
            to verify your purchase to our Senior
            Admins or higher!
        </p>
        <p className='my-2 pb-12'>
            *Important notes any chargeback will
            result in a permanent blacklist from 
            our server.
        </p>
    </div>
  )
}

export default Welcome
