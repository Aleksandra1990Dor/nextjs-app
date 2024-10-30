'use client'

import styled from '@emotion/styled/base'
import { Button as MUIButton } from '@mui/material'
import { LoadingButton as MUILoadingButton } from '@mui/lab'

type StyledOptionsType = Parameters<ReturnType<typeof styled>>[1]

const styledOptions: StyledOptionsType = {
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
}

export const Button = styled(MUIButton)(styledOptions)
export const LoadingButton = styled(MUILoadingButton)(styledOptions)
