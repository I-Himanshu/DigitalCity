import React from 'react'
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
  return (
    <>
        <div className="flex flex-row items-center justify-between w-full px-[4vmin] py-[2vmin] bg-[#3852CE]/10 h-[10vmin]">
            <p className="text-[4vmin] text-black font-bold">Hey Himanshu!</p>
            <div className="flex flex-row items-center">
                <IoIosNotifications className="text-[5vmin] text-[#797979] ml-[auto] relative after:absolute after:content-[''] after:top-0 after:right-0 after:h-[5vmin] after:w-[5vmin] after:bg-red-500 after:rounded-full"/>
                <img src="https://i.pravatar.cc/300" alt="Profile" className="w-[7vmin] h-[7vmin] rounded-full ml-[2vmin] border-2 border-[#3852CE] shadow-sm"/>
            </div>
        </div>
    </>
  )
}