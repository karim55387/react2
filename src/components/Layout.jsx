import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>

  <Navbar/>

  <div className="container mx-auto my-6 py-6 ">

    <Outlet></Outlet>
  </div>

  
  

  
  </>
}
