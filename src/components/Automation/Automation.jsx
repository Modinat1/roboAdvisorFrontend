import React from 'react'
import video1 from '../../images/video1.mp4'
import { BsAlipay } from "react-icons/bs";
import { BsAmd } from "react-icons/bs";
import './Automation.css'

const Automation = () => {
  return (
    <section className='automation_container md:grid grid-cols-2 gap-5 mt-10'>

            <aside className='relative'>
            <div className='video_1_container'>
            <video src={video1} autoPlay loop muted/>
            </div>

            <Card1/>
            <Card2/>
            
        </aside>

        <main className='text-center my-3 p-5 md:text-left'>
        <h2>Our not-so-secret ingredient?</h2>
        <p className='secondary_color italic text-lg font-bold'>Automation</p>

        <p>Keep your eyes on the big picture, your other investments, or basically anything besides the busywork. We rebalance your portfolio, automatically
            diversify deposits, and can help save you taxes, all without you ever lifting a finger
        </p>

        <button className='register_btn'>Get Started</button>
        </main>

    
    </section>
  )
}

export default Automation

const Card1 = () => {
    return(
        <>
        <article className='automation_card_1 bg-white md:p-3 px-3 py-2 rounded'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center mb-1'>
                    <span><BsAlipay/></span>
                    <h5 className='ml-2 text-sm'>RoboAdvisor</h5>
                </div>
                <small>now</small>
            </div>
            <p className='text-xs'>We saved you $78.11 on your taxes.</p>
        </article>
        </>
    )
}

const Card2 = () => {
    return(
        <>
        <article className='automation_card_2 bg-white md:p-3 px-2 py-2 rounded'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center mb-1'>
                    <span><BsAmd/></span>
                    <h5 className='text-sm ml-2'>RoboAdvisor</h5>
                </div>
                <small>now</small>
            </div>
            <p className='text-xs'>We automatically invested your $500 deposit.</p>
        </article>
        </>
    )
}