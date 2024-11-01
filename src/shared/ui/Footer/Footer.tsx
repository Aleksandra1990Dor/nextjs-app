'use client'

import { styled } from '@mui/material'

const Footer = styled('footer')(({ theme }) => ({
	padding: '40px',
	width: '100%',
	backgroundColor: 'var(--primary)',
	display: 'flex',
	justifyContent: 'center',
	position: 'fixed',
	left: 0,
	bottom: 0,
	borderTop: '1px solid var(--light)',
	zIndex: 10,
	color: 'var(--white)',

	[theme.breakpoints.down('sm')]: {
		padding: '20px'
	}
}))

export default Footer
