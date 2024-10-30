import type { FC } from 'react'
import { Button, Section, Title } from '@/components/ui'
import Link from 'next/link'
import { ROUTES_DATA } from '@/consts/router.data'

const ContactsSection: FC = () => {
	return (
		<Section gap='40px'>
			<Title variant='small' isLarge>
				Less important title
			</Title>
			<Button LinkComponent={Link} href={ROUTES_DATA.contactUs}>
				Contact us
			</Button>
		</Section>
	)
}

export default ContactsSection
