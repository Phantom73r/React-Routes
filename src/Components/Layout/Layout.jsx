import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Navbar/>

{/* Routers here */}
<div className="text-center">
<Outlet></Outlet>
</div>




      <Footer/>
    </div>
  )
}
