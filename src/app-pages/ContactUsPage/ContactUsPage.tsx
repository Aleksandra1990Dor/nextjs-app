'use client'

import { useState, type FC } from 'react'

import { ContactFormSuccess } from '@/widgets'
import { ContactForm } from '@/features'

const ContactUsPage: FC = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	return (
		<>
			{!isSuccess && <ContactForm setIsSuccess={setIsSuccess} />}
			{isSuccess && <ContactFormSuccess />}
		</>
	)
}

export default ContactUsPage
