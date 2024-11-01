'use client'

import { styled } from '@mui/material'

import { getStyledOptions } from '@/shared/utils'

type ContentWrapperProps = { isColoredBg?: boolean }

const options = getStyledOptions<ContentWrapperProps>(['isColoredBg'])

const ContentWrapper = styled(
	'main',
	options
)<ContentWrapperProps>(({ isColoredBg }) => ({
	backgroundColor: isColoredBg ? 'var(--bg)' : undefined,
	padding: isColoredBg ? '20px' : undefined,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	flex: 1
}))

export default ContentWrapper
