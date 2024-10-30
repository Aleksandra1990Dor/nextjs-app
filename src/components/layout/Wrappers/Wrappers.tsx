'use client'

import { ROUTES_DATA } from '@/consts/router.data'
import styled from '@emotion/styled/base'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'

export const MainWrapper = styled('div')({
	minHeight: '100%',
	padding: '82px 0 100px 0',
	display: 'flex',
	flexDirection: 'column'
})

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

	return <Container isColoredBg={isContactsPage}>{children}</Container>
}
