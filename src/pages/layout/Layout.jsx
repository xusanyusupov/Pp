import React from 'react'
import Hero from '../../components/hero/Hero'
import { Outlet } from 'react-router-dom'
import Category from '../../components/category/Category'
import About from '../about/About'

const Layout = () => {
  return (
    <div>
        <Hero/>
        <main>
          <Outlet/>
          <Category/>
          
        </main>
    </div>
  )
}

export default Layout