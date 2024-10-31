'use client'

import { styled } from '@mui/material'

interface ICardProps {
	isSmall?: boolean
}

const Card = styled('div', {
	shouldForwardProp: prop => prop !== 'isSmall'
})<ICardProps>(({ isSmall, theme }) => ({
	width: isSmall ? '27%' : '50%',
	padding: isSmall ? '30px 40px' : '0 40px 0 0',
	display: 'flex',
	flexDirection: 'column',
	gap: isSmall ? '14px' : '20px',
	marginBottom: isSmall ? undefined : '40px',
	borderRadius: '8px',
	backgroundColor: isSmall ? 'var(--bg-secondary)' : undefined,
	cursor: 'pointer',
	transition: 'all .5s ease',

	'&:hover': {
		boxShadow: isSmall ? '0 0 3px var(--secondary)' : undefined,
		backgroundColor: isSmall ? 'var(--secondary)' : undefined
	},

	[theme.breakpoints.down('lg')]: {
		padding: isSmall ? '30px 40px' : '0',
		width: isSmall ? '30%' : '100%'
	},

	[theme.breakpoints.down('md')]: {
		width: isSmall ? '47%' : '100%'
	},

	[theme.breakpoints.down('sm')]: {
		width: isSmall ? '97%' : '100%',
		padding: isSmall ? '48px' : '0 28px',
		gap: isSmall ? '36px' : '20px'
	}
}))

export default Card
