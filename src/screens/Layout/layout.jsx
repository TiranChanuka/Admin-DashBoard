import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../global/sideBarNew';

const Layout = () => {
  return (
      <div className="bg-black h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1">
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
      
  )
}
export default Layout;