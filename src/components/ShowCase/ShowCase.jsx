import React from 'react'
import './ShowCase.css'
import ShowcaseImg from '../../images/showcaseImg.jpg'

const ShowCase = () => {
  return (
    <section className='showcase_container'>

    <aside className='showcase_aside'>
        <h1><span style={{color: "rgb(22, 74, 134)"}} className='font-bold italic text-6xl'>Harness the power of cutting-edge technologies </span>  that drive our investment strategies. Benefit from advanced analytics, real-time market insights, and a seamless user experience.</h1>
    </aside>
    <main className='showcase_main'>
        <img src={ShowcaseImg} alt="" />
    </main>
    </section>
  )
}

export default ShowCase