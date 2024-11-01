'use client'

import { styled } from '@mui/material'

const Typography = styled('p')(({ theme }) => ({
	fontSize: '16px',
	color: 'var(--primary)',

	[theme.breakpoints.down('sm')]: {
		textAlign: 'center'
	}
}))

export default Typography
