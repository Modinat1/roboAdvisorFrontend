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
            <button className='login_btn'>Login</button>
             <button style={{backgroundColor: "rgb(22, 74, 134)"}} className='my-3 px-5 py-2 rounded text-white'>Get Started</button>
        </div>
        </ul> 
  )
}

export default MobileBar