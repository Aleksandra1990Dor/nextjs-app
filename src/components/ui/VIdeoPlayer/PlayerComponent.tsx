'use client'

import { CircularProgress, Stack } from '@mui/material'
import type { FC } from 'react'
import ReactPlayer from 'react-player'

const FallbackComponent = () => {
	return (
		<Stack justifyContent='center' alignItems='center' height='100%'>
			<CircularProgress sx={{ color: 'var(--bg)' }} size='30px' />
		</Stack>
	)
}

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
