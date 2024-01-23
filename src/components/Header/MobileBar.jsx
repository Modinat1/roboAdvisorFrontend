import React from 'react'
import './Header.css'

const MobileBar = () => {
  return (
      <ul className='mobile_navlinks_ul'>
            <li>Cash</li>
            <li>Bond</li>
            <li>Stock</li>
            <li>Crypto</li>
            <li>Support</li>
              <div>


                <div>
            <button className='login_btn'>Login</button>
             <button className='register_btn'>Get Started</button>
                </div>

        </div>
        </ul> 
  )
}

export default MobileBar