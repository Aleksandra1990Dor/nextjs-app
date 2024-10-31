'use client'

import { styled } from '@mui/material'

interface ISectionProps {
	colored?: boolean
	flexDirection?: 'row' | 'column'
	gap?: string
}

const Section = styled('section', {
	shouldForwardProp: prop =>
		prop !== 'colored' && prop !== 'flexDirection' && prop !== 'gap'
})<ISectionProps>(
	({ colored, flexDirection = 'column', gap = '10px', theme }) => ({
		padding: flexDirection === 'column' ? '80px' : '40px 80px',
		backgroundColor: colored ? undefined : 'var(--bg-secondary)',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minWidth: '100%',
		flexDirection,
		gap,

		[theme.breakpoints.down('lg')]: {
			gap: flexDirection === 'row' ? '80px' : '40px'
		},

		[theme.breakpoints.down('md')]: {
			gap: '60px',
			flexDirection: flexDirection === 'column' ? 'column' : 'column-reverse',
			padding: '40px'
		},

		[theme.breakpoints.down('sm')]: {
			padding: '30px 20px 40px 20px'
		}
	})
)

export default Section
