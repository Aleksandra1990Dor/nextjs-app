'use client'

import { StyledOptions } from '@emotion/styled'
import { styled } from '@mui/material'

import { getStyledOptions } from '@/shared/utils'

type SectionProps = {
	colored?: boolean
	flexDirection?: 'row' | 'column'
	gap?: string
}

const options: StyledOptions = getStyledOptions<SectionProps>([
	'colored',
	'flexDirection',
	'gap'
])

const Section = styled(
	'section',
	options
)<SectionProps>(
	({ colored, flexDirection = 'column', gap = '10px', theme }) => ({
		padding: flexDirection === 'column' ? '80px' : '40px 80px',
		backgroundColor: colored ? undefined : 'var(--bg)',
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
