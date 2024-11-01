'use client'

import { styled } from '@mui/material'

const VideoContainer = styled('div')(({ theme }) => ({
	width: '60%',
	borderRadius: '16px',
	overflow: 'hidden',
	backgroundColor: 'var(--primary)',
	height: '300px',

	[theme.breakpoints.down('lg')]: {
		width: '100%'
	},

	[theme.breakpoints.down('sm')]: {
		height: '240px'
	}
}))

export default VideoContainer
