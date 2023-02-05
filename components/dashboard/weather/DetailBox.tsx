import React from 'react';
import { FiSunrise, FiSunset, FiWind, FiEye } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { TbArrowsDown, TbTemperature } from "react-icons/tb";
import { BsThermometerSun } from "react-icons/bs";
export default function DetailBox({sunriseHours, sunsetHours, sunriseMins, sunsetMins, windSpeed, visibility, humidity, pressure, uv, feelsLike}) {
    console.log(visibility)
    return (
        <>
            <div className="flex flex-col w-full mt-12 z-20">
                <p className="text-white/70 text-sm font-normal mb-2">Weather Updates</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-full gap-4">
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">SUNRISE</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">0{sunriseHours}:{sunriseMins}am <FiSunrise/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">SUNSET</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">0{sunsetHours}:{sunsetMins}pm <FiSunset/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">UV INDEX</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between items-center">{uv}% <BsThermometerSun/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">HUMIDITY</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between items-center">{humidity}%  <span className="scale-[1.5] origin-center"><WiHumidity/></span> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">WIND</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">{windSpeed}km/h <FiWind/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">PRESSURE</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">{pressure}hPa <TbArrowsDown/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">FEELS LIKE</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">{feelsLike}°C <TbTemperature/> </p>
                    </div>
                    <div className="w-full max-w-[200px] md:max-w-full h-[100px] bg-white/80 rounded-sm shadow-sm transition-all cursor-pointer hover:scale-[1.02] hover:shadow-[0px_0px_10px_0px_rgba(255,255,255,0.4)] flex flex-col justify-center">
                        <p className="text-black/60 uppercase font-bold text-[10px] md:text-xs px-2 md:px-5">VISIBILITY</p>
                        <p className="text-black/80 font-semibold md:text-2xl px-2 md:px-5 flex flex-row justify-between">{visibility}km <FiEye/> </p>
                    </div>

                </div>
            </div>
        </>
    )
}
