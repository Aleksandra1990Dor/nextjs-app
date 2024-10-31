'use client'

import { styled } from '@mui/material'
import type { FC } from 'react'
import ReactPlayer from 'react-player'

const VideoContainer = styled('div')(({ theme }) => ({
	width: '60%',
	borderRadius: '16px',
	overflow: 'hidden',

	[theme.breakpoints.down('lg')]: {
		width: '100%'
	}
}))

const VideoPlayer: FC = () => {
	return (
		<VideoContainer>
			<ReactPlayer
				url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
				width='100%'
				controls
			/>
		</VideoContainer>
	)
}

export default VideoPlayer
