import React from 'react'
import { BsListNested } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { useStateContext } from '../../context/StateContext';
import './Header.css'
import MobileBar from './MobileBar';

const Header = () => {
    const {openBurger, setOpenBurger} = useStateContext();
  return (
    <header>
        <div className='flex justify-between items-center'>
        <div className="header_logo">
            <h3 style={{color: "rgb(22, 74, 134)"}} className='font-bold text-lg md:text-black'>RoboAdvisor</h3>
        </div>

      <ul className='navlinks_ul'>
            <li>Cash</li>
            <li>Bond</li>
            <li>Stock</li>
            <li>Crypto</li>
            <li>Support</li>
              <div>
            <button className='login_btn'>Login</button>
             <button className='register_btn'>Get Started</button>
        </div>
        </ul> 

        {openBurger ? <MobileBar/> : null }
      

        <div className='md:hidden'>
        <button className='focus:outline-none text-lg font-extrabold md:text-black' onClick={()=>setOpenBurger(!openBurger)}>{openBurger? <BsX/> : <BsListNested/>}</button>
        </div>

        </div>

  
       
       
    </header>
  )
}

export default Header