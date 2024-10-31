'use client'

import { styled } from '@mui/material'

const Header = styled('header')(({ theme }) => ({
	width: '100%',
	padding: '30px 40px 20px 40px',
	backgroundColor: 'var(--white)',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	position: 'fixed',
	left: 0,
	top: 0,
	borderBottom: '1px solid var(--bg)',
	zIndex: 10,

	[theme.breakpoints.down('sm')]: {
		padding: '30px 20px 20px 20px'
	}
}))

export default Header
