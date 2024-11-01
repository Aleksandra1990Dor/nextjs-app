'use client'

import { styled } from '@mui/material'

const MainWrapper = styled('div')(({ theme }) => ({
	minHeight: '100%',
	padding: '80px 0 100px 0',
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.down('sm')]: {
		padding: '80px 0 60px 0'
	}
}))

export default MainWrapper
