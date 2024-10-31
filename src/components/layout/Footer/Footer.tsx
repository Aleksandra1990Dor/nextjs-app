'use client'

import { styled } from '@mui/material'

const Footer = styled('footer')(({ theme }) => ({
	padding: '40px',
	width: '100%',
	backgroundColor: 'var(--white)',
	display: 'flex',
	justifyContent: 'center',
	position: 'fixed',
	left: 0,
	bottom: 0,
	borderTop: '1px solid var(--secondary)',
	zIndex: 10,

	[theme.breakpoints.down('sm')]: {
		padding: '20px'
	}
}))

export default Footer
