import { ContactFormType } from '@/shared/types'
import { headers, POST_CONTACT_URL } from './api.consts'

export async function postContact(data: ContactFormType) {
	try {
		const response = await fetch(POST_CONTACT_URL, {
			method: 'POST',
			headers,
			body: JSON.stringify(data)
		}).then(res => res.json())

		return response
	} catch (error) {
		console.error(error)
	}
}
