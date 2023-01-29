import React from 'react'
import Home from './home'
import '../../styles/globals.css'
import Navbar from 'components/Navbar'
type Props = {}

export default function index({ }: Props) {
    return (
        <>
            <div className="relative flex flex-col">
                <Navbar />
                <Home />
            </div>
        </>
    )
}