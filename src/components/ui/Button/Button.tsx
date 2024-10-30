'use client'

import styled from '@emotion/styled/base'
import { Button as MUIButton } from '@mui/material'

const Button = styled(MUIButton)({
	backgroundColor: 'var(--primary)',
	textTransform: 'none',
	padding: '3px 40px',
	fontWeight: '500',
	borderRadius: '10px',
	transition: 'all .5s ease-in-out',
	color: 'var(--white)',

	'&:hover': {
		backgroundColor: 'var(--black)'
	},

	'&:active': {
		backgroundColor: 'var(--primary)'
	}
})

export default Button
