import React from 'react'
export default function Logo() {
    const hours = new Date().getHours();
  return (
    <>
        <div className={`absolute top-5 left-[50%] translate-x-[-50%] md:translate-x-0 md:left-5 z-20 text-white text-lg md:text-2xl text${hours} font-black flex flow-row items-center`}>
           <i className="fa-solid fa-cloud-moon"></i> <p className='ml-2'>MaggiWeather </p> 
        </div>
    </>
  )
}
