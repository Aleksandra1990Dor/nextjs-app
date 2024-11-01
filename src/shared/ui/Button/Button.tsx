'use client'

import { Button as MUIButton, styled } from '@mui/material'
import { LoadingButton as MUILoadingButton } from '@mui/lab'

import { getStyledOptions } from '@/shared/utils'
import { ButtonPropsType, StyledOptionsType } from './types/button.types'

const options = getStyledOptions<ButtonPropsType>(['isLarge'])

const getStyles: StyledOptionsType = ({ isLarge }) => ({
	fontFamily: 'inherit',
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

export const Button = styled(MUIButton, options)<ButtonPropsType>(getStyles)

export const LoadingButton = styled(
	MUILoadingButton,
	options
)<ButtonPropsType>(getStyles)
