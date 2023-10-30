import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home'


import Navbar from './components/Navbar'
import RecentPayments from './components/RecentPayments'

import Copyright from './components/Copyright'


import 'animate.css';
import MoneyShop from './pages/MoneyShop';
import LootBoxShop from './pages/LootBoxShop';
import VehicleShop from './pages/VehicleShop';


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/money' element={<MoneyShop />} />
        <Route path='/lootboxes' element={<LootBoxShop />} />
        <Route path='/vehicles' element={<VehicleShop />} />
      </Routes> 
      {/* <RecentPayments /> */}

      <Copyright />
    </div>
  );
}

export default App;
