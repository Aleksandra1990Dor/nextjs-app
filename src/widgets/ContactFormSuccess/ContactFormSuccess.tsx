import type { FC } from 'react'
import { Box } from '@mui/material'

import { Title } from '@/shared/ui'

import { boxStyles } from './consts/styles'

const ContactFormSuccess: FC = () => {
	return (
		<Box sx={boxStyles}>
			<Title variant='main' isLarge>
				Message generated on the server
			</Title>
		</Box>
	)
}

export default ContactFormSuccess
