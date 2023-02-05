import React from 'react'
import GetIcon from './GetIcon';

export default function MainTemp({temp,desc,city}) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const date = new Date();
  const day = days[date.getDay()];

  return (
    <>
      <div className="z-20 flex flex-col rounded-md bg-white/10 backdrop-blur-[100px] p-5 shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)]">
        <div className="flex flex-row items-end pb-3">
          <p className='text-5xl font-semibold text-white opacity-80'>{temp}<span>°</span>C</p> 
          <p className='ml-2 text-white font-light uppercase text-xs'>{desc}</p>
        </div>
        <div className="flex flex-row items-center border-t-[1px] border-white/10 pt-3">
          <div className="grid place-items-center text-white text-5xl">
            {GetIcon(desc, date.getHours())}
          </div>
          <div className="flex flex-col justify-center ml-2">
            <p className='text-white uppercase font-extralight text-[10px] leading-[12px]'>{city}</p>
            <p className='text-white uppercase font-extralight text-[10px] leading-[12px]'> {day} {date.toISOString().split("T")[0]} </p>
          </div>
        </div>
      </div>
    </>
  )
}
