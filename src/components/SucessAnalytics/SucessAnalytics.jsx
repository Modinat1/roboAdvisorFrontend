import React from 'react'
import { BsStarFill } from "react-icons/bs";
import './SucessAnalytics.css'

export const SucessAnalytics = () => {
  return (
    <section className='analytics_container'>
        <ul className='' >
            <li className='flex flex-col'>
                <h3>Nerdwallet</h3>
                
                <small>Best Robo-advisor</small>
                <small>Best Robo-advisor, IRA, 2022</small>
            </li>
            <li className='flex flex-col'>
                <h3>Investopedia</h3>
                
                <small>Best Robo-advisor, 2022</small>
                <small>Best Robo-advisor, 2020</small>
            </li>
            <li className='flex flex-col' >
                <h3>700K+</h3>
                
                <small>Trusted clients</small>
            </li>
            <li className='flex flex-col'>
                <h3>$50B</h3>
                
                <small>In assets managed</small>
            </li>
            <li className='flex flex-col'>
                <div className='flex items-center justify-center md:justify-start'>
                    <h3>4.8 </h3>
                <span style={{color: "rgb(22, 78, 141)"}} className='block ml-1'><BsStarFill/></span>
                </div>
                <small>Apple App Store</small>
            </li>
            <li className='flex flex-col'>
                <div className="flex items-center justify-center md:justify-start">
                <h3>4.9 </h3>
                <span style={{color: "rgb(22, 78, 141)"}} className='block ml-1'><BsStarFill/></span>
                </div>
                <small>Google Play Store</small>
            </li>
        </ul>
    </section>
  )
}
