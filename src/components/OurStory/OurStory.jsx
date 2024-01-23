import React from 'react'
import investment from '../../images/investment.jpg'
import './OurStory.css'

const OurStory = () => {
  return (
    <section className='ourstory_section md:grid grid-cols-2 gap-5'>

          <main className='md:col-span-1.5'>
            <img src={investment} alt="" />
        </main>
        
        <aside className='text-center md:col-span-1'>
            <h3>Our Story</h3>
            <p>A group of passionate professionals who shared a common goal to help their clients achieve financial success. They knew that financial matters could be complicated and overwhelming, and they 
                wanted to make a difference by providing expert guidance and support. That's how RoboAdvsor was born.
            </p>
            <p>As the years went by, roboAdvisor continued to evolve and grow, but their core values remained the same.
            </p>
            <p>Today, they are commited to providing the highest quality services and strong relationships with their clients. They are passionate about helping their clients achieve their financial goals and support</p>
        </aside>
    </section>
  )
}

export default OurStory