import React from 'react'

function SideNavbar() {
    return (
        <>
            <div className="w-[20%] h-[100vh] shadow-md px-[1vmin] bg-[#3852CE]/70 ">
                <ul className="relative">
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[2vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!">Sidenav link 1</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[2vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!">Sidenav link 2</a>
                    </li>
                    <li className="relative">
                        <a className="flex items-center text-[2.7vmin] mt-[2vmin] py-[1.2vmin] px-[1.8vmin] h-[8vmin] overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-[#3852ce] font-medium hover:bg-gray-100 transition duration-300 ease-in-out" href="#!">Sidenav link 2</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SideNavbar