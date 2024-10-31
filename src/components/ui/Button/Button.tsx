'use client'

import styled from '@emotion/styled/base'
import { Button as MUIButton } from '@mui/material'
import { LoadingButton as MUILoadingButton } from '@mui/lab'

type ButtonPropsType = { isLarge?: boolean }
type StyledOptionsType = (
	isLarge: boolean
) => Parameters<ReturnType<typeof styled>>[1]

const getStyledOptions: StyledOptionsType = isLarge => ({
	backgroundColor: 'var(--primary)',
	textTransform: 'none',
	padding: isLarge ? '10px 40px' : '3px 40px',
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

export const Button = styled(MUIButton, {
	shouldForwardProp: prop => prop !== 'isLarge'
})<ButtonPropsType>(({ isLarge = false }) => getStyledOptions(isLarge))

export const LoadingButton = styled(MUILoadingButton, {
	shouldForwardProp: prop => prop !== 'isLarge'
})<ButtonPropsType>(({ isLarge = false }) => getStyledOptions(isLarge))
