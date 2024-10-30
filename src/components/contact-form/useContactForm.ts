'use client'

import { useForm } from 'react-hook-form'

export type ContactFormType = {
	name: string
	email: string
	message: string
}

const defaultValues: ContactFormType = {
	email: '',
	message: '',
	name: ''
}

export const useContactForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<ContactFormType>({ defaultValues })

	const onSubmit = (data: ContactFormType) => {
		console.log(data)
	}

	return { register, errors, submitFn: handleSubmit(onSubmit) }
}
