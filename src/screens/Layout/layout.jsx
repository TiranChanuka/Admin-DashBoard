import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../global/sideBarNew';
import FabButton from '../../components/floatingButton';
import { CgMenuGridO } from "react-icons/cg";
// import { SideBar } from '../global/sidebar';

const Layout = () => {
	const handleClick = () => {
		console.log('clicked');

	}
	return (
		<div className="bg-black h-screen w-screen overflow-hidden flex flex-row ">
			<div className='hidden lg:block'>
				<Sidebar />
			</div>
			<div className='block lg:hidden'>
				<FabButton onClick={handleClick}>
					<CgMenuGridO />
				</FabButton>
			</div>
			<div className="flex flex-col flex-1">
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>

	)
}
export default Layout;
