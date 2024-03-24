import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../global/sidebar';

const Layout = () => {
  return (
      <div className='flex flex-row bg-black h-screen w-screen overflow-hidden'>
          <SideBar/>
          <div className='p-4'>
              <div>{<Outlet/>}</div>
          </div>
          
          
      </div>
      
  )
}
export default Layout;