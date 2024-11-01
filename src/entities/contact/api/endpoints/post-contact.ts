import { ContactFormType } from '../../types/contact-form.types'
import { POST_CONTACT_URL, headers } from '../consts/api.consts'

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
