import React from 'react'

import Main from '../components/Main';

import Logo from '../assets/logo.png'


const Home = () => {
  return (
    <div>
        <img className="animate__animated animate__backInUp hidden lg:block mx-auto" src={Logo} alt='logo' />
        <Main  />
    </div>
  )
}

export default Home
