import React from 'react'
import { TfiMoney } from "react-icons/tfi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
export default function Details() {
    return (
        <>
            <div className="grid grid-cols-3 justify-items-center mt-[7vmin] px-[5vmin]">
                <div className="flex items-center bg-[#3852ce]/10 py-[2vmin] px-[3vmin] transition-all hover:bg-[#3852ce]/20 cursor-pointer rounded-full">
                    <div className="grid place-items-center w-[7vmin] h-[7vmin] bg-[#3852CE] rounded-full">
                        <TfiMoney className="text-white text-[3vmin]"/>
                    </div>
                    <p className="text-black font-semibold text-[4vmin] ml-[2vmin]">100 Burgs</p>
                </div>
                
                <div className="flex items-center bg-[#3852ce]/10 py-[2vmin] px-[3vmin] transition-all hover:bg-[#3852ce]/20 cursor-pointer rounded-full">
                    <div className="grid place-items-center w-[7vmin] h-[7vmin] bg-[#3852CE] rounded-full">
                        <BsFillPeopleFill className="text-white text-[3vmin]"/>
                    </div>
                    <p className="text-black font-semibold text-[4vmin] ml-[2vmin]">10,000 People</p>
                </div>
                
                <div className="flex items-center bg-[#3852ce]/10 py-[2vmin] px-[3vmin] transition-all hover:bg-[#3852ce]/20 cursor-pointer rounded-full">
                    <div className="grid place-items-center w-[7vmin] h-[7vmin] bg-[#3852CE] rounded-full">
                        <FaFire className="text-white text-[3vmin]"/>
                    </div>
                    <p className="text-black font-semibold text-[4vmin] ml-[2vmin]">34 days</p>
                </div>
            </div>
        </>
    )
}