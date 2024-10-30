'use client'

import styled from '@emotion/styled/base'

interface ICardProps {
	isSmall?: boolean
}

const Card = styled('div', {
	shouldForwardProp: prop => prop !== 'isSmall'
})<ICardProps>(({ isSmall }) => ({
	width: isSmall ? '27%' : '50%',
	padding: isSmall ? '30px 40px' : '0 40px 0 0',
	display: 'flex',
	flexDirection: 'column',
	gap: isSmall ? '10px' : '20px',
	marginBottom: isSmall ? undefined : '40px',
	borderRadius: '8px',
	backgroundColor: isSmall ? 'var(--bg-secondary)' : undefined,
	cursor: 'pointer',
	transition: 'all .5s ease',

	'&:hover': {
		boxShadow: isSmall ? '0 0 3px var(--secondary)' : undefined,
		backgroundColor: isSmall ? 'var(--secondary)' : undefined
	}
}))

export default Card
