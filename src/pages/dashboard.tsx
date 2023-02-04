import Home from 'components/dashboard/Home'
import Navbar from 'components/dashboard/Navbar'
import React, { useState } from 'react'
import '../../styles/globals.css'
import SideNavbar from 'components/dashboard/SideNavbar'
import Vendor from 'components/dashboard/Vendor'
function dashboard() {
  const [dashboardPage, setDashboardPage] = useState("home");

  let currentPage = <Home />
  switch(dashboardPage){
    case "home":
      currentPage = <Home />
      break;
    case "vendor":
      currentPage = <Vendor />
  }
  return (
    <>
      <div className="flex flex-row">
        <SideNavbar setDashboardPage={setDashboardPage}/>
      <div className="w-full flex flex-col bg-white min-h-screen">
        <Navbar/>
        {
          currentPage
        }
        {
          dashboardPage
        }
      </div>
      </div>
    </>
  )
}

export default dashboard