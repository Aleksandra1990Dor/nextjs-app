'use client'

import type { FC } from 'react'
import ReactPlayer from 'react-player'

import FallbackComponent from './FallbackComponent'

const PlayerComponent: FC = () => {
	return (
		<ReactPlayer
			url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
			width='100%'
			height={'100%'}
			controls
			fallback={<FallbackComponent />}
		/>
	)
}

export default PlayerComponent
