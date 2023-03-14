import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../navbar/navbar/navbar'
import Banner from '../../banner/banner'

const BaseLayout = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <Outlet />
    </>
  )
}

export default BaseLayout
