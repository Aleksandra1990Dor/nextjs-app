import { Title } from '@/components/ui'
import { Box } from '@mui/material'
import type { FC } from 'react'

const ContactFormSuccess: FC = () => {
	return (
		<Box sx={{ maxWidth: '50%' }}>
			<Title variant='main' isLarge>
				Message generated on the server
			</Title>
		</Box>
	)
}

export default ContactFormSuccess
