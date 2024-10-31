'use client'

import { styled } from '@mui/material'

interface ITypographyProps {
	textWhite?: boolean
}

// TODO: fix textWhite prop
const Typography = styled('p', {
	shouldForwardProp: prop => prop !== 'textWhite'
})<ITypographyProps>(({ textWhite, theme }) => ({
	fontSize: '16px',
	color: textWhite ? undefined : 'var(--primary)',

	[theme.breakpoints.down('sm')]: {
		textAlign: 'center'
	}
}))

export default Typography
