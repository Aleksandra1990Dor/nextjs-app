'use client'

import { type FC } from 'react'
import { ROUTES_DATA } from '@/consts/router.data'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderNavButton: FC = () => {
	const pathname = usePathname()

	const isContactsPage = pathname.startsWith(ROUTES_DATA.contactUs)
	const href = isContactsPage ? ROUTES_DATA.mainPage : ROUTES_DATA.contactUs

	return (
		<Button LinkComponent={Link} href={href}>
			{isContactsPage ? '<- Home' : 'Contact us'}
		</Button>
	)
}

export default HeaderNavButton
