'use client'

import { styled } from '@mui/material'

type TitleProps = { isLarge?: boolean }

const color = 'var(--black)'
const fontWeight = '700'

export const TitleMain = styled('h1', {
	shouldForwardProp: prop => prop !== 'isLarge'
})<TitleProps>(({ isLarge, theme }) => ({
	color,
	fontWeight,
	fontSize: isLarge ? '80px' : '40px',
	textAlign: isLarge ? 'center' : undefined,

	[theme.breakpoints.down('md')]: {
		fontSize: isLarge ? '48px' : '40px'
	},

	[theme.breakpoints.down('sm')]: {
		textAlign: 'center',
		fontSize: '40px'
	}
}))

export const TitleDefault = styled('h2')(({ theme }) => ({
	color,
	fontWeight,
	fontSize: '35px',

	[theme.breakpoints.down('sm')]: {
		textAlign: 'center'
	}
}))

export const TitleSmall = styled('h3', {
	shouldForwardProp: prop => prop !== 'isLarge'
})<TitleProps>(({ isLarge, theme }) => ({
	color: isLarge ? color : 'var(--primary)',
	fontSize: isLarge ? '35px' : '20px',

	[theme.breakpoints.down('sm')]: {
		textAlign: 'center'
	}
}))
