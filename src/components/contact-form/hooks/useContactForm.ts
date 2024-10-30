'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { postContact } from '@/api'
import { ContactFormType } from '@/shared/types'

import { defaultValues } from '../consts/default-values'

export const useContactForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ContactFormType>({ defaultValues })

	const onSubmit = async (data: ContactFormType) => {
		setIsLoading(true)

		const {
			data: { name }
		} = await postContact(data)

		reset(defaultValues)
		setIsLoading(false)
		setIsSuccess(true)

		console.log(`Thank you for your interest, ${name}!`)
	}

	return {
		register,
		errors,
		submitFn: handleSubmit(onSubmit),
		isLoading,
		isSuccess
	}
}
