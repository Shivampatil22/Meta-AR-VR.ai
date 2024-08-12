import React from 'react'
import { useNavigate } from "react-router-dom"


const Landingpage = () => {
  const navigate = useNavigate()
  const Enter = () => {
    navigate("/verse")

  }

  return (
    <>

      <div className='h-10 text-3xl' > Hiya there ,This is the landing page :) </div>
      <button className='bg-blue-600 text-white px-4 py-6 rounded-md text-xl' onClick={Enter} >Enter</button>
    </>
  )
}

export default Landingpage