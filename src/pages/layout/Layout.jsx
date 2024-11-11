import React from 'react'
import Hero from '../../components/hero/Hero'
import { Outlet } from 'react-router-dom'
import Category from '../../components/category/Category'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout