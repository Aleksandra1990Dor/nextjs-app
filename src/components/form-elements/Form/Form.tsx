'use client'

import { styled } from '@mui/material'

const Form = styled('form')(({ theme }) => ({
	width: '40%',
	display: 'flex',
	flexDirection: 'column',
	gap: '26px',
	backgroundColor: 'var(--white)',
	padding: '40px',
	borderRadius: '8px',
	border: '1px solid var(--secondary)',

	[theme.breakpoints.down('lg')]: {
		width: '60%'
	},

	[theme.breakpoints.down('md')]: {
		width: '80%'
	},

	[theme.breakpoints.down('sm')]: {
		width: '100%'
	}
}))

export default Form
