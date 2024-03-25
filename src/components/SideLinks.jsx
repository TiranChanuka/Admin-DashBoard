import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
} from 'react-icons/hi'

export const SideBarLinks = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'expanses',
		label: 'Expanses',
		path: '/expenses',
		icon: <HiOutlineCube />
	},
	{
		key: 'wallets',
		label: 'Wallets',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'summary',
		label: 'Summary',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'account',
		label: 'Account',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'setting',
		label: 'Setting',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]
