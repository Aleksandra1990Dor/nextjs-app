'use client'

import { ROUTES_DATA } from '@/shared/consts'
import { styled } from '@mui/material'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'

export const MainWrapper = styled('div')(({ theme }) => ({
	minHeight: '100%',
	padding: '82px 0 100px 0',
	display: 'flex',
	flexDirection: 'column',

	[theme.breakpoints.down('sm')]: {
		padding: '80px 0 60px 0'
	}
}))

const Container = styled('main', {
	shouldForwardProp: prop => prop !== 'isColoredBg'
})<{ isColoredBg?: boolean }>(({ isColoredBg }) => ({
	backgroundColor: isColoredBg ? 'var(--bg-secondary)' : undefined,
	padding: isColoredBg ? '20px' : undefined,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	flex: 1
}))

export const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname()
	const isContactsPage = pathname.startsWith(ROUTES_DATA.contactUs)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return <Container isColoredBg={isContactsPage}>{children}</Container>
}
