import React from 'react'
import GetIcon from './GetIcon';
function datetostring(dt) {
    return `${new Date(dt*1000).getHours()}:${new Date(dt*1000).getMinutes()}`;
}
export default function Hourly({data}) {
    return (
        <>
            <div className="z-20 w-full h-[160px] flex flex-row flex-wrap items-center mt-12 md:mt-0 justify-center md:justify-end">
                <div className="flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">{datetostring(data[1].dt)}</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                    {GetIcon(data[1].weather[0].main, new Date(data[1].dt*1000).getHours())}
                    </p>
                    <p className="text-white text-xl">{Math.round(data[1].temp)}°</p>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">{datetostring(data[2].dt)}</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                    {GetIcon(data[2].weather[0].main, new Date(data[2].dt*1000).getHours())}
                    </p>
                    <p className="text-white text-xl">{Math.round(data[2].temp)}°</p>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">{datetostring(data[3].dt)}</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                    {GetIcon(data[3].weather[0].main, new Date(data[3].dt*1000).getHours())}
                    </p>
                    <p className="text-white text-xl">{Math.round(data[3].temp)}°</p>
                </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">{datetostring(data[4].dt)}</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                    {GetIcon(data[4].weather[0].main, new Date(data[4].dt*1000).getHours())}
                    </p>
                    <p className="text-white text-xl">{Math.round(data[4].temp)}°</p>
                </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center mx-3">
                    <p className="text-white text-xs mb-1 font-light uppercase">{datetostring(data[5].dt)}</p>
                    <div className="w-[60px] h-[100px] bg-white/10 backdrop-blur-[100px] p-5 shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] rounded-full flex flex-col items-center justify-center">
                    <p className='text-[40px] text-white'>
                    {GetIcon(data[5].weather[0].main, new Date(data[5].dt*1000).getHours())}
                    </p>
                    <p className="text-white text-xl">{Math.round(data[5].temp)}°</p>
                </div>
                </div>
            </div>
        </>
    )
}
