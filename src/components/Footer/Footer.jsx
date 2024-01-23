import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <ul>
            <h3>About Us</h3>
            <li>Our company</li>
            <li>Careers</li>
            <li>Giveback program</li>
        </ul>

        <ul>
            <h3>Legal</h3>
            <li>Accessibility</li>
            <li>Privacy policy</li>
            <li>Terms of use</li>
        </ul>

        <ul>
            <h3>Accounts</h3>
            <li>Non registered account</li>
            <li>Corporate</li>
            <li>All accounts</li>
            <li>Spousal RRSP</li>
        </ul>

        <ul>
            <h3>Products</h3>
            <li>Managed investing</li>
            <li>Self-directed investing</li>
            <li>Private credit</li>
            <li>Private equity</li>
            <li>Cash</li>
        </ul>

        <ul className=''>
            <h3>Social</h3>
            <li className='flex items-center justify-center'><span className='mr-2'><BsInstagram/></span> Instagram</li>
            <li className='flex items-center justify-center'><span className='mr-2'><FaXTwitter/></span> X</li>
            <li className='flex items-center justify-center'><span className='mr-2'><FaYoutube/></span> YouTube</li>
            <li className='flex items-center justify-center'><span className='mr-2'><FaLinkedin/></span> Linkedln</li>
        </ul>
    </footer>
  )
}

export default Footer