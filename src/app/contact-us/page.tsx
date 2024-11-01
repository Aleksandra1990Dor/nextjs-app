import { Metadata } from 'next'

import { ContactUsPage } from '@/app-pages'

export const metadata: Metadata = {
	title: 'Contact us',
	description: 'Contact us page with the form'
}

export default function ContactUs() {
	return <ContactUsPage />
}
