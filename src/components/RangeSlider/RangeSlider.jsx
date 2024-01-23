import React, {useState} from 'react'
import './RangeSlider.css'
import { useStateContext } from '../../context/StateContext'

const RangeSlider = () => {
    const {sliderData} = useStateContext()
    const [riskScore, setRiskScore] = useState(0); 

  const handleSliderChange = (event) => {
    const newRiskScore = parseInt(event.target.value, 10);
    setRiskScore(newRiskScore);
  };

      const currentInvestmentData = sliderData.find(
    (data) => data.risk_score === riskScore
  ) || { investment_percentage: 0 };

  return (
    <section className='range_slider_section md:grid grid-cols-2 items-center'>
        <aside>
        <h2>Smarter investing, brilliantly personalized.</h2>
        <p>Just answer a few questions, and we'll build you a generalized portfolio of low-cost index funds from up to 17 global asset classes. Our 
            software handles all the trading, rebalancing, and other busywork to help grow your wealth for the long term
        </p>
        <button className='register_btn'>Get Started</button>
        </aside>

        <main>
                <ul className='relative text-white p-5'>
                <li className='flex items-center justify-between pb-2 pt-5'>
                    <h3 className='flex-1'>Nigerian Stocks:</h3>
                    <div className='border text-right' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.nigerian_stock}`}}><div>{currentInvestmentData.nigerian_stock}</div></div>
                </li>
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>Foreign Stocks:</h3>
                    <div className='border text-right' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.foreign_stock}`}}><div>{currentInvestmentData.foreign_stock}</div></div>
                </li>
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>Tech Stocks:</h3>
                    <div className='border text-right pr-5' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.tech_stock}`}}><div>{currentInvestmentData.tech_stock}</div></div>
                </li>
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>Emerging Stocks:</h3>
                    <div className='border text-right' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.emerging_stock}`}}><div>{currentInvestmentData.emerging_stock}</div></div>
                </li>
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>Nigerian Bonds:</h3>
                    <div className='border text-right' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.nigerian_bonds}`}}><div>{currentInvestmentData.nigerian_bonds}</div></div>
                </li> 
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>Foreign Bonds:</h3>
                    <div className='border text-right' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.foreign_bonds}`}}><div>{currentInvestmentData.foreign_bonds}</div></div>
                </li>
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>Commodities:</h3>
                    <div className='border text-right' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.commodities}`}}><div>{currentInvestmentData.commodities}</div></div>
                </li>
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>Real Estate:</h3>
                    <div className='border text-right' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.real_estate}`}}><div>{currentInvestmentData.real_estate}</div></div>
                </li>
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>T-Bills:</h3>
                    <div className='border text-right pr-5' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.t_bills}`}}><div>{currentInvestmentData.t_bills}</div></div>
                </li>
                <li className='flex items-center justify-between py-2'>
                    <h3 className='flex-1'>Alternative:</h3>
                    <div className='border text-right pr-5' style={{backgroundColor: "rgb(64, 131, 207)", width: `${currentInvestmentData.alternative}`}}><div>{currentInvestmentData.alternative}</div></div>
                </li> 
        <Slider riskScore={riskScore} handleSliderChange={handleSliderChange}/>
            </ul>
                
        </main>
    </section>
  )
}

export default RangeSlider


const Slider = ({riskScore, handleSliderChange}) => {

    return(
        <div className='slider_container'>
        <div className='slider'>
            <label htmlFor="">Risk Score: {riskScore}</label>
            <input className='slider_input'
             type="range"
          min="0"
          max="10"
          step="1"
          value={riskScore}
          onChange={handleSliderChange}
            />
        </div>
        </div>
    )
};