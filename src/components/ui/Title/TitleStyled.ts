'use client'

import styled from '@emotion/styled/base'

const color = 'var(--black)'
const fontWeight = '700'

export const TitleMain = styled('h1')({
	color,
	fontWeight,
	fontSize: '40px'
})

export const TitleDefault = styled('h2')({
	color,
	fontWeight,
	fontSize: '35px'
})

export const TitleSmall = styled('h3', {
	shouldForwardProp: prop => prop !== 'isLarge'
})<{ isLarge?: boolean }>(({ isLarge }) => ({
	color: isLarge ? color : 'var(--primary)',
	fontSize: isLarge ? '35px' : '20px'
}))
