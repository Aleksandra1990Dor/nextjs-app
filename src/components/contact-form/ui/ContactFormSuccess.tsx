import { Title } from '@/components/ui'
import { Box } from '@mui/material'
import type { FC } from 'react'

const ContactFormSuccess: FC = () => {
	return (
		<Box sx={{ maxWidth: { md: '50%', xs: '90%' } }}>
			<Title variant='main' isLarge>
				Message generated on the server
			</Title>
		</Box>
	)
}

export default ContactFormSuccess
