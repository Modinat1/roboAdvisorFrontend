import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext()

export const StateProvider = ({children}) => {
  const [openBurger, setOpenBurger] = useState(false)
  const [sliderData, setSliderData] = useState([])
  
  const HandleGetData = async () => {
    try{
      const url = 'https://roboadvisor-7015.onrender.com/api/data'
      const response = await axios.get(url)
      setSliderData(response.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    HandleGetData()
  }, [])
  return(
    <StateContext.Provider
    value={{
      openBurger,
      setOpenBurger,
      sliderData,
      setSliderData,
      HandleGetData
    }}
    >
    {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => {
  return useContext(StateContext);
};
