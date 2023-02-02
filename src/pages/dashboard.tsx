import Details from 'components/dashboard/Details'
import Navbar from 'components/dashboard/Navbar'
import React from 'react'
import '../../styles/globals.css'
import SideNavbar from 'components/sidenavbar/SideNavbar'
function dashboard() {
  return (
    <>
      <div className="flex flex-row">
        <SideNavbar/>
      <div className="w-full flex flex-col bg-white min-h-screen">
        <Navbar/>
        <Details/>
      </div>
      </div>
    </>
  )
}

export default dashboard