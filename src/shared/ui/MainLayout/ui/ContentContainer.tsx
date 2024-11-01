'use client'

import { FC, PropsWithChildren, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { ROUTES_DATA } from '@/shared/consts'

import ContentWrapper from './ContentWrapper'

const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
	const pathname = usePathname()
	const isContactsPage = pathname.startsWith(ROUTES_DATA.contactUs)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<ContentWrapper isColoredBg={isContactsPage}>{children}</ContentWrapper>
	)
}
export default ContentContainer
