import Details from 'components/dashboard/Details'
import Navbar from 'components/dashboard/Navbar'
import React from 'react'
import '../../styles/globals.css'

function dashboard() {
  return (
    <>
      <div className="flex flex-col bg-white min-h-screen">
        <Navbar/>
        <Details/>
      </div>
    </>
  )
}

export default dashboard