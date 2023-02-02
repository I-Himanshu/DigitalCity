import React from 'react'
import { WiCloudy } from "react-icons/wi";
function SideNavbar() {
    return (
        <>
            <div className="w-[20%] h-[100vh] shadow-md px-[1vmin] bg-[#3852CE]/60 pt-[3vmin] overflow-y-scroll">
                <div className="flex flex-col w-full items-center justify-center border-b-[1px] border-b-white/30 pb-[2vmin]">
                    <div className="grid place-items-center h-[10vmin] w-[10vmin] bg-white rounded-full">
                        <i className="fa-solid fa-city text-[5vmin] text-[#3852CE]"></i>
                    </div>
                    <p className="text-[2vmin] mt-[1.8vmin]">DIGITAL TOWNHALL</p>
                </div>
                <ul className="relative">
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"> <i className="fa-solid fa-cloud-sun text-[2.7vmin] mr-[2vmin]"></i> Weather</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"> <i className="fa-solid fa-cloud-sun text-[2.7vmin] mr-[2vmin]"></i> Weather</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"><i className="fa-solid fa-newspaper text-[2.7vmin] mr-[2vmin]"></i> Local News</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"><i className="fa-solid fa-shop text-[2.7vmin] mr-[2vmin]"></i> Vendor</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"><i className="fa-solid fa-cart-shopping text-[2.7vmin] mr-[2vmin]"></i> Order</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"><i className="fa-solid fa-list-check text-[2.7vmin] mr-[2vmin]"></i>Tasks</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"><i className="fa-solid fa-money-bill-wave text-[2.7vmin] mr-[2vmin]"></i>Rent</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"><i className="fa-solid fa-user-doctor text-[2.7vmin] mr-[2vmin]"></i>Jobs</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[1.8vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!"><i className="fa-solid fa-skull-crossbones text-[2.7vmin] mr-[2vmin]"></i>SOS</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideNavbar