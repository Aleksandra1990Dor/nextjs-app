'use client'

import { type FC } from 'react'

import { VideoContainer } from '@/shared/ui'

import PlayerComponent from './ui/PlayerComponent'

const VideoPlayer: FC = () => {
	return (
		<VideoContainer>
			<PlayerComponent />
		</VideoContainer>
	)
}

export default VideoPlayer
