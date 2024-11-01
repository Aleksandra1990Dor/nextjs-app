'use client'

import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ROUTES_DATA } from '@/shared/consts'
import { Button } from '@/shared/ui'

const HeaderNavButton: FC = () => {
	const pathname = usePathname()

	const isContactsPage = pathname.startsWith(ROUTES_DATA.contactUs)
	const href = isContactsPage ? ROUTES_DATA.mainPage : ROUTES_DATA.contactUs

	return (
		<Button LinkComponent={Link} href={href}>
			{isContactsPage ? 'Back Home' : 'Contact us'}
		</Button>
	)
}

export default HeaderNavButton
